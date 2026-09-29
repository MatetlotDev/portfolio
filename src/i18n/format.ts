export function formatMessage(
  template: string,
  values: Record<string, string>,
) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    return values[key] ?? match;
  });
}
