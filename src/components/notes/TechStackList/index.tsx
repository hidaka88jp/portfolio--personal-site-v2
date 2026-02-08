import Link from 'next/link';
import type { TechStack } from '@/lib/microcms';
import { getTechStack } from '@/lib/getTechStack';
import TechStackBadge from '@/components/shared/TechStackBadge';

type Props = {
  techStacks: TechStack[];
};

export default function TechStackList({ techStacks }: Props) {
  return (
    <ul className='flex flex-wrap gap-3 lg:flex-col'>
      <li className='border-gray flex w-fit items-center rounded-md border px-2 py-1'>
        <Link href='/notes'>ALL</Link>
      </li>
      {techStacks.map((techStack) => {
        const localStack = getTechStack(techStack.id);
        if (!localStack) return null;

        return (
          <li key={localStack.id} className='w-fit'>
            <Link href={`/notes?category=${localStack.id}`}>
              <TechStackBadge
                name={localStack.name}
                Icon={localStack.Icon}
                color={localStack.color}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
