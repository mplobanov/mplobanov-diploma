export function measureExecutionTime<T extends Array<unknown>>(
  func: (...args: T) => void,
  ...args: T
) {
  const start = performance.now();
  func(...args);
  const end = performance.now();
  return end - start;
}

export async function measureExecutionTimeAsync<T extends Array<unknown>>(
  func: (...args: T) => Promise<unknown>,
  ...args: T
) {
  const start = performance.now();
  await func(...args);
  const end = performance.now();
  return end - start;
}
