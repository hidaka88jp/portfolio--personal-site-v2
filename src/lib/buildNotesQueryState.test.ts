import { buildNotesQueryState } from './buildNotesQueryState';
import type { TechStack } from '@/lib/microcms';
import { test, describe, expect } from '@jest/globals';

const mockStacks: TechStack[] = [
  { id: 'react', name: 'React' },
  { id: 'nextjs', name: 'Next.js' },
];

describe('buildNotesQueryState', () => {
  describe('page validation', () => {
    test('currentPage should be 2 when page is 2', () => {
      const result = buildNotesQueryState({
        page: '2',
        techStacks: mockStacks,
      });

      expect(result.currentPage).toBe(2);
      expect(result.isInvalidPage).toBe(false);
    });

    test('currentPage should be 1 when page is not provided', () => {
      const result = buildNotesQueryState({
        techStacks: mockStacks,
      });

      expect(result.currentPage).toBe(1);
      expect(result.isInvalidPage).toBe(false);
    });

    test('invalidPage should be true when page is 0', () => {
      const result = buildNotesQueryState({
        page: '0',
        techStacks: mockStacks,
      });

      expect(result.currentPage).toBe(0);
      expect(result.isInvalidPage).toBe(true);
    });

    test('invalidPage should be true when page is negative', () => {
      const result = buildNotesQueryState({
        page: '-1',
        techStacks: mockStacks,
      });

      expect(result.currentPage).toBe(-1);
      expect(result.isInvalidPage).toBe(true);
    });

    test('invalidPage should be true when page is not a number', () => {
      const result = buildNotesQueryState({
        page: 'abc',
        techStacks: mockStacks,
      });

      expect(result.currentPage).toBeNaN();
      expect(result.isInvalidPage).toBe(true);
    });
  });

  describe('category validation', () => {
    test('currentCategory and filter should be set when category is valid', () => {
      const result = buildNotesQueryState({
        category: 'react',
        techStacks: mockStacks,
      });

      expect(result.currentCategory).toBe('react');
      expect(result.filters).toBe('techStack[contains]react');
    });

    test('currentCategory and filter should be undefined when category is not provided', () => {
      const result = buildNotesQueryState({
        techStacks: mockStacks,
      });

      expect(result.currentCategory).toBeUndefined();
      expect(result.filters).toBeUndefined();
    });

    test('currentCategory and filter should be undefined when category is invalid', () => {
      const result = buildNotesQueryState({
        category: 'php',
        techStacks: mockStacks,
      });

      expect(result.currentCategory).toBeUndefined();
      expect(result.filters).toBeUndefined();
    });
  });

  describe('listUrl construction', () => {
    test('listUrl should be /notes when no page or category', () => {
      const result = buildNotesQueryState({
        techStacks: mockStacks,
      });

      expect(result.listUrl).toBe('/notes');
    });

    test('listUrl should include page when page is greater than 1', () => {
      const result = buildNotesQueryState({
        page: '2',
        techStacks: mockStacks,
      });

      expect(result.listUrl).toBe('/notes?page=2');
    });

    test('listUrl should include category when category is valid', () => {
      const result = buildNotesQueryState({
        category: 'react',
        techStacks: mockStacks,
      });

      expect(result.listUrl).toBe('/notes?category=react');
    });

    test('listUrl should include both page and category when both are provided', () => {
      const result = buildNotesQueryState({
        page: '3',
        category: 'nextjs',
        techStacks: mockStacks,
      });

      expect(result.listUrl).toBe('/notes?page=3&category=nextjs');
    });

    test('listUrl should not include page when page is 1', () => {
      const result = buildNotesQueryState({
        page: '1',
        category: 'react',
        techStacks: mockStacks,
      });

      expect(result.listUrl).toBe('/notes?category=react');
    });
  });

  describe('pagination parameters', () => {
    test('offset should be 0 for page 1', () => {
      const result = buildNotesQueryState({
        page: '1',
        techStacks: mockStacks,
      });

      expect(result.limit).toBe(5);
      expect(result.offset).toBe(0);
    });

    test('offset should be 5 for page 2', () => {
      const result = buildNotesQueryState({
        page: '2',
        techStacks: mockStacks,
      });

      expect(result.limit).toBe(5);
      expect(result.offset).toBe(5);
    });
  });
});
