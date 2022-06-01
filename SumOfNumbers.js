function SumOfNumbers(numbers){
    return _stringToNumbers(numbers).reduce((a,b) => a+b);
}

function _stringToNumbers(numbers){
    const returnN = [];
    for (let i = 0; i<numbers.length; i++){
        const num = Number(numbers[i]);
        Number.isInteger(num) ? returnN.push(num) : ''
    }
    return returnN;
}

module.exports = SumOfNumbers;
