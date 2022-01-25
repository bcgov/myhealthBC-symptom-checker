export const setValueByPath = (obj: Record<string, unknown>, key: string, value: unknown) => {
  if (key === null || key === undefined) return [];
  const [key1, key2] = key.split('.');
  if (key1 && key2) {
    setValueByPath(obj[key1] as Record<string, unknown>, key2, value);
    return [key1, obj[key1]];
  }
  obj[key] = value;
  return [];
};
