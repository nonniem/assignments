const express = require("express");
const southBounty = express.Router();

southBounty.get("/southBounty", (req, res) => {
  res.send(southBounty);
})

southBounty.post("/southBounty", (req, res) => {
  req.body._id = uuid();
  southBounty.push(req.body);
  res.send(req.body);
})

southBounty.delete("/southBounty/:id/", (req, res) => {
  southBounty = southBounty.filter((southBounty) => {
      return southBounty._id !== req.params.id
  })
  res.send({message: "spaGhetti was deleted"})
})

southBounty.put("/southBounty/:id", (req, res) => {
  let newBounty = req.body;
  southBounty = southBounty.map((southBounty) => {
    if(southBounty._id === req.params.id){
      return newBounty = Object.assign(southBounty, newBounty);
    } else {
        return southBounty
    }
  })
  res.send(newBounty)
})

southBounty.get("/southBounty/:id", (req, res) => {
  let bount = southBounty.find((bount) => {
      return bount._id === req.params.id
  })
})



module.exports = southBounty;
