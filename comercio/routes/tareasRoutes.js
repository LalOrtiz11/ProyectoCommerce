const express = require('express')
const router = express.Router()
const {getProducto, createProducto, updateProducto, deleteProducto }= require('../controllers/productosController')

router.get('/',getProducto)
   

router.post('/',createProducto)
   
router.put('/:id',updateProducto)

router.delete('/:id',deleteProducto)

module.exports = router