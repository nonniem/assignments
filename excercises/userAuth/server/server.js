const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const legoRouter = require("./routes/legos.js");
const authRoute = require("./routes/authRoute");

mongoose.connect("mongodb://localhost/legos");

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use("/legos", legoRouter);
app.use("/auth", authRoute)


app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`);
});
