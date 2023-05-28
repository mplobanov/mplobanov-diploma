export function generateMatrix(m: number, n: number) {
  const matrix: number[][] = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = Math.random();
    }
  }
  return matrix;
}
