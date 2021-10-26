const Store = require("../models/Store")
const mongoose = require('mongoose');
// const Product =  mongoose.model('Product')

const getAllOrders = async (req, res) => {
    try {
        const { id: storeID } = req.params
        const store = await Store.findOne({ _id: storeID })
        if (!store) {
            return res.status(404).json({ msg: `No store with id: ${storeID}` })
        }
        res.status(200).json(store.products)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getSingleOrder = async (req, res) => {
    res.send('getSingleOrder')
}


const getCurrentUserOrders = async (req, res) => {
    res.send('get current order')
}


const createOrder = async (req, res) => {
    try {
        const { items: cartItems, tax, shippingFee } = req.body;
        if (!cartItems || cartItems.length < 1) {
            return res.status(404).json({ msg: `No cart items` })
        }
        if (!tax || !shippingFee) {
            return res.status(404).json({ msg: `Please provide tax and shipping` })
        }
        const { id: storeID } = req.params
        const {productId} = req.params
        const store = await Store.findOne({ _id: storeID })
        if (!store) {
            return res.status(404).json({ msg: `No store with id: ${storeID}` })
        }
        let orderItems = [];
        let subtotal = 0;
        for(const item of cartItems){
            store.products = store.products.filter(p=>p._id.toString()===productId.toString())
            if(store.products.lenght<1){
                return res.status(404).json({ msg: `No product with id: ${productId}` })
            }
            const {productName,price,imageUrl,_id} = store.products[0]
            // console.log({productName,price,imageUrl,_id})
            const singleOrderItem = {
                amount: item.amount,
                productName,
                price,
                imageUrl,
                product: _id
            };
            orderItems = [...orderItems,singleOrderItem]
            // subtotal += item.amount * parseInt(price) 
        }
        console.log(orderItems);
        res.send('create order')

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}


const updateOrder = async (req, res) => {
    res.send('updateOrder order')
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}