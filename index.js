const express = require('express');
const app = express();
const cors = require('cors'); //Cross-Origin Resource Sharing
const PORT = 9090;
const CheckPrimeNumber= require('./CheckPrimeNumber');
const SumOfNumbers = require("./SumOfNumbers");
app.use(express.json())
app.use(cors())

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
    else errorHandler(err)
});

app.get('/checkprime', (req, res) => {
    const reqParameter = req.query.number;
    if(/^\d+$/.test(reqParameter)==true){
        res.status(200).send({
            isPrime: CheckPrimeNumber(reqParameter),
        })
    }
    else errorHandler(err)
});

// Middleware
app.use(errorHandler);

function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(400)
    res.render('error', { error: err })
  }
