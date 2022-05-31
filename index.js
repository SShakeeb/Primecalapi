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
        isPrime: false,
    })
});

app.get('/checkprime', (req, res) => {
    _stringToNumbers(req.query.number)
    res.status(200).send({
        isPrime: false,
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
