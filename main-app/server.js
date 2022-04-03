const express = require('express');

const app = express();
const port = 3000;

// PORT LISTENER
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

// FIBONACCI
const perfectSq = (x) => {
    let i = parseInt(Math.sqrt(x));
    return (i * i == x);
};

const fibonacci = (num) => {
    return (perfectSq(5*num*num+4) || perfectSq(5*num*num-4));
};

app.get('/fibonacci/:num', (req, res) => {
    if (fibonacci(req.params.num) == true) {
        res.send(`<h1>Very good. It is Fibonacci.</h1>`);
    } else {
        res.send('<h1>I can tell this is not a Fibonacci number.<h/1>');
    }
});