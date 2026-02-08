import { TECH_STACKS, TechStack } from '@/constants/techStacks';

export function getTechStack(id: string): TechStack | undefined {
  return TECH_STACKS.find((stack) => stack.id === id);
}
