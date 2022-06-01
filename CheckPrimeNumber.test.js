const CheckPrimeNumber = require('./CheckPrimeNumber')

test('Should return number is a prime number', () => {
    expect(
        CheckPrimeNumber(7)
        ).toBe(true)
})

test('Should return number is not a prime number', () => {
    expect(
        CheckPrimeNumber(9)
        ).toBe(false)
})