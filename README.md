# Proyecto Full Stack: API de Usuarios

Este proyecto consiste en un backend desarrollado con **Node.js** y **Express**, conectado a una base de datos **PostgreSQL**, y un frontend en **Angular** que consume los datos del backend.

## Tabla de Contenidos

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Instalación](#instalación)
3. [Ejecutar el Backend](#ejecutar-el-backend)
4. [Ejecutar el Frontend](#ejecutar-el-frontend)
5. [Script de Base de Datos](#script-de-base-de-datos)
6. [Pruebas del Proyecto](#pruebas-del-proyecto)

## Estructura del Proyecto

```plaintext
project/
│
├── backend/
│   ├── config/          # Configuración de la base de datos
│   ├── controllers/     # Lógica de control
│   ├── dao/             # Acceso a datos
│   ├── services/        # Lógica de negocio
│   ├── routes/          # Definición de rutas
│   ├── .env             # Variables de entorno
│   ├── index.js         # Archivo principal del backend
│   └── package.json     # Dependencias del backend
│
└── frontend/
    ├── src/             # Código fuente de Angular
    ├── angular.json     # Configuración del proyecto Angular
    └── package.json     # Dependencias del frontend
```

## Instalación

1. Clonar el repositorio
   ```sh
   git clone https://github.com/erickturriago/prueba-fullstack.git
   ```
2. Instalar dependencias del Backend
   ```sh
   cd backend
   npm install
   ```
3. Configurar variables de entorno (archivo .env)
   ```js
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=db-prueba-fullstack
    DB_PASSWORD=postgres
    DB_PORT=5432
    PORT=3000
   ```
4. Instalar dependencias del Frontend
   ```sh
   cd frontend
   npm install

## Ejecutar el Backend
```sh
cd backend
node index.js
```

## Ejecutar el Frontend
```sh
cd frontend
ng serve
```

## Script de Base de Datos

```sql
CREATE TABLE IF NOT EXISTS usuarios (
 id SERIAL PRIMARY KEY,
 nombre VARCHAR(100),
 correo VARCHAR(100),
 edad INT
);

INSERT INTO usuarios (nombre, correo, edad) VALUES
('Juan Pérez', 'juan.perez@example.com', 30),
('María López', 'maria.lopez@example.com', 25),
('Carlos Gómez', 'carlos.gomez@example.com', 40),
('Ana Torres', 'ana.torres@example.com', 35),
('Luis Ramírez', 'luis.ramirez@example.com', 28),
('Sofía Vargas', 'sofia.vargas@example.com', 22),
('Miguel Castillo', 'miguel.castillo@example.com', 45),
('Laura Fernández', 'laura.fernandez@example.com', 31),
('Pedro Martínez', 'pedro.martinez@example.com', 38),
('Lucía Morales', 'lucia.morales@example.com', 26);
```

## Pruebas del Proyecto

Prueba de Backend usando Thunder Client
![App Fullstack Test Backend](https://github.com/user-attachments/assets/35834bb9-f9ce-4589-9776-291d1827f583)

Prueba de Frontend

