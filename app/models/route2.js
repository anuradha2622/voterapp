const express = require('express');
const router = express.Router();
var cors = require('cors')
const product_controller = require('/home/anuradhayakapoor/library/scotch/starter-node-angular-master/public/js/controllers/ctrl1.js');
router.get('/test', product_controller.test);
module.exports = router;
router.post('/create', product_controller.product_create);
router.get('/read', product_controller.product_details);
router.patch('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);