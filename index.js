const express= require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Prime calculator API is alive on http://localhost:${PORT}`)
)

app.get('/sumandcheck', (req, res) => {
    res.status(200).send({
        result: 6,
        isPrime: false,
    })
});

app.get('/checkprime', (req, res) => {
    res.status(200).send({
        isPrime: false,
    })
});