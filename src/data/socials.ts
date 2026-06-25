export interface Social {
  label: string;
  href: string;
  icon: string;       // icon key (see src/lib/iconData.ts)
  external?: boolean;
}

export const socials: Social[] = [
  { label: 'email',             href: 'mailto:shishir.sabbir@gmail.com', icon: 'mail' },
  { label: 'github',            href: 'https://github.com/shishirsabbir', icon: 'github', external: true },
  { label: 'telegram',          href: 'https://t.me/shishirsabbir',       icon: 'telegram', external: true },
  { label: 'whatsapp',          href: 'https://wa.me/8801883061280',      icon: 'whatsapp', external: true },
  { label: '+880 1883 061280',  href: 'tel:+8801883061280',               icon: 'phone' },
];

export const githubUrl = 'https://github.com/shishirsabbir';
