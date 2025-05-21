const Producto = require('../modelos/productos');

//obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obetener productos' });
    }
}

//obtener productos por id
exports.obtenerProductosID = async (req, res) => {
    try {
        const { caracter } = req.params;
        let producto;

        if (!isNaN(caracter)) {
            producto = await Producto.findByPk(caracter);
        } else {
            producto = await Producto.findOne({ where: { nombre: caracter } });
        }

        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
}

//crear prodcuto
exports.crearProducto = async (req, res) => {
    try {
        const { nombre, precio } = req.body;

        if (!nombre.trim() || !precio.trim() || isNaN(precio)) {
            return res.json({ error: true });
        } else {
            const nuevoProducto = await Producto.create({ nombre, precio });
            res.status(201).json(nuevoProducto);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
}

//eliminar producto
exports.eliminarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Producto.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: 'Producto eliminado' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
}