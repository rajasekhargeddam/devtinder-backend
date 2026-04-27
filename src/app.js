const express = require('express');

const app = express();

app.use("/",(req, res) => {
    res.send('Hello World!');
})

app.use("/hello", (req, res) => {
    res.send('Hello Rajasekhar!');
})

app.use("/test", (req, res) => {
    res.send('Im Testing my Route');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})