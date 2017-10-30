const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const politicsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    confused: {
        type: Number,
        default: 0
    },
    liked:{
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Politics", politicsSchema)
