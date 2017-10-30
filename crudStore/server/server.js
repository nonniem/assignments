const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 9001;
const bodyParser = require("body-parser");
const morgan = require("morgan")

app.use(bodyParser.json());
app.use(morgan("dev"));
mongoose.connect("mongodb://localhost/crud", (err) => {
    if(err) throw err;
    console.log("Connected to Nonnie's server");
})

app.use("/crud", require("../routes/crud.js"))

app.listen(port, ()=>{
    console.log(`Nonnie's server is currently running in port ${port}!!!`)
});
