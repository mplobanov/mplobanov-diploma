import { useCallback } from "react";
import { useAddMessage } from "../logger/hooks";
import { ExperimentProps } from "./types";
import { MultiplyType } from "../multiply/types";
import { generateMatrix } from "../utils/generate";
import { analyse } from "../utils/avgStd";
import { makeTextFile } from "../utils/createFile";
import VanillaWorker from "./worker.ts?worker";
import TfWorker from "./tfWorker.ts?worker";

export interface StartExperimentProps {
  expProps: ExperimentProps;
  onFinish: () => void;
}

export const useExperiment = () => {
  const addMessage = useAddMessage();

  const finish = useCallback(
    (times: number[], onFinish: StartExperimentProps["onFinish"]) => {
      const { mean, std } = analyse(times);

      addMessage(`<strong>Finished</strong>: Mean = ${mean}, std = ${std}`);

      onFinish();
    },
    [addMessage]
  );

  const copyToClipBoard = useCallback(
    (data: ExperimentProps & { times: number[] }) => {
      const url = makeTextFile(JSON.stringify(data));
      addMessage(
        `You can download <u><a href="${url}" download="${`${data.N}x${data.M}x${data.K}_${data.type}_${data.trials}.json`}">experiment data</a></u>.`
      );
    },
    [addMessage]
  );

  const startExperiment = useCallback<(props: StartExperimentProps) => void>(
    ({ expProps, onFinish }) => {
      const { N, M, K, trials, type } = expProps;

      addMessage(
        `<strong>Exp started</strong> N=${N} M=${M} K=${K} volume=${N * M * K}`
      );

      const times: number[] = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let worker: any = undefined;

      if (type === MultiplyType.PlainJS) {
        worker = new VanillaWorker();
      } else {
        worker = new TfWorker();
      }

      worker.onmessage = (e: MessageEvent<{ time: number; trial: number }>) => {
        times.push(e.data.time);
        addMessage(`Try: ${e.data.trial}. Time = ${e.data.time} ms`);
        if (times.length === trials) {
          finish(times, onFinish);
          copyToClipBoard({ ...expProps, times });
          worker.terminate();
        } else {
          const matrix1 = generateMatrix(N, M);
          const matrix2 = generateMatrix(M, K);
          worker.postMessage({ matrix1, matrix2, trial: times.length, type });
        }
      };

      const matrix1 = generateMatrix(N, M);
      const matrix2 = generateMatrix(M, K);
      worker.postMessage({ matrix1, matrix2, trial: times.length, type });
    },
    [addMessage, copyToClipBoard, finish]
  );

  return { startExperiment };
};
