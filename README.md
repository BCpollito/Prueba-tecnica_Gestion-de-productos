# Prueba-tecnica_Gestion-de-productos
# 🛒 Prueba Técnica - Gestión de Productos

Este proyecto es una aplicación full-stack construida con **React** (frontend) y **Node.js + Express + Sequelize + PostgreSQL** (backend) para gestionar productos. Permite listar, crear, eliminar y buscar productos.

---

## 📂 Estructura del repositorio

/back-end → API REST con Node.js, Express y Sequelize
/front-end → Interfaz de usuario hecha con React y Tailwind CSS
README.md → Este archivo


---

## ✅ Requisitos

- Node.js v18 o superior
- PostGreSQL
- npm

---

## ⚙️ Configuración del Backend

Ve a la carpeta del backend:

``terminal
cd back-end

Instala las dependencias:

``terminal
npm install

Crea una base de datos PostgreSQL llamada por ejemplo:

``terminal
CREATE DATABASE productos_db;

Configura el archivo .env con tus credenciales (si aplica) o edita la conexión en tu archivo config.js de Sequelize.

Ejecuta las migraciones para crear la tabla de productos:

``terminal
npx sequelize-cli db:migrate
    // Si no usas migraciones, puedes ejecutar el script SQL manualmente (ver más abajo).

Inicia el servidor 

``terminal
node server.js
    // La API correrá en http://localhost:3000

##🧾 Script SQL para crear la tabla de productos
Si no usas migraciones, puedes usar este script SQL para crear la tabla:

CREATE TABLE Productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  enStock BOOLEAN DEFAULT true
);

---

## 💻 Configuración del Frontend

Ve a la carpeta del frontend:

``terminal
cd front-end
cd gestion_productos

Instala las dependencias:

 ``terminal
 npm install

Inicia la aplicación React:

``terminal
npm run dev
//La interfaz correrá por defecto en http://localhost:5173

--- 

## 🔌 Conexión entre Frontend y Backend

Asegúrate de que el frontend haga las peticiones a http://localhost:3000 (puedes configurar Axios directamente).

CORS ya debe estar habilitado en el backend para permitir solicitudes desde el frontend.

## ✨ Funcionalidades

Listar todos los productos.

Agregar un nuevo producto.

Eliminar un producto.

Buscar producto por ID (opcional: por nombre).

Diseño responsive y limpio usando Tailwind CSS y Material Tailwind.

## 🛠️ Tecnologías utilizadas
Frontend: React, Tailwind CSS, Material Tailwind

Backend: Node.js, Express, Sequelize

Base de datos: PostgreSQL