const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 1111;
const morgan = require("morgan");
const utils = require("./utils");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(utils.explode);

app.get("/", (req, res) => {
    console.log(req.explode);
    res.send("Success!");
});

app.listen(port, () =>  {
    console.log('spaGhetti')
});
