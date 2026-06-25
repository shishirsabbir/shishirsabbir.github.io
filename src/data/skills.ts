export interface SkillGroup {
  category: string;
  icon: string;        // category icon key
  items: string[];     // brand-logo icons are resolved from the label via iconFor()
}

export const skills: SkillGroup[] = [
  { category: 'languages', icon: 'code',
    items: ['JavaScript', 'TypeScript', 'Python', 'C', 'Bash', 'SQL'] },
  { category: 'automation & scraping', icon: 'bot',
    items: ['Playwright', 'Selenium', 'Scrapy', 'BeautifulSoup4', 'selectolax', 'httpx', 'curl_cffi'] },
  { category: 'frontend', icon: 'monitor',
    items: ['React', 'Next.js', 'Vite', 'Svelte', 'React Native', 'Electron'] },
  { category: 'backend', icon: 'server',
    items: ['Node.js', 'Fastify', 'Express', 'Koa', 'FastAPI', 'REST · GraphQL', 'JWT'] },
  { category: 'databases & orms', icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Drizzle', 'SQLAlchemy', 'Mongoose'] },
  { category: 'platforms & cms', icon: 'shopping-bag',
    items: ['Shopify', 'Liquid', 'Strapi 5', 'Chrome MV3'] },
  { category: 'ml & data', icon: 'brain',
    items: ['NumPy', 'pandas', 'OpenCV', 'scikit-learn', 'Jupyter'] },
  { category: 'infra & devops', icon: 'cloud',
    items: ['Docker', 'Coolify', 'Nginx', 'Cloudflare R2', 'Turborepo', 'Linux'] },
];

/** keyword strip under the hero/about */
export const marquee: string[] = [
  'Playwright', 'Scrapy', 'curl_cffi', 'selectolax', 'Fastify', 'Next.js',
  'Shopify', 'Strapi 5', 'Docker', 'Coolify', 'Cloudflare R2', 'PostgreSQL', 'MongoDB',
];
