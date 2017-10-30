const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crudSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    gender: String,
    age: Number,
    weight: Number,
    continent: {
        type: String,
        enum: ["Asia", "North America", "Europe", "South America", "Antarctica", "Africa", "Australia"]
    }
})

module.exports = mongoose.model("Crud", crudSchema)
