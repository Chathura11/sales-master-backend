const express = require('express');
const productRouter = express.Router();
const {CreateProduct,GetAllProducts} = require('../controllers/product.controller');
const {isAuthenticated,checkPermission} = require('../middleware/middleware')

productRouter.post('/',isAuthenticated,checkPermission('configure_settings'),CreateProduct);

productRouter.get('/',isAuthenticated,GetAllProducts);

module.exports = productRouter;