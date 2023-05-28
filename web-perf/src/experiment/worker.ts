import { MultiplyType } from "../multiply/types";
import { multiplyMatrices } from "../multiply/vanilla";
import { measureExecutionTime } from "../utils/measure";

self.onmessage = function (
  event: MessageEvent<{
    matrix1: number[][];
    matrix2: number[][];
    trial: number;
    type: MultiplyType;
  }>
) {
  const { matrix1, matrix2, trial } = event.data;
  const time = measureExecutionTime(multiplyMatrices, matrix1, matrix2);
  self.postMessage({ time, trial });
};
