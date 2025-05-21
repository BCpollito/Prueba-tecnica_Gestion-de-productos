import {
    Card,
    CardBody,
    Typography,
    Button,
    Input
} from "@material-tailwind/react";
import axios from 'axios';
import { useState } from 'react';

export default function AñadirProducto() {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/productos', {
                nombre: nombre,
                precio: precio,
            });

            if (response.data.error) {
                alert('Los campos no pueden estar vacios');
            } else {
                alert('Producto agregado!');
            }
        } catch (error) {
            console.error('Error al agregar', error);
            alert('Hubo un error al intentar agregar producto');
        }
    }

    return (
        <>
        <div className="max-w-full flex justify-center">
             <div className="mt-8 mb-2 max-w-md flex flex-col gap-3 text-center">
            <Card color="mt-6 w-96" shadow={true}>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Agregar Nuevo Producto
                    </Typography>
                <CardBody>
                    <form className="mt-8 mb-2 w-80 sm:w-96 flex flex-col gap-2">
                        <Input
                            size="lg"
                            label="Nombre"
                            id="usuario"
                            name="usuario"
                            type="text"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <Input
                            type="text"
                            size="lg"
                            label="Precio"
                            id="precio"
                            name="precio"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                        <Button className="mt-6" fullWidth onClick={handleSubmit}>
                            Agregar Producto
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
        </div>
        </>
    )
}