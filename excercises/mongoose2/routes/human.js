const express = require("express");
const humanRoutes = express.Router();
const Human = require("../models/human");

humanRoutes.get("/", (req, res) => {
        Human.find((err, whoop)=>{
            if (err) return res.status(500).send(err);
            return res.send(whoop);
        });
});

humanRoutes.post("/", (req, res) => {
    const newHuman = new Human(req.body);
    newHuman.save((err, newhumanthatwassaved) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newhumanthatwassaved);
    });
});

humanRoutes.get("/:id", (req, res) => {
    Human.findById(req.params.id, (err, human) => {
        res.send(human);
    });
});

humanRoutes.delete("/:id", (req, res) => {
    Human.findByIdAndRemove(req.params.id, (err, human) => {
        if (err) return res.status(500).send(err);
        res.send(human);
    });
});

humanRoutes.put("/:id", (req, res) => {
    Human.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, human) => {
        if (err) return res.status(500).send(err);
        return res.send(human);

    });
});

module.exports = humanRoutes;
