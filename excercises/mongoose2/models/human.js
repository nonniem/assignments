const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const humanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ethnicity: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Unicorn"]
    },
    height: String,
    hair: {
        color: String,
        type: {type: String}},
        length: {
            type: String,
            enum: ["short", "shaggy", "medium", "long"]
        }
    })

module.exports = mongoose.model("Human", humanSchema)
