import clsx from 'clsx';
import { getTechStacksByIds } from '@/lib/getTechStack';
import type { TechStack } from '@/constants/techStacks';

type TechStackLabelProps = {
  techStacks: Pick<TechStack, 'id'>[];
  className?: string;
};

export default function TechStackLabel({ techStacks, className }: TechStackLabelProps) {
  const stacks = getTechStacksByIds(techStacks.map((s) => s.id));

  return (
    <div className={clsx('flex flex-wrap items-center gap-1 py-2 pr-1', className)}>
      {stacks.map((stack) => {
        return (
          <div
            key={stack.id}
            className='w-fit rounded-md px-2 py-0.5 text-sm text-white'
            style={{ backgroundColor: stack?.color ?? '#666' }}
          >
            <p>{stack.name}</p>
          </div>
        );
      })}
    </div>
  );
}
