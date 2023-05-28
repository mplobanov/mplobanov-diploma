import * as tf from '@tensorflow/tfjs';

export function multiplyMatricesTfGeneral(matrixA: number[][], matrixB: number[][]) {
    const tfMatrixA = tf.tensor2d(matrixA);
    const tfMatrixB = tf.tensor2d(matrixB);
    const product = tf.matMul(tfMatrixA, tfMatrixB);
    return product.arraySync();
  }