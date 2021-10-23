const express = require('express')
const router = express.Router()
const {
    getAllStores,
    createStores,
    getStore,
    updateStore,
    deleteStore
} = require('../controllers/stores')

router.route('/').get(getAllStores).post(createStores)
router.route('/:id').get(getStore).patch(updateStore).delete(deleteStore)


module.exports = router