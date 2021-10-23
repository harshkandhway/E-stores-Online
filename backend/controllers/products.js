const Store = require("../models/Store")
// const Product = require("../models/Store")


const getAllProducts = async (req, res) => {
    // console.log(Store.schema)
    try {
        const { id: storeID } = req.params
        const store = await Store.findOne({ _id: storeID })
        // console.log(Store.Schema.products);
        // const product = await store.products.find({})
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
        // console.log("checking",store.products);
        let p = store.products;
        p.push(req.body)
        store.products = p
        // console.log(p)
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
// const createStores = (req,res)=>{
//     const store = Store.create(req.body)
//     res.status(201).json({store})
// }

const getProduct = async (req, res) => {
    try {
        const { id: storeID } = req.params
        const store = await Store.findOne({ _id: storeID })
        if (!store) {
            return res.status(404).json({ msg: `No store with id: ${store}` })
        }
        res.status(200).json({ store })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

// const updateStore = async (req,res)=>{
//     try{
//         const {id:storeID} = req.params
//         console.log(req.body);
//         console.log(storeID);
//         const store = await Store.findOneAndUpdate({_id:storeID},req.body,{
//             new: true,
//             runValidators: true,
//           })
//         if(!store){
//             return res.status(404).json({msg:`No store with id: ${storeID}`})
//         }
//         res.status(200).json({store})
//     }
//     catch(error){
//         res.status(500).json({msg:error})
//     }
// }

const updateProduct = async (req, res) => {
    try {
        const { id: storeID } = req.params
        console.log(req.body);
        console.log(storeID);
        const store = await Store.findOneAndUpdate({ _id: storeID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!store) {
            return res.status(404).json({ msg: `No store with id: ${storeID}` })
        }
        res.status(200).json({ store })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id: storeID } = req.params
        const store = await Store.findOneAndDelete({ _id: storeID })
        if (!store) {
            return res.status(200).json({ msg: `No store with id: ${storeID}` })
        }
        res.status(200).json({ store })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllProducts, createProducts, getProduct, updateProduct, deleteProduct
}