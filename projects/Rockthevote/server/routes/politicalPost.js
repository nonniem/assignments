const express = require('express');
const politicsRoute = express.Router();
const Politics = require('../models/politics');

politicsRoute.get("/", (req, res) => {
    Politics.find(req.query, (err, info) => {
        if(err) return res.status(500).send(err);
        return res.send(info);
    });
});

politicsRoute.post("/", (req, res) => {
    const newPost = new Politics(req.body);
    newPost.save((err, newposting) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newposting);
    });
});

politicsRoute.get("/:id", (req, res) => {
    Politics.findById(req.params.id, (err, info) => {
        res.send(info);
    });
});

politicsRoute.delete("/:id", (req, res) => {
    Politics.findByIdAndRemove(req.params.id, (err, info) => {
        if (err) return res.status(500).send(err);
        res.send(info);
    });
});

module.exports = politicsRoute;
