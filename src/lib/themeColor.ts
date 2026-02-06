export function setThemeColor(color: string) {
  // Prevent errors in non-browser environments
  if (typeof document === 'undefined') return;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', color);
}
