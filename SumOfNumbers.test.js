const SumOfNumbers = require("./SumOfNumbers")

test('Should return sum of numbers', () => {
    expect(
        SumOfNumbers([1,2])
        ).toBe(3)
})
