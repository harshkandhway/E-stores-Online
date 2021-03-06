const Store = require("../models/Store")
const mongoose = require('mongoose');
const Order = require('../models/order')
const User = require('../models/user.js');
const { findOneAndUpdate } = require("../models/Store");


const getAllOrders = async (req, res) => {
    try {
        // const { id: storeID } = req.params
        const order = await Order.find({})
        if (!order) {
            return res.status(404).json({ msg: `No Order` })
        }
        res.status(200).json({order})
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getSingleOrder = async (req, res) => {
    try{
        const {orderId} = req.params;
    const singleOrder = await Order.findOne({_id:orderId})
    if(!singleOrder){
        return res.status(404).json({msg: `No order with id: ${orderId}`});
    }
    res.status(200).json({singleOrder})
    }
    catch(error){
        res.status(500).json({msg:error.message});
    }
    
}


const getCurrentUserOrders = async (req, res) => {
    try{
        const userId = req.user.userId;
    console.log(req.user.userId);
    const currentOrder = await Order.find({userId:userId})
    if(!currentOrder){
        return res.status(404).json({msg: `No order with user id: ${userId}`})
    }
    res.status(200).json({currentOrder})
    }
    catch(error){
        res.status(500).json({msg:error.message});
    }
    
}


// const createOrder = async (req, res) => {
//     try {
//         const { cartItems, tax, shippingFee } = req.body;
//         if (!cartItems || cartItems.length < 1) {
//             return res.status(404).json({ msg: `No cart items` })
//         }
//         if (!tax || !shippingFee) {
//             return res.status(404).json({ msg: `Please provide tax and shipping` })
//         }
//         const { id: storeID } = req.params
//         const {productId} = req.params
//         const store = await Store.findOne({ _id: storeID })
//         if (!store) {
//             return res.status(404).json({ msg: `No store with id: ${storeID}` })
//         }
//         // let cartItems = [];
//         let subtotal = 0;
//         // for(const item of cartItems){
//             store.products = store.products.filter(p=>p._id.toString()===productId.toString())
//             if(store.products.lenght<1){
//                 return res.status(404).json({ msg: `No product with id: ${productId}` })
//             }
//             const {productName,price,imageUrl,_id} = store.products[0]
//             // console.log({productName,price,imageUrl,_id})
//             const singleOrderItem = {
//                 // amount: item.amount,
//                 productName,
//                 price,
//                 imageUrl,
//                 product: _id
//             };
//             // orderItems = [...orderItems,singleOrderItem]
//             cartItems.push(singleOrderItem)
//             const order = await Order.create({
//                 cartItems
//             })
//             console.log(order);
//             res.status(201).json({order})
//             // subtotal += item.amount * parseInt(price) 
//         // }
//         // console.log(orderItems);


//     } catch (error) {
//         res.status(500).json({ msg: error.message })
//     }

// }



// const createOrder = async (req, res) => {
//     try {
//         // const {email,name,password} = req.body;
//         const { id: storeID } = req.params
//         const { productId: pId } = req.params
//         const { userId } = req.body
//         const user = await User.findOne({ _id: userId })
//         if (!user) {
//             return res.status(404).json({ msg: `No user with id: ${userId}` })
//         }

//         const store = await Store.findOne({ _id: storeID })
//         if (!store) {
//             return res.status(404).json({ msg: `No store with id: ${storeID}` })
//         }
//         const product = store.products.filter(p => p._id.toString() === pId.toString())
//         const { _id } = product[0]
//         const { productBrand, productName, price, size, imageUrl } = product[0]
        
//         const { _id: userI } = user
//         const singleCartItem = {
//             productBrand,
//             productName,
//             price,
//             size,
//             imageUrl,
//             productI: _id
//         }
//         if (!user.cartRegestered) {
//             console.log(singleCartItem)
//             const cartItemsA = []
//             cartItemsA.push(singleCartItem)
//             const order = await Order.create({
//                 cartItems: cartItemsA,
//                 user: userI
//             })
//             res.status(201).json({ order })
//             const userUpdate = await User.findOneAndUpdate({ _id: userI }, { cartRegestered: true }, {
//                 new: true,
//                 runValidators: true,
//             })
//             if (!userUpdate) {
//                 return res.status(404).json({ msg: `No user with id: ${userI}` })
//             }
//         }
//         else {
//             const order = await Order.findOne({ user: userI })
//             order.cartItems.push(singleCartItem)
//             const orderNew = await Order.create({
//                 cartItems: order.cartItems,
//                 user: userI
//             })
//             res.status(201).json({ orderNew })
//         }
//     } catch (error) {
//         res.status(500).json({ msgR: error.message })
//     }
// }

const createOrder = async (req,res)=>{
    
    try{
        const order = await Order.create(req.body)
        res.status(201).json({order})
        }
        catch(error){
            res.status(500).json({msg: error.message})
        }
    }

const updateOrder = async (req, res) => {
    try{
        const {orderId} = req.params;
        const order = await Order.findOneAndUpdate({_id:orderId},req.body,{
            new: true,
            runValidators: true,
          })
          if(!order){
            return res.status(404).json({msg:`No order with id: ${orderId}`})
        }
        res.status(200).json({order})
    }
    catch(error){
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}