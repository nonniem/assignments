const express = require("express");
const northBounty = express.Router();

let data = []

northBounty.get("/", (req, res) => {
  res.send(data);
})

northBounty.post("/", (req, res) => {
  req.body._id = uuid();
  northBounty.push(req.body);
  res.send(req.body);
})

northBounty.delete("/:id/", (req, res) => {
  northBounty = northBounty.filter((northBounty) => {
      return northBounty._id !== req.params.id
  })
  res.send({message: "spaGhetti was deleted"})
})

northBounty.put("/:id", (req, res) => {
  let newBounty = req.body;
  northBounty = northBounty.map((northBounty) => {
    if(northBounty._id === req.params.id){
      return newBounty = Object.assign(northBounty, newBounty);
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
