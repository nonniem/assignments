const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/bounty", require("./routes/Bounty"));

app.listen(7500, () => {
    console.log("port 7500");
});
