const express= require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Prime calculator API is alive on http://localhost:${PORT}`)
)

app.get('/sumandcheck', (req, res) => { 
    const result = _stringToNumbers(req.query.numbers).reduce((a,b) => a+b);
    res.status(200).send({
        result: result,
        isPrime: _isPrimeNumber(result),
    })
});

app.get('/checkprime', (req, res) => {
    res.status(200).send({
        isPrime: _isPrimeNumber(req.query.number),
    })
});

function _stringToNumbers(numbers){
    const returnN = [];
    for (let i = 0; i<numbers.length; i++){
        const num = Number(numbers[i]);
        Number.isInteger(num) ? returnN.push(num) : ''
    }
    return returnN;
}

function _isPrimeNumber(number){
    if(number <= 1){
        return false;
    }
    if(number%2 == 0 && number > 2){
        return false;
    }
    const sq= Math.sqrt(number);
    for(let i = 3; i<=sq; i += 2){
        if(number%i === 0)
            return false;
    }
    return true;
}
