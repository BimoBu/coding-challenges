package runningSum1D

func runningSum(nums []int) []int {
	numsLen := len(nums)
	runningSum := make([]int, numsLen)
	sum := 0

	for i := 0; i < numsLen; i++ {
		sum += nums[i]
		runningSum[i] = sum
	}

	return runningSum
}
