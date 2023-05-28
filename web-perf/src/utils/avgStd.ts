const sum = (arr: number[]) => arr.reduce((sm, x) => sm + x, 0);

export const analyse = (a: number[]) => {
    const mean = sum(a) / a.length;
    const std = Math.sqrt(sum(a.map(x => Math.pow(x - mean, 2))) / a.length);

    return {mean, std};
}