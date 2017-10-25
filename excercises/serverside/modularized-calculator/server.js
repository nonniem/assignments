const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const uuid = require("uuid/v4")

app.use(bodyParser.json());

const tacos = [
  {title: "chicken taco", price: 2.95, id: "a183ca96-6778-4e5d-abe1-67c087cd751e"},
  {title: "fish taco", price: 2.95, id: "a183ca96-6778-4e5d-abe1-67c087cd751c"}, 
  {title: "double stuffed birthday suprise", price: 2.95, id: "a183ca96-6778-4e5d-abe1-67c087cd751b"}
]

app.get("/tacos", (req, res) => {
    res.send(tacos);
});

app.post("/tacos", (req, res) => {
    req.body._id = uuid();
    tacos.push(req.body);
    res.send(req.body);
})

app.listen(8000, ()=> {
    console.log("server is Running on port 8000");
});
