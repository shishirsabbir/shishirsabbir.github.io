/* enhance.ts — progressive enhancement for the Nebula portfolio.
   All effects are additive: the page is fully usable without JS, and every
   motion respects prefers-reduced-motion. Re-inits on Astro view transitions. */

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- one-time global listeners (cursor + scroll) ---------- */
let globalsBound = false;

function bindGlobals() {
  if (globalsBound) return;
  globalsBound = true;

  // scroll: nav state, top progress bar, timeline fill
  const onScroll = () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('scrolled', scrollY > 30);

    const bar = document.querySelector<HTMLElement>('.scroll-progress');
    if (bar) {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.setProperty('--p', h > 0 ? String(scrollY / h) : '0');
    }

    const tl = document.querySelector<HTMLElement>('[data-timeline]');
    const prog = document.querySelector<HTMLElement>('[data-prog]');
    if (tl && prog) {
      const r = tl.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (innerHeight * 0.6 - r.top) / r.height));
      prog.style.setProperty('--p', p * 100 + '%');
    }
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // custom cursor
  if (!reduce) {
    const cur = document.querySelector<HTMLElement>('.cursor');
    if (cur) {
      let cx = 0, cy = 0, tx = 0, ty = 0;
      addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
      const loop = () => {
        cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
        cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
        requestAnimationFrame(loop);
      };
      loop();
      // delegate hover growth
      addEventListener('mouseover', (e) => {
        if ((e.target as Element)?.closest?.('a,button,.skill,.project,.stat')) cur.classList.add('grow');
      });
      addEventListener('mouseout', (e) => {
        if ((e.target as Element)?.closest?.('a,button,.skill,.project,.stat')) cur.classList.remove('grow');
      });
    }
  }
}

/* ---------- per-page init (observers + per-element listeners) ---------- */
function init() {
  // scroll reveal
  const revealIO = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); } }),
    { threshold: 0.15 },
  );
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => revealIO.observe(el));

  // count-up stats
  const countIO = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      const target = Number(el.dataset.count || 0);
      const suf = el.dataset.suffix || '';
      countIO.unobserve(el);
      if (reduce) { el.textContent = target.toLocaleString() + suf; return; }
      const dur = 1600, t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        const e2 = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(e2 * target).toLocaleString() + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countIO.observe(el));

  // nav active link
  const sections = ['#about', '#skills', '#work', '#experience', '#contact']
    .map((id) => document.querySelector(id))
    .filter(Boolean) as Element[];
  const links = new Map<string, Element>();
  document.querySelectorAll('[data-link]').forEach((a) => links.set((a as HTMLElement).dataset.link!, a));
  const navIO = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const id = '#' + e.target.id;
      links.forEach((a) => a.classList.toggle('active', a === links.get(id)));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => navIO.observe(s));

  // sticky project scrollytelling
  const projects = [...document.querySelectorAll<HTMLElement>('.project')];
  const layers = [...document.querySelectorAll<HTMLElement>('.proj-visual .layer')];
  if (projects.length && layers.length) {
    const projIO = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const i = Number((e.target as HTMLElement).dataset.p);
        projects.forEach((p) => p.classList.toggle('active', p === e.target));
        layers.forEach((l) => l.classList.toggle('on', Number(l.dataset.v) === i));
      });
    }, { threshold: 0.6, rootMargin: '-10% 0px -30% 0px' });
    projects.forEach((p) => projIO.observe(p));
  }

  if (reduce) return;

  // skill pointer-follow glow
  document.querySelectorAll<HTMLElement>('[data-glow]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', e.clientX - r.left + 'px');
      card.style.setProperty('--my', e.clientY - r.top + 'px');
    });
  });

  // magnetic buttons
  document.querySelectorAll<HTMLElement>('.btn').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });
}

function boot() { bindGlobals(); init(); }

// initial load + after every Astro view transition
if (document.readyState !== 'loading') boot();
else addEventListener('DOMContentLoaded', boot);
document.addEventListener('astro:page-load', init);
