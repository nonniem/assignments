const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goldShema = new Schema({
    user: String,
    amount: Number,
    price: Number,
    items: [String],
    delivered: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Gold", shirtSchema);
