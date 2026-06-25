export interface Project {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  url?: string;
  urlLabel?: string;
  highlights: string[];
  stack: string[];
  accent: string;       // per-project accent color
}

export const projects: Project[] = [
  {
    slug: 'mobiorbit',
    name: 'MobiOrbit',
    role: 'Founder / Solo · active dev',
    tagline: 'South-Asia smartphone intelligence & commerce platform — specs, comparison, search.',
    url: 'https://mobiorbit.com',
    urlLabel: 'mobiorbit.com',
    highlights: [
      'pnpm + Turborepo monorepo: Fastify 5 API (raw MongoDB, JWT), Next.js 15 public site (ISR), Vite + React 19 admin with a from-scratch Polaris-inspired UI library.',
      'Python GSMArena scraper + mobiCrawl Chrome extension (MV3, Shadow DOM); media on Cloudflare R2.',
      'Clean architecture: services layer, slug-based routing, typed raw-driver Mongo (no ODM).',
    ],
    stack: ['Fastify', 'MongoDB', 'Next.js 15', 'React 19', 'Turborepo', 'Cloudflare R2'],
    accent: '#4db8ff',
  },
  {
    slug: 'mycareerpathshala',
    name: 'MyCareerPathshala',
    role: 'Solo',
    tagline: 'Full-stack education platform — custom CMS, public site, admin dashboard, deployed solo.',
    url: 'https://www.mycareerpathshala.com',
    urlLabel: 'mycareerpathshala.com',
    highlights: [
      'Custom CMS by forking + extending Strapi 5 (Yarn monorepo), REST & GraphQL, custom TipTap editor plugin.',
      'Next.js student frontend + a separate Next.js admin; Drizzle on PostgreSQL; JWT (jose) + bcrypt; Resend email.',
      'Three Docker containers on a Hostinger VPS via Coolify, Nginx, Cloudflare DNS, Let’s Encrypt SSL.',
    ],
    stack: ['Strapi 5', 'Next.js', 'Drizzle', 'PostgreSQL', 'Docker', 'Coolify'],
    accent: '#a78bfa',
  },
  {
    slug: 'economed',
    name: 'Economed',
    role: 'Freelance',
    tagline: 'Production Shopify store powered by a 70,000-product automated data pipeline.',
    url: 'https://economed.co.uk',
    urlLabel: 'economed.co.uk',
    highlights: [
      'Scraped & processed 70,000+ products into a pipeline that cleans, normalizes, and bulk-imports the catalog with zero manual entry.',
      'Complete store with custom Liquid theming, driven through the Shopify Admin API (GraphQL).',
    ],
    stack: ['Shopify', 'Liquid', 'Admin GraphQL', 'Scrapy', 'curl_cffi'],
    accent: '#3ee08a',
  },
];
