import { useCallback } from "react";
import { useAddMessage } from "../logger/hooks";
import { ExperimentProps } from "./types";
import { multipliers } from "../multiply/types";
import { measureExecutionTime } from "../utils/measure";
import { generateMatrix } from "../utils/generate";

export interface StartExperimentProps {
    expProps: ExperimentProps;
    onFinish: () => void;
}

export const useExperiment = () => {
    const addMessage = useAddMessage();


    const startExperiment = useCallback<(props: StartExperimentProps) => void>(({expProps, onFinish}) => {
        const { N, M, K, trials, type } = expProps;

        addMessage(`Exp started N=${N} M=${M} K=${K} volume=${N * M * K}`);

        const multiplier = multipliers[type];

        const times = [];

        Array.from(Array(trials).keys()).forEach(i => {
            const matrixA = generateMatrix(N, M);
            const matrixB = generateMatrix(M, K);
            const time = measureExecutionTime(multiplier, matrixA, matrixB);
            times.push(time);
            addMessage(`Try: ${i}. Time = ${time} ms`);
        })

        onFinish();
    }, [addMessage]);

    return {startExperiment};
}