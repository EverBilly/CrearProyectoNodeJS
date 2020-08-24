const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.saveCustomer);
router.get('/delete/:id', customerController.deleteCustomer); 
router.get('/update/:id', customerController.editCustomer);
router.post('/update/:id', customerController.updateCustomer);

module.exports = router;