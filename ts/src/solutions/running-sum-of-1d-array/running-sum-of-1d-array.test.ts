import { InputAndExpectedValue } from '../../input-and-expected-value';
import { runningSum } from './solution';

describe('Running sum of 1d array', () => {
    const inputsAndExpectedValues: InputAndExpectedValue<number[], number[]>[] = [
        {
            i: [],
            e: []
        },
        {
            i: [1, 2, 3, 4],
            e: [1, 3, 6, 10]
        },
        {
            i: [1, 1, 1, 1, 1],
            e: [1, 2, 3, 4, 5]
        },
        {
            i: [3, 1, 2, 10, 1],
            e: [3, 4, 6, 16, 17]
        },
    ];

    it(`should return the running sum`, () => {
        for (const iAndE of inputsAndExpectedValues) {
            expect(runningSum(iAndE.i)).toEqual(iAndE.e);
        }
    });
});