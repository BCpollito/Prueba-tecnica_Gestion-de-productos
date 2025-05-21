const express = require('express');
const corsConfig = require('./config/CorsConfig');
const sequelize = require('./config/DataBase');
const app = express();

const productosRoutes = require('./rutas/productosRoutes');

app.use(corsConfig);
app.use(express.json());

//rutas
app.use('/productos',productosRoutes);


//funcion asincronica para inicar el servidor y contectar la DB
const StarServer = async () => {
    try {
        await sequelize.sync();
        console.log('Base de datos sincronizada');

        app.listen(3000, () => {
           console.log(`Servidor en puerto ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("error al conectar ", error);
    }
};

StarServer();

