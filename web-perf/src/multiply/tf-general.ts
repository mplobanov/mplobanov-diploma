import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-wasm";
import "@tensorflow/tfjs-backend-webgpu";
import { MultiplyType } from "./types";
import { measureExecutionTimeAsync } from "../utils/measure";

import { setWasmPaths } from "@tensorflow/tfjs-backend-wasm";

setWasmPaths(
  "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm/dist/"
);

export const backendMap: Record<MultiplyType, string> = {
  [MultiplyType.PlainJS]: "cpu",
  [MultiplyType.TFCpu]: "cpu",
  [MultiplyType.TFWasm]: "wasm",
  [MultiplyType.TFWebGL]: "webgl",
  [MultiplyType.TFWebGPU]: "webgpu",
};

const mul = async (matrixA: number[][], matrixB: number[][]) => {
  const tfMatrixA = tf.tensor2d(matrixA);
  const tfMatrixB = tf.tensor2d(matrixB);
  const product = tf.matMul(tfMatrixA, tfMatrixB);
  return product.array();
};

export async function multiplyMatricesTfGeneral(
  matrixA: number[][],
  matrixB: number[][],
  backend: MultiplyType
) {
  await tf.setBackend(backendMap[backend]);
  await tf.ready();
  return await measureExecutionTimeAsync(mul, matrixA, matrixB);
}
