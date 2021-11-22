const express = require('express')
const {authenticateUser,authorizePermissions} = require('../middleware/authentication.js')
const router = express.Router()
const {
    getAllOrders, 
    getSingleOrder, 
    getCurrentUserOrders,
    createOrder, 
    updateOrder
} = require('../controllers/order')

router.route('/:id/products/:productId/')
    // .get(authenticateUser,getAllOrders)
    .post(authenticateUser,createOrder)
    
router.route('/')
    .get(authenticateUser,/*authorizePermissions('admin')*/getAllOrders)

router.route('/showAllMyOrders')
    .get(authenticateUser,getCurrentUserOrders)

router.route('/:orderId')
    .get(authenticateUser,getSingleOrder)
    .patch(authenticateUser,updateOrder)
    
    
    // router.route('/:id/uploadImage')
    // .post(authenticateUser, authorizePermissions('admin'),uploadImage)

module.exports = router