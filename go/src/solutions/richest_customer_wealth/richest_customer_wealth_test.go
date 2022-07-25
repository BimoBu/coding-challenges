package richestCustomerWealth

import (
	inputAndExpectedValue "go-coding-challenges/src"
	"testing"
)

var inputsAndExpectedValues = []inputAndExpectedValue.InputAndExpectedValue[[][]int, int]{
	{I: [][]int{}, E: 0},
	{I: [][]int{
		{1, 2, 3},
		{3, 2, 1},
	}, E: 6},
	{I: [][]int{
		{1, 5},
		{7, 3},
		{3, 5},
	}, E: 10},
	{I: [][]int{
		{2, 8, 7},
		{7, 1, 3},
		{1, 9, 5},
	}, E: 17},
}

func TestRichestCustomer(t *testing.T) {
	for _, v := range inputsAndExpectedValues {
		input := v.I
		expected := v.E
		result := maximumWealth(input)
		if result != expected {
			t.Errorf("Expected: %v, Received: %v", expected, result)
		}
	}
}

func BenchmarkRichestCustomer(b *testing.B) {
	inputIndex := len(inputsAndExpectedValues) - 1
	for i := 0; i < b.N; i++ {
		maximumWealth(inputsAndExpectedValues[inputIndex].I)
	}
}
