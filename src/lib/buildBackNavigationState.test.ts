import { buildBackNavigationState } from './buildBackNavigationState';
import { test, describe, expect } from '@jest/globals';

describe('buildBackNavigationState', () => {
  test('buildBackNavigationState should decode rawFrom and set backLabel to "Back to Notes"', () => {
    const rawFrom = encodeURIComponent('/notes?page=2&category=react');
    const result = buildBackNavigationState(rawFrom);

    expect(result).toEqual({
      from: '/notes?page=2&category=react',
      backLabel: 'Back to Notes',
    });
  });

  test('buildBackNavigationState returns default state when rawFrom is not provided', () => {
    const result = buildBackNavigationState();

    expect(result).toEqual({
      from: '/notes',
      backLabel: 'Back to Notes',
    });
  });

  test('buildBackNavigationState returns correct backLabel when rawFrom includes #notes', () => {
    const rawFrom = encodeURIComponent('/#notes');
    const result = buildBackNavigationState(rawFrom);

    expect(result).toEqual({
      from: '/#notes',
      backLabel: 'Back to Top',
    });
  });
});
