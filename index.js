const express = require('express');
const app = express();
const PORT = 9090;
const CheckPrimeNumber= require('./CheckPrimeNumber');
const SumOfNumbers = require("./SumOfNumbers");
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Prime calculator API is alive on http://localhost:${PORT}`)
)

app.get('/sumandcheck', (req, res) => { 
    const result = SumOfNumbers(req.query.numbers);
    res.status(200).send({
        result: result,
        isPrime: CheckPrimeNumber(result),
    })
});

app.get('/checkprime', (req, res) => {
    res.status(200).send({
        isPrime: CheckPrimeNumber(req.query.number),
    })
});
