import { MultiplyType } from "../multiply/types";

export interface ExperimentProps {
  N: number;
  M: number;
  K: number;
  type: MultiplyType;
  trials: number;
}

export const initialExpValue: ExperimentProps = {
  N: 10,
  M: 10,
  K: 10,
  type: MultiplyType.PlainJS,
  trials: 5,
};
