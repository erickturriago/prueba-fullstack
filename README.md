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
