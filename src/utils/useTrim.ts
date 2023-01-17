export function useTrim() {
  function trim(str: string) {
    return str.trim();
  }

  return {
    trim,
  };
}
