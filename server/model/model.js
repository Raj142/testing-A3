const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    book_name : {
        type : String,
        required: true
    },
    price : {
        type: String,
        required: true
        
    },
    catagory : {
        type: String,
        required: true
    },
    stock : {
        type: String,
        required: true
    } 
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;