package runningSum1D

import (
	inputAndExpectedValue "go-coding-challenges/src"
	"testing"

	"github.com/forestgiant/sliceutil"
)

var inputsAndExpectedValues = []inputAndExpectedValue.InputAndExpectedValue[[]int, []int]{
	{I: []int{}, E: []int{}},
	{I: []int{1, 2, 3, 4}, E: []int{1, 3, 6, 10}},
	{I: []int{1, 1, 1, 1, 1}, E: []int{1, 2, 3, 4, 5}},
	{I: []int{3, 1, 2, 10, 1}, E: []int{3, 4, 6, 16, 17}},
}

func TestRunningSum(t *testing.T) {
	for _, v := range inputsAndExpectedValues {
		input := v.I
		expected := v.E
		result := runningSum(input)
		if !sliceutil.Compare(result, expected) {
			t.Errorf("Expected: %v, Received: %v", expected, result)
		}
	}
}

func BenchmarkFib1Input8(b *testing.B) {
	inputIndex := len(inputsAndExpectedValues) - 1
	for i := 0; i < b.N; i++ {
		runningSum(inputsAndExpectedValues[inputIndex].I)
	}
}
