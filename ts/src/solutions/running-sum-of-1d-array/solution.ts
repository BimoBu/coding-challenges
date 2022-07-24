export function runningSum(nums: number[]): number[] {
    const runningSum: number[] = [];

    let sum = 0;

    for (const num of nums) {
        sum += num;
        runningSum.push(sum)
    }

    return runningSum;
};