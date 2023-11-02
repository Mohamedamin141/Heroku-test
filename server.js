const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => res.send('first Heroku'));

app.listen(PORT,() =>
console.log(`Example app listening at http://localhost:${PORT}`)
);