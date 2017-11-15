// models/todo.js

let mongoose = require("mongoose");  
let Schema = mongoose.Schema;

let legoSchema = new Schema({  
    name: {
        type: String,
        required: true
    },
    peices: {
        type: Number,
        required: true
    },
    user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
    }
});

module.exports = mongoose.model("Lego", legoSchema);  