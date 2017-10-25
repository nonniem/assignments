const express = require("express");
const Bounty = express.Router();
const uuid = require("uuid/v4");

let data = [];

Bounty.get("/", (req, res) => {
  res.send(data);
})

Bounty.post("/", (req, res) => {
  req.body._id = uuid();
  data.push(req.body);
  res.send(req.body);
})

Bounty.delete("/:id/", (req, res) => {
  name = data.filter((item) => {
      return item._id !== req.params.id
  })
  res.send({message: "no more bounty"})
})

Bounty.put("/:id", (req, res) => {
  let updateBounty = req.body;
  updateBounty = data.map((item) => {
    if(item._id === req.params.id){
      return updateBounty = Object.assign(Bounty, newBounty);
    } else {
        return Bounty
    }
  })
  res.send(newBounty)
})

Bounty.get("/:id", (req, res) => {
  let bount = Bounty.find((bount) => {
      return bount._id === req.params.id
  })
})


module.exports = Bounty;
