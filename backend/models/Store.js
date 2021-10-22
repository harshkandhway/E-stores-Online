const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({

})
const StoreSchema = new mongoose.Schema({
     
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength:[20, 'name must be less than 20 character']
    },
    category:{
        type: String,
        required: [true, 'must provide category'],
        trim: true,
        maxlength:[20, 'name must be less than 20 character']
    },
    address:{
        type: String,
        required: [true, 'must provide address'],
        trim: true,
    },
    products:{
        type: {
            productBrand: String, 
            productName: String,
            quantity: Number,
            price: String, 
            size: String, 
            imageUrl: String,
            productDetails:{
                type:[String]
            },
            _id: {
                type: mongoose.Schema.Types.ObjectId
            }
        },
    },
    imageUrl: String,
    registered: {
        type: Boolean,
        default: false
    },
})
   


module.exports = mongoose.model('Store', StoreSchema)