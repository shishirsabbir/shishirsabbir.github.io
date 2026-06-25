export interface Profile {
  name: string;
  handle: string;          // terminal/console handle
  role: string;
  location: string;
  email: string;
  phone: string;
  available: string;
  tagline: string;         // hero sub (HTML-safe plain text; bold spans handled in markup)
  resume: string;          // path under BASE_URL
}

export const profile: Profile = {
  name: 'Shishir Sabbir',
  handle: 'shishirsabbir',
  role: 'Full-Stack Developer',
  location: 'Rajshahi, Bangladesh',
  email: 'shishir.sabbir@gmail.com',
  phone: '+880 1883 061280',
  available: 'Available for freelance',
  tagline:
    'Full-stack developer with an edge in extreme web automation & scraping. I build complete products — Fastify/Next.js monorepos, Shopify pipelines, and self-hosted platforms on bare VPS.',
  resume: 'resume.pdf',
};

/** Quick stats for the animated counters. */
export interface Stat { value: number; suffix?: string; label: string; }
export const stats: Stat[] = [
  { value: 6,     suffix: '+', label: 'years coding' },
  { value: 70000, suffix: '+', label: 'products scraped' },
  { value: 3,                  label: 'platforms solo', suffix: '' },
  { value: 15,    suffix: '+', label: 'daily tools' },
];

export const about = {
  lead:
    'Building since 2019 — from C and Python through Node.js into professional web dev. I design and ship entire products: monorepo architectures, REST/GraphQL APIs, SQL & NoSQL data layers, React/Next.js frontends, and self-hosted VPS deployments.',
  body:
    'My edge is large-scale web automation & scraping with anti-bot handling, plus building and customizing Shopify and Strapi platforms.',
};
