import clsx from 'clsx';
import { getTechStack } from '@/lib/getTechStack';
import type { TechStack } from '@/constants/techStacks';

type TechStackLabelProps = {
  techStacks: Pick<TechStack, 'id' | 'name'>[];
  className?: string;
};

export default function TechStackLabel({ techStacks, className }: TechStackLabelProps) {
  return (
    <div className={clsx('flex flex-wrap items-center gap-1 py-2 pr-1', className)}>
      {techStacks.map((techStack) => {
        const stack = getTechStack(techStack.id);
        return (
          <div
            key={techStack.id}
            className='w-fit rounded-md px-2 py-0.5 text-sm text-white'
            style={{ backgroundColor: stack?.color ?? '#666' }}
          >
            <p>{techStack.name}</p>
          </div>
        );
      })}
    </div>
  );
}
