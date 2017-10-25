const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("Bounty", require("./routes/Bounty"));

app.listen(1500, () => {
    console.log("port 1500");
});
