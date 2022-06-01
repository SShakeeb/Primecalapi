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
    const reqParameters = req.query.numbers;
    if(/^\d+(,\d+)*$/.test(reqParameters)==true){
        const result = SumOfNumbers(reqParameters);
        res.status(200).send({
            result: result,
            isPrime: CheckPrimeNumber(result),
        })
    }
    else throw new Error("Numbers are empty or invalid in query parameters.")
});

app.get('/checkprime', (req, res) => {
    const reqParameter = req.query.number;
    if(/^\d+$/.test(reqParameter)==true){
        res.status(200).send({
            isPrime: CheckPrimeNumber(reqParameter),
        })
    }
    else throw new Error("Number is empty or invalid in query parameter.")
});
