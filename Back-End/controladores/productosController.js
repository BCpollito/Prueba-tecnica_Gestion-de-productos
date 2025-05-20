const Producto = require('../modelos/productos');

//obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obetener productos'});
    }
}

//obtener productos por id
exports.obtenerProductosID = async (req, res) => {
    try {
        const producto = await Producto.findByPK(req.params.id);
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado'});
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
}

//crear prodcuto
exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
}

//eliminar producto
exports.eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.delete(req.params.id);
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

        await producto.destroy();
        res.json({ mensaje: 'producto eliminado'})
    } catch (error) {
         res.status(500).json({ error: 'Error al eliminar el producto' });
    }    
}