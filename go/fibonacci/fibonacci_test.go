package fibonacci

import (
	main "go-coding-challenges"
	"testing"
)

var inputsAndExpectedValues = []main.InputAndExpectedValue[int, int]{
	{I: 0, E: 0},
	{I: 1, E: 1},
	{I: 2, E: 1},
	{I: 3, E: 2},
	{I: 4, E: 3},
	{I: 5, E: 5},
	{I: 6, E: 8},
	{I: 7, E: 13},
	{I: 8, E: 21},
	{I: 9, E: 34},
	{I: 10, E: 55},
	{I: 11, E: 89},
	{I: 12, E: 144},
}

func TestFib1(t *testing.T) {
	for _, v := range inputsAndExpectedValues {
		input := v.I
		expected := v.E
		result := fib1(input)
		if result != expected {
			t.Errorf("Expected: %v, Received: %v", expected, result)
		}
	}
}

func TestFib2(t *testing.T) {
	for _, v := range inputsAndExpectedValues {
		input := v.I
		expected := v.E
		result := fib2(input)
		if result != expected {
			t.Errorf("Expected: %v, Received: %v", expected, result)
		}
	}
}

func benchmarkFib1(n int, b *testing.B) {
	for i := 0; i < b.N; i++ {
		fib1(n)
	}
}

func benchmarkFib2(n int, b *testing.B) {
	for i := 0; i < b.N; i++ {
		fib2(n)
	}
}

func BenchmarkFib1Input8(b *testing.B) {
	benchmarkFib1(13, b)
}

func BenchmarkFib1Input13(b *testing.B) {
	benchmarkFib1(13, b)
}

// This is way too slow
// func BenchmarkFib1Input50(b *testing.B) {
// 	benchmarkFib1(50, b)
// }

func BenchmarkFib2Input8(b *testing.B) {
	benchmarkFib2(13, b)
}

func BenchmarkFib2Input13(b *testing.B) {
	benchmarkFib2(13, b)
}

func BenchmarkFib2Input50(b *testing.B) {
	benchmarkFib2(50, b)
}
