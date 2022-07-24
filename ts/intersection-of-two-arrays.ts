// TODO create readme file for ts code

function intersection1(array1: number[], array2: number[]) {
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



function intersection2(nums1: number[], nums2: number[]): number[] {
    let index1 = 0;
    let index2 = 0;

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const intersectionSet = new Set<number>();

    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            index1++;
        } else if (nums1[index1] > nums2[index2]) {
            index2++;
        } else {
            intersectionSet.add(nums1[index1]);
            index1++;
            index2++;
        }
    }

    return Array.from(intersectionSet);
};

function printIntersection1(arr1: number[], arr2: number[]) {
    console.log(`intersection1([${arr1}], [${arr2}]) = [${intersection1(arr1, arr2)}]`);
}

function printIntersection2(arr1: number[], arr2: number[]) {
    console.log(`intersection2([${arr1}], [${arr2}]) = [${intersection2(arr1, arr2)}]`);
}

console.log();
console.log('First attempt');
printIntersection1([6, 4, 7, 4, 8], [4, 7]);
printIntersection1([1, 2, 4, 6, 7, 8, 9], [7, 3, 5, 9]);
console.log();

console.log('Second attempt');
printIntersection2([6, 4, 7, 4, 8], [4, 7]);
printIntersection2([1, 2, 4, 6, 7, 8, 9], [7, 3, 5, 9]);
console.log();