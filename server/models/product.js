const mongoose = require('mongoose');
//const flash = require('express-flash');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4
    },
    price: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    }
}, {timestamps: true});
    


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;