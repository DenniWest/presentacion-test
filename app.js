const express = require("express");
const cors = require("cors");
const path = require("path");

const router = require('./src/routes/');

const { json, urlencoded } = express;

const app = express();

const port = process.env.PORT;

app.use(json());

app.use(urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(router);

app.use('/', (req, res) => {
    res.send("Services ready");
})

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})