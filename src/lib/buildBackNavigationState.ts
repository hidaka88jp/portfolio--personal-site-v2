export function buildBackNavigationState(rawFrom?: string) {
  const from = rawFrom ? decodeURIComponent(rawFrom) : '/notes';
  const backLabel = from.includes('#notes') ? 'Back to Top' : 'Back to Notes';

  return { from, backLabel };
}
