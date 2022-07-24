# Some coding challenges solved using TypeScript

First, run `npm i`

## Run tests on all challenges

`npm test`

---

## Run tests on single challenges or functions

e.g.: `npm test -- -t "Intersection of two arrays"`

If you want to run a more specific set of tests, you can:
- prefix the `describe` or `it` functions you want to execute with f (for example `fdescribe`, `fit`) or change `it` to `it.only`
    - this still executes tests in other files
- change the argument for `-t` to the name of the `describe` or `it` function you want to execute

--- 

## Coverage

`npm test` automatically creates an html coverage report. So you can go to `ts/coverage/lcov-report/index.html` and open it in a browser.