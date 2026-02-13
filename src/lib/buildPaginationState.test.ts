import { test, describe, expect } from '@jest/globals';
import { buildPaginationState } from './buildPaginationState';

describe('buildPaginationState', () => {
  describe('totalPages calculation', () => {
    test('totalPages should be 2 when totalCount is 10 and limit is 5', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 10,
      });

      expect(result.totalPages).toBe(2);
    });

    test('totalPages should be 3 when totalCount is 11 and limit is 5', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 11,
      });

      expect(result.totalPages).toBe(3);
    });

    test('totalPages should be 1 when totalCount fewer than limit', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 4,
      });

      expect(result.totalPages).toBe(1);
    });

    test('totalPages should be 0 when totalCount is 0', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 0,
      });

      expect(result.totalPages).toBe(0);
    });
  });

  describe('Navigation flags', () => {
    test('hasPrev should be false on first page', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 10,
      });

      expect(result.hasPrev).toBe(false);
    });

    test('hasPrev should be true on second page', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 2,
        totalCount: 10,
      });

      expect(result.hasPrev).toBe(true);
    });

    test('hasNext should be true when not on last page', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 10,
      });

      expect(result.hasNext).toBe(true);
    });

    test('hasNext should be false on last page', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 2,
        totalCount: 10,
      });

      expect(result.hasNext).toBe(false);
    });
  });

  describe('URL construction', () => {
    test('prevUrl should not include category when currentCategory is undefined', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 2,
        totalCount: 10,
      });

      expect(result.prevUrl).toBe('/notes?page=1');
    });

    test('prevUrl should include category when currentCategory is provided', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 2,
        totalCount: 10,
        currentCategory: 'react',
      });

      expect(result.prevUrl).toBe('/notes?page=1&category=react');
    });

    test('nextUrl should not include category when currentCategory is undefined', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 10,
      });

      expect(result.nextUrl).toBe('/notes?page=2');
    });

    test('nextUrl should include category when currentCategory is provided', () => {
      const result = buildPaginationState({
        limit: 5,
        currentPage: 1,
        totalCount: 10,
        currentCategory: 'react',
      });

      expect(result.nextUrl).toBe('/notes?page=2&category=react');
    });
  });
});
