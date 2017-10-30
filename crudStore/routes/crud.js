const express = require("express");
const crudRoutes = express.Router();
const Crud = require("../models/crud.js");

crudRoutes.get("/", (req, res) => {
    Crud.find((err, whoop)=>{
        if(err) return res.status(500).send(err);
        return res.send(whoop);
    });
});

crudRoutes.post("/", (req, res) => {
    const newCrud = new Crud(req.body);
    newCrud.save((err, newcrudthatwassaved) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newcrudthatwassaved);
    });
});

crudRoutes.get("/:id", (req, res) => {
    Crud.findById(req.params.id, (err, crud) => {
        res.send(crud);
    });
});

crudRoutes.delete("/:id", (req, res) => {
    Crud.findByIdAndRemove(req.params.id, (err, human) => {
        if(err) return res.status(500).send(err);
        res.send(human);
    });
});

crudRoutes.put("/:id", (req, res) => {
    Crud.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, crud) => {
    if (err) return res.status(500).send(err);
    res.send(crud);
});
});

module.exports = crudRoutes;
