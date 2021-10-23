const Store = require("../models/Store")

const getAllProducts = async (req, res) => {
    try {
        const { id: storeID } = req.params
        const store = await Store.findOne({ _id: storeID })
        res.status(200).json(store.products)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const createProducts = async (req, res) => {
    try {
        const { id: storeID } = req.params
        const store = await Store.findOne({ _id: storeID })
        let p = store.products;
        p.push(req.body)
        store.products = p
        const storeNew = await Store.findOneAndUpdate({ _id: storeID }, store, {
            new: true,
            runValidators: true,
        })
        res.status(201).json( {storeNew})
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const {productId} = req.params
        const { id: storeID } = req.params
        console.log(storeID)
        const store = await Store.findOne({ _id: storeID })
        store.products = store.products.filter(p=>p._id.toString()===productId.toString())
        res.status(200).json( store.products )
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}


const updateProduct = async (req, res) => {
    try {
        const { id: storeID } = req.params
        const {productId} = req.params
        const store = await Store.findOne({_id:storeID})
        for(let i in store.products){
            if(store.products[i]._id.toString()===productId.toString()){
                store.products[i]=req.body;
            }
        }
        const storeNew = await Store.findOneAndUpdate({ _id: storeID }, store, {
            new: true,
            runValidators: true,
        })
        if (!store) {
            return res.status(404).json({ msg: `No store with id: ${storeID}` })
        }
        res.status(200).json({ storeNew })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {productId} = req.params
        const { id: storeID } = req.params
        const store = await Store.findOne({_id:storeID})
        store.products = store.products.filter(p=>p._id.toString()!==productId.toString())
        const storeNew = await Store.findOneAndUpdate({ _id: storeID }, store, {
            new: true,
            runValidators: true,
        })
        res.status(200).json( {storeNew})
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllProducts, createProducts, getProduct, updateProduct, deleteProduct
}