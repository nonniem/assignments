const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use("/southBounty", require("./routes/northBounty"));
app.use("/northBounty", require("./routes/northBounty"));


app.listen(5500, ()=> {
    console.log("server is on port 8500");
});
