import { multiplyMatrices } from "./vanilla"

export enum MultiplyType {
    PlainJS = "plain-js",
    TFCpu = "tf-cpu",
    TFWebGL = "tf-webgl",
    TFWebGPU = "tf-webgpu",
    TFWasm = "tf-wasm"
}

export const multiplyOptions = [
    MultiplyType.PlainJS,
    MultiplyType.TFCpu,
    MultiplyType.TFWebGL,
    MultiplyType.TFWebGPU,
    MultiplyType.TFWasm,
]

export const multipliers: Record<MultiplyType, (a: number[][], b: number[][]) => number[][]> = {
    [MultiplyType.PlainJS]: multiplyMatrices,
    [MultiplyType.TFCpu]: multiplyMatrices,
    [MultiplyType.TFWasm]: multiplyMatrices,
    [MultiplyType.TFWebGL]: multiplyMatrices,
    [MultiplyType.TFWebGPU]: multiplyMatrices,
} 