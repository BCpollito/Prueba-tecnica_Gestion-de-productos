import { Card, Typography, Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Listarproductos() {

    const TABLE_HEAD = ["ID", "Nombre", "Precio", "En stock", "Acciones"];

    const [Productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const getProductos = async () => {
        try {
            const response = await axios.get("/productos");
            const productsData = response.data;
            setProductos(productsData);
        } catch (error) {
            console.log("Error al obtener los productos: ");
            console.error(error);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);


    const handleDeleteRegistro = async (key) => {
        try {
            await axios.delete(`/productos/${key}`);
            alert("registro eliminado");
            await getProductos();
        } catch (error) {
            console.error("Error al eliminar producto:", error);
            alert("Hubo un error al eliminar el producto");
        }
    };

    const handleBuscar = async () => {
    if (!busqueda.trim()) return getProductos();

    try {
        const response = await axios.get(`/productos/${busqueda}`);
        setProductos([response.data]);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            alert("Producto no encontrado");
        } else {
            alert("Ocurrió un error al buscar el producto");
            console.log(error);
        }
        await getProductos();
    }
};

    return (
        <>
        <div className="p-4 flex items-center gap-2">
                <Input
                    label="Buscar por ID o nombre"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <Button onClick={handleBuscar}>Buscar</Button>
                <Button variant="outlined" onClick={getProductos}>Reset</Button>
            </div>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Productos.map(({ id, nombre, precio, enStock }) => (
                            <tr key={id} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {id}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {nombre}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {precio}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    {enStock ? "si" : "no"}
                                </td>
                                <td className="p-4">
                                    <div className="">
                                        <Typography variant="small" color="blue-gray" className="font-medium">
                                        <Button color="red"
                                            onClick={() => handleDeleteRegistro(id)}
                                        >Eliminar</Button>
                                    </Typography>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </>
    )
}