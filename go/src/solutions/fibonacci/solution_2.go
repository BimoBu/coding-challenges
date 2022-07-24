package fibonacci

func fib2(n int) int {
	if n < 2 {
		return n
	}

	twoAgo := 0
	oneAgo := 1

	for i := 2; i <= n; i++ {
		tmpOneAgo := oneAgo
		oneAgo = oneAgo + twoAgo
		twoAgo = tmpOneAgo
	}

	return oneAgo
}
