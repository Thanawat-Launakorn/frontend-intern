export function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export function _GetLocalStorage<T>(key: string, defaultValue: T) {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = !!saved
        ? isJsonString(saved)
          ? JSON.parse(saved)
          : saved
        : defaultValue;
      return initial;
    }
  } catch (ex) {
    return defaultValue; // or do some other error handling
  }
}
