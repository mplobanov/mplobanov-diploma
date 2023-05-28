import { multiplyMatricesTfGeneral } from "../multiply/tf-general";
import { MultiplyType } from "../multiply/types";

self.onmessage = async function (
  event: MessageEvent<{
    matrix1: number[][];
    matrix2: number[][];
    trial: number;
    type: MultiplyType;
  }>
) {
  const { matrix1, matrix2, trial, type } = event.data;
  const time = await multiplyMatricesTfGeneral(matrix1, matrix2, type);
  self.postMessage({ time, trial });
};
