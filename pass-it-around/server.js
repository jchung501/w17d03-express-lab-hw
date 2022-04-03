const express = require('express');

const app = express();
const port = 3000;

// Port Listener
app.listen(port, () => {
    console.log(`Listening on Port ${port}.`)
})

// Index Page
app.get('/', (req, res) => {
    res.send(`<h1>99 bottles of Guinness on the wall.</h1>
    <a href=/98>Take one down, pass it around</a>`);
});

app.get('/:bottles', (req, res) => {
    let param = req.params.bottles
    if (param <= 0) {
        res.send(`<h1>No more bottles!</h1>
        <a href=/>Start over!`)
    } else {
        res.send(`<h1>${param} bottles of Guinness on the wall.</h1>
        <a href=/${param - 1}>Take one down, pass it around</a>`)
    }
});