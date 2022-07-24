export function intersection2(nums1: number[], nums2: number[]): number[] {
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
