const express = require('express');
const router = express.Router();
const productoController = require('../controladores/productosController');

//obtener todos los productos
router.get('/',productoController.obtenerProductos);

//obtener producto por id
router.get('/:id',productoController.obtenerProductosID);

//crear nuevo producto
router.post('/',productoController.crearProducto);

//eliminar producto
router.delete('/:id',productoController.eliminarProducto);

module.exports = router;
