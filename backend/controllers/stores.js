const Store = require("../models/Store")
// const User = require('../models/user.js');
const {checkPermissions} = require('../utils/checkPermissions');

const getAllStores = async (req,res)=>{
    // console.log(Store.schema)
    try{
        const store = await Store.find({})
        res.status(200).json({store})
    }
    catch(error){
        res.status(500).json({msg: error.message})
    } 
}

const createStores = async (req,res)=>{
    try{
    const store = await Store.create(req.body)
    res.status(201).json({store})
    }
    catch(error){
        res.status(500).json({msg: error.message})
    }
}

const getStore = async (req,res)=>{
    try{
        const {id:storeID} = req.params
        const store = await Store.findOne({_id:storeID})
        if(!store){
            return res.status(404).json({msg: `No store with id: ${store}`})
        }
        // const isPermission = checkPermissions(req.user, store._id);
        // if(isPermission)
        res.status(200).json({store})
        // else
        // return res.status(401).json({msg:`You are not authorized to check different store`})
}
    catch(error){
        res.status(500).json({msg:error})
    }
}

const updateStore = async (req,res)=>{
    try{
        const {id:storeID} = req.params
        // console.log(req.body);
        // console.log(storeID);
        const store = await Store.findOneAndUpdate({_id:storeID},req.body,{
            new: true,
            runValidators: true,
          })
        if(!store){
            return res.status(404).json({msg:`No store with id: ${storeID}`})
        }
        res.status(200).json({store})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

// const updateProduct = async (req,res)=>{
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

const deleteStore = async (req,res)=>{
    try{
        const {id:storeID} = req.params
        const store = await Store.findOneAndDelete({_id:storeID})
        if(!store){
            return res.status(200).json({msg:`No store with id: ${storeID}`})
        }
        res.status(200).json({store})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = { 
    getAllStores,createStores, getStore , updateStore, deleteStore 
}