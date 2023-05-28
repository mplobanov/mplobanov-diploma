export function measureExecutionTime<T extends Array<unknown>>(func: (...args: T) => void, ...args: T) {
  const start = performance.now();
  func(...args);
  const end = performance.now();
  return end - start;
}
