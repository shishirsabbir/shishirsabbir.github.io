export interface Experience {
  when: string;
  title: string;
  body: string;
}

export const experience: Experience[] = [
  {
    when: '2020 — Present',
    title: 'Freelance Full-Stack Developer',
    body: 'End-to-end client web apps; Shopify & Strapi customization; large-scale scraping/automation with anti-bot handling; VPS deployment & self-hosting.',
  },
  {
    when: '2019 — 2020',
    title: 'Web Developer · Early career',
    body: 'From C/Python fundamentals into professional web dev; first backends (FastAPI + SQLAlchemy, Express + MongoDB).',
  },
  {
    when: 'in progress',
    title: 'B.Sc. Computer Science — Hebei University of Science & Technology',
    body: 'Thesis: deep-learning weld-pool penetration sensing via biprism stereo vision — DE-Net edge-aware CNNs, disparity optimization, 3D feature extraction for weld-quality classification.',
  },
];
