import { InputAndExpectedValue } from '../../input-and-expected-value';
import { intersection1 } from './solution-1';
import { intersection2 } from './solution-2';

describe('Intersection of two arrays', () => {
    const inputsAndExpectedValues: InputAndExpectedValue<[number[], number[]], number[]>[] = [
        {
            i: [[], []],
            e: []
        },
        {
            i: [[6, 4, 7, 4, 8], [4, 7]],
            e: [4, 7]
        },
        {
            i: [[1, 2, 4, 6, 7, 8, 9], [7, 3, 5, 9]],
            e: [7, 9]
        },
    ];

    describe('Solution 1', () => {
        it(`should return the intersection of the two arrays`, () => {
            for (const inputAndExpectedValue of inputsAndExpectedValues) {
                expect(intersection1(inputAndExpectedValue.i[0], inputAndExpectedValue.i[1])).toEqual(inputAndExpectedValue.e);
            }
        });
    });

    describe('Solution 2', () => {
        it(`should return the intersection of the two arrays`, () => {
            for (const inputAndExpectedValue of inputsAndExpectedValues) {
                expect(intersection2(inputAndExpectedValue.i[0], inputAndExpectedValue.i[1])).toEqual(inputAndExpectedValue.e);
            }
        });
    });
});