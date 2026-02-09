import { TECH_STACKS } from '@/constants/techStacks';
import type { TechStack } from '@/constants/techStacks';

export function getTechStacksByIds(ids: string[]): TechStack[] {
  const techStackMap = new Map(TECH_STACKS.map((stack) => [stack.id, stack]));

  return ids
    .map((id) => techStackMap.get(id))
    .filter((stack): stack is TechStack => Boolean(stack));
}
