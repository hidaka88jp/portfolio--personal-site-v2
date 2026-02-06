import Image from 'next/image';

import { TECH_STACKS } from '@/constants/techStacks';

import TopSectionTitle from '@/components/shared/TopSectionTitle';
import TechStackBadge from '@/components/shared/TechStackBadge';

const TOP_PAGE_TECH_STACK_IDS = [
  'html',
  'css',
  'sass',
  'bem',
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'tailwindcss',
  'css-modules',
  'eslint',
  'prettier',
  'husky',
  'jest',
  'vitest',
  'testing-library',
  'nodejs',
  'git',
  'github',
  'github-actions',
  'firebase-hosting',
  'vercel',
];

export default function About() {
  const topPageStacks = TECH_STACKS.filter((stack) => TOP_PAGE_TECH_STACK_IDS.includes(stack.id));

  return (
    <section id='about' className='px-4 pb-16 sm:px-8 sm:pb-28'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <TopSectionTitle title='About' subTitle='Introduce Myself' />
        <div className='grid gap-7 lg:grid-cols-2 lg:gap-10'>
          <Image
            src='/images/about.webp'
            alt='About Image'
            width={3024}
            height={3780}
            className='aspect-square w-full object-cover object-bottom sm:aspect-3/2 sm:object-center lg:order-2 lg:aspect-auto'
          />
          <div className='w-full lg:order-1'>
            <div className='mb-4 flex flex-col items-center lg:items-start'>
              <h3 className='font-inconsolata mb-1 text-xl font-medium sm:font-normal'>Who I am</h3>
              <div className='bg-accent h-0.5 w-8' />
            </div>
            <p className='mb-7 sm:mb-9'>
              Hi, I&apos;m Taka. I’m a self-taught web developer, currently focusing on frontend.
              <br />
              <br />
              After spending time reflecting on the right path for me, I’ve chosen to pursue web
              development seriously. I’ve built several portfolio projects and experimented with
              various technologies.
              <br />
              <br />
              I’m committed to growing in this field long-term and am always learning new skills.
            </p>
            <div className='mb-4 flex flex-col items-center lg:items-start'>
              <h3 className='font-inconsolata mb-1 text-xl font-medium sm:font-normal'>Skills</h3>
              <div className='bg-accent h-0.5 w-8' />
            </div>
            <div className='flex flex-wrap gap-2 sm:gap-2.5'>
              {topPageStacks.map((techStack) => (
                <TechStackBadge
                  key={techStack.id}
                  name={techStack.name}
                  Icon={techStack.Icon}
                  color={techStack.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
