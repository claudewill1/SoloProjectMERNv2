const mongoose = require("mongoose");


const CoinSchema = new mongoose.Schema({
    
    coinType:{
        type: String,
        required: [true,'The type of coin is required'],
        minlength: [3,'The coin type must 3 characters or longer']
    },
    year: {
        type: Number,
        required: [true,'The year of the coin is required'],
        minlength: [4,'Year must be 4 numbers in length'],
        maxlength: [4,'Year must be 4 numbers in length']
    },
    mint: {
        type: String,
        required: [true,'The mint location is required']
    },
    denomination: {
        type: String,
        required: [true,'denomination is required']
    },
    value: {
        type: Number
    },
    description: {
        type: String
    },
    graded: {
        type: Boolean
    },
    gradingService: {
        type: String,
        
    },
    certificationNumber: {
        type: Number
    },
    

},{timestamps:true})

const Coin = mongoose.model("Coin",CoinSchema);
module.exports = Coin;