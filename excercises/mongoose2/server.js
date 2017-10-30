const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 9009;
const bodyParser = require("body-parser");

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/humans", (err) => {
    if (err) throw err;
    console.log("connected to your human database");
})

app.use("/humans", require("./routes/human.js"))

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
