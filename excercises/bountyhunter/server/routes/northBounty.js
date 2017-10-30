const express = require("express");
const northBounty = express.Router();
const uuid = require("uuid/v4");

let array = [];

northBounty.get("/", (req, res) => {
  res.send(array);
})

northBounty.post("/", (req, res) => {
  req.body._id = uuid();
  array.push(req.body);
  res.send(req.body);
})

northBounty.delete("/:id/", (req, res) => {
  name = array.filter((doc) => {
      return doc._id !== req.params.id
  })
  res.send({message: "no more bounty"})
})

northBounty.put("/:id", (req, res) => {
  let newObj = req.body;
  array = array.map((doc) => {
    if(doc._id === req.params.id){
      return newObj = Object.assign(doc, newObj);
    } else {
        return doc
    }
  })
  res.send(newObj);
})

northBounty.get("/:id", (req, res) => {
  let bount = northBounty.find((bount) => {
      return bount._id === req.params.id
  })
})


module.exports = northBounty;
