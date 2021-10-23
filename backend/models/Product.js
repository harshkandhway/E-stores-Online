const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productBrand: String, 
    productName: String,
    quantity: Number,
    price: String, 
    size: String, 
    imageUrl: String,
    productDetails:{
        type:[String]
    },
})

module.exports = ProductSchema