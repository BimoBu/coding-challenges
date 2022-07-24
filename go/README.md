# Some coding challenges solved using go

## Run tests on all challenges
- including benchmarks: `go test -benchmem -bench . ./...`
- without benchmarks: `go test ./...`

---

## Run tests on single challenges or functions
- with benchmarks: `go test -run Fib -benchmem -bench Fib ./...`
- without benchmarks: `go test -run Fib ./...`

Here, the argument for -run and -bench is a regex that needs to match all the tests that you want to run.

That means that you can also pass in `Fib1` if you only want to execute the tests/benchmarks that have "Fib1" in their function name.

**Alternatively, you can use the following syntax to test a whole solution:**

- with benchmarks: `go test -benchmem -bench Fib ./fibonacci`
- without benchmarks: `go test ./fibonacci`

Here the regex for running all tests containing "Fib" (-run Fib) is replaced by just running the tests in the fibonacci directory

--- 

## Coverage

To just get a basic coverage report (coverage: xx.x% of statements), use the `-cover` flag.

If you want to have a visual html coverage report:
- set the flag `-coverprofile=coverage.out` (coverage.out is the filename that the detailed coverage report is written to)
- use `go tool cover -html=coverage.out` to generate and open an html file from the detailed coverage report