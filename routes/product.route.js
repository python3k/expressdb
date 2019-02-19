const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET
const product_controller = require('../controllers/product.controller');

router.get('/test', product_controller.test);

// Create
router.post('/create', product_controller.product_create);

// Read
router.get('/:id', product_controller.product_details);

// Update
router.put('/update/:id', product_controller.product_update)

// Delete

router.delete('/delete/:id', product_controller.product_delete)
module.exports = router;
