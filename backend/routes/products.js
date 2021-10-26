const express = require('express')
const {authenticateUser,authorizePermissions} = require('../middleware/authentication.js')
const router = express.Router()
const {
    getAllProducts,
    createProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    uploadImage
} = require('../controllers/products')

router.route('/:id/products/').get(authenticateUser,getAllProducts).post(authenticateUser,createProducts)
router.route('/:id/products/:productId/').get(authenticateUser,getProduct).patch(authenticateUser,updateProduct).delete(authenticateUser,deleteProduct)
router.route('/:id/products/:productId/uploadImage').post(authenticateUser,uploadImage)

module.exports = router