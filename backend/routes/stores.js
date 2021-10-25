const express = require('express')
const {authenticateUser,authorizePermissions} = require('../middleware/authentication.js')
const router = express.Router()
const {
    getAllStores,
    createStores,
    getStore,
    updateStore,
    deleteStore
} = require('../controllers/stores')

router.route('/').get(authenticateUser, authorizePermissions('admin'),getAllStores).post(authenticateUser, authorizePermissions('admin'),createStores)
router.route('/:id').get(authenticateUser,getStore).patch(authenticateUser, authorizePermissions('admin'),updateStore).delete(authenticateUser, authorizePermissions('admin'),deleteStore)


module.exports = router