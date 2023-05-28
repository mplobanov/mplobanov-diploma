export function generateMatrix(m, n) {
  let matrix: number[][] = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = Math.random();
    }
  }
  return matrix;
}
