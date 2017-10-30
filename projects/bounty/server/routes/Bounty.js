const express = require("express");
const bounty = express.Router();
const uuid = require("uuid/v4");

let array = [{title: "spaghetti"}];

bounty.get("/", (req, res) => {
  res.send(array);
})

bounty.post("/", (req, res) => {
  req.body._id = uuid();
  array.push(req.body);
  res.send(req.body);
})

bounty.delete("/:id/", (req, res) => {
  name = array.filter((doc) => {
      return doc._id !== req.params.id
  })
  res.send({message: "no more bounty"})
})

bounty.put("/:id", (req, res) => {
  let newObj = req.body;
  array = array.map((doc) => {
    if(doc._id === req.params.id){
      return newObj = Object.assign(doc, newObj);
    } else {
        return doc
    }
  })
  res.send(newObj)
})

bounty.get("/:id", (req, res) => {
  let bount = Bounty.find((bount) => {
      return bount._id === req.params.id
  })
})


module.exports = bounty;
