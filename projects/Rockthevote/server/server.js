const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 9111;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/politics', (err) => {
    if(err) throw err;
    console.log('politics have been loaded... unfortunetly')
})

app.use("/politicalPost", require("./routes/politicalPost"));

app.listen(port , () => {
    console.log(`server is on running on port ${port}`);
});
