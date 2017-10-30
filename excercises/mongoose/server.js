const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8008;

mongoose.connect("mongodb://localhost/osrs-gold", (err) => {
    if (err) throw err;
    console.log("Connected to your osrs database");
});



app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
