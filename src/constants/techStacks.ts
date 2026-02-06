import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiBem,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCssmodules,
  SiNodedotjs,
  SiPhp,
  SiWordpress,
  SiEslint,
  SiPrettier,
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiLinux,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiFirebase,
  SiVercel,
  SiGithubpages,
  SiFigma,
  SiAffinitydesigner,
  SiAffinityphoto,
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';
import { FaAws } from 'react-icons/fa';

export type TechStack = {
  id: string;
  name: string;
  Icon?: React.ComponentType<{ className?: string }>;
  color: string;
};

export const TECH_STACKS: TechStack[] = [
  {
    id: 'html',
    name: 'HTML',
    Icon: SiHtml5,
    color: '#E34F26',
  },
  {
    id: 'css',
    name: 'CSS',
    Icon: SiCss3,
    color: '#663399',
  },
  {
    id: 'sass',
    name: 'Sass',
    Icon: SiSass,
    color: '#CC6699',
  },
  {
    id: 'bem',
    name: 'Bem',
    Icon: SiBem,
    color: '#383434',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    Icon: SiJavascript,
    color: '#FFC31F',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    Icon: SiTypescript,
    color: '#3178C6',
  },
  {
    id: 'react',
    name: 'React',
    Icon: SiReact,
    color: '#5ED2F3',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    Icon: SiNextdotjs,
    color: '#383434',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    id: 'css-modules',
    name: 'CSS Modules',
    Icon: SiCssmodules,
    color: '#383434',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    Icon: SiNodedotjs,
    color: '#5FA04E',
  },
  {
    id: 'php',
    name: 'PHP',
    Icon: SiPhp,
    color: '#777BB4',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    Icon: SiWordpress,
    color: '#21759B',
  },
  {
    id: 'microcms',
    name: 'microCMS',
    color: '#2A2B2E',
  },
  {
    id: 'eslint',
    name: 'ESLint',
    Icon: SiEslint,
    color: '#6B57C9',
  },
  {
    id: 'prettier',
    name: 'Prettier',
    Icon: SiPrettier,
    color: '#F7B93E',
  },
  {
    id: 'husky',
    name: 'Husky',
    color: '#383434',
  },
  {
    id: 'jest',
    name: 'Jest',
    Icon: SiJest,
    color: '#C21325',
  },
  {
    id: 'vitest',
    name: 'Vitest',
    Icon: SiVitest,
    color: '#6E9F18',
  },
  {
    id: 'testing-library',
    name: 'Testing Library',
    Icon: SiTestinglibrary,
    color: '#E33332',
  },
  {
    id: 'linux',
    name: 'Linux',
    Icon: SiLinux,
    color: '#F6AB05',
  },
  {
    id: 'docker',
    name: 'Docker',
    Icon: SiDocker,
    color: '#2496ED',
  },
  {
    id: 'git',
    name: 'Git',
    Icon: SiGit,
    color: '#F05032',
  },
  {
    id: 'github',
    name: 'GitHub',
    Icon: SiGithub,
    color: '#383434',
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    Icon: SiGithubactions,
    color: '#2088FF',
  },
  {
    id: 'firebase-hosting',
    name: 'Firebase Hosting',
    Icon: SiFirebase,
    color: '#DD2C00',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    Icon: SiVercel,
    color: '#383434',
  },
  {
    id: 'github-pages',
    name: 'GitHub Pages',
    Icon: SiGithubpages,
    color: '#222222',
  },
  {
    id: 'aws',
    name: 'AWS',
    Icon: FaAws,
    color: '#F69400',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    Icon: VscVscode,
    color: '#2096E8',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    color: '#383434',
  },
  {
    id: 'figma',
    name: 'Figma',
    Icon: SiFigma,
    color: '#F24E1E',
  },
  {
    id: 'affinity-designer',
    name: 'Affinity Designer',
    Icon: SiAffinitydesigner,
    color: '#134881',
  },
  {
    id: 'affinity-photo',
    name: 'Affinity Photo',
    Icon: SiAffinityphoto,
    color: '#4E3188',
  },
];
