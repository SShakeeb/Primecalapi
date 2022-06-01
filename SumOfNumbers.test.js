const SumOfNumbers = require("./sumOfNumbers")

test('Should return sum of numbers', () => {
    expect(
        SumOfNumbers([1,2])
        ).toBe(3)
})
