/** Merge CSS class names, filtering out falsy values. */
export function cx(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
