const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

app.use(bodyParser.json());
app.use("/southBounty", require("./routes/northBounty"));
app.use("/northBounty", require("./routes/northBounty"));


app.listen(8500, ()=> {
    console.log("server is on port 8500");
});
