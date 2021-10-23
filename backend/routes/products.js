const express = require('express')
const router = express.Router()
const {
    getAllProducts,
    createProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products')

router.route('/:id/products/').get(getAllProducts).patch(createProducts)
router.route('/:id/products/:productId').get(getProduct).patch(updateProduct).delete(deleteProduct)


module.exports = router