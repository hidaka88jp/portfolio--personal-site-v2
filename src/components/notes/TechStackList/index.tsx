import Link from 'next/link';
import type { TechStack } from '@/lib/microcms';
import { getTechStacksByIds } from '@/lib/getTechStack';
import TechStackBadge from '@/components/shared/TechStackBadge';

type Props = {
  techStacks: TechStack[];
};

export default function TechStackList({ techStacks }: Props) {
  const stacks = getTechStacksByIds(techStacks.map((s) => s.id));

  return (
    <ul className='flex flex-wrap gap-3 lg:flex-col'>
      <li className='border-gray flex w-fit items-center rounded-md border px-2 py-1'>
        <Link href='/notes'>ALL</Link>
      </li>
      {stacks.map((stack) => {
        return (
          <li key={stack.id} className='w-fit'>
            <Link href={`/notes?category=${stack.id}`}>
              <TechStackBadge name={stack.name} Icon={stack.Icon} color={stack.color} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
