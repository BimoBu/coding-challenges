package richestCustomerWealth

func maximumWealth(accounts [][]int) int {
	maximumWealth := 0

	for _, v := range accounts {
		wealth := wealthOfCustomer(v)

		if wealth > maximumWealth {
			maximumWealth = wealth
		}
	}

	return maximumWealth
}

func wealthOfCustomer(accounts []int) int {
	sum := 0

	for _, v := range accounts {
		sum += v
	}

	return sum
}
