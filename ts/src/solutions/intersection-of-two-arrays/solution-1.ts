export function intersection1(array1: number[], array2: number[]) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    if (set1.size < set2.size) {
        return getSetIntersection(set1, set2);
    }
    return getSetIntersection(set2, set1);
}

function getSetIntersection(smallerSet: Set<number>, largerSet: Set<number>) {
    const result: number[] = [];

    for (const smallerSetTimeslot of Array.from(smallerSet.values())) {
        if (largerSet.has(smallerSetTimeslot)) {
            result.push(smallerSetTimeslot);
        }
    }

    return result;
}
