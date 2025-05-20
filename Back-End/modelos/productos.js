const { DataTypes } = require('sequelize');
const sequelize =  require('../config/DataBase');

const Producto = sequelize.define('Producto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});