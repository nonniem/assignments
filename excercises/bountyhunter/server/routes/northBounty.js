const express = require("express");
const northBounty = express.Router();
const uuid = require("uuid/v4");

let data = [];

northBounty.get("/", (req, res) => {
  res.send(data);
})

northBounty.post("/", (req, res) => {
  req.body._id = uuid();
  data.push(req.body);
  res.send(req.body);
})

northBounty.delete("/:id/", (req, res) => {
  name = data.filter((item) => {
      return item._id !== req.params.id
  })
  res.send({message: "no more bounty"})
})

northBounty.put("/:id", (req, res) => {
  let updateBounty = req.body;
  updateBounty = data.map((item) => {
    if(item._id === req.params.id){
      return updateBounty = Object.assign(northBounty, newBounty);
    } else {
        return northBounty
    }
  })
  res.send(newBounty)
})

northBounty.get("/:id", (req, res) => {
  let bount = northBounty.find((bount) => {
      return bount._id === req.params.id
  })
})


module.exports = northBounty;
