import { Card, Typography, Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Listarproductos() {

    const TABLE_HEAD = ["ID", "Nombre", "Precio", "En stock", "Acciones"];

    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        async function getProductos() {
            try {
                const response = await axios.get("/productos");
                const productsData = response.data;
                setProductos(productsData);
            } catch (error) {
                console.log("Error al obtener los clientes: ");
                console.error(error);
            }
        }
        getProductos();
    }, [])

    const handleDeleteRegistro = async (key) => {
        try {
            await axios.delete(`/productos/${key}`);
            alert("registro eliminado");
            window.location.reload();
        } catch (error) {
            console.error("Error al eliminar producto:", error);
            alert("Hubo un error al eliminar el producto");
        }
    };

    return (
        <>
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
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        <Button color="red"
                                            onClick={() => handleDeleteRegistro(id)}
                                        >Eliminar</Button>
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            <div className="fixed bottom-4 right-4 z-50 active:scale-100 focus:outline-none focus:ring-0">
                <Button
                    color="blue"
                    size="lg"
                    ripple={true}>Añadir Producto</Button>
            </div>
        </>
    )
}