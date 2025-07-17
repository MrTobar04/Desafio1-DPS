# DPS - Desafío 1: Aplicación Web en React - Café Himalaya

Este repositorio contiene una aplicación web desarrollada en **React** como parte del desafío de la materia **Diseño y Programación de Software Multiplataforma (DPS)**.

Café Himalaya es una tienda virtual especializada en productos derivados del café, organizada por categorías, que permite al usuario visualizar productos, agregarlos al carrito y ver el total en tiempo real.

---

## 🧾 Características Principales

### 🔍 Visualización de Productos

- Página principal con productos organizados en las siguientes **categorías**:
  - Bebida fría
  - Bebida caliente
  - Postres de café
  - Té
  - Sándwiches
- Cada producto muestra:
  - Una fotografía representativa
  - Breve descripción
  - Precio individual
  - Botón **"Agregar"** para añadir al carrito

### 🛒 Carrito de Compras

- Posibilidad de **agregar múltiples productos** al carrito
- Cada producto en el carrito incluye:
  - Imagen y nombre
  - Campo `input number` para definir la cantidad
  - Botón para **eliminar** el producto del carrito
- Cálculo automático del **total a pagar** en función de la cantidad y el precio
- El total se actualiza **en tiempo real**, sin necesidad de presionar un botón

---

## 🚀 Instalación y Ejecución

Sigue los siguientes pasos para instalar y ejecutar la aplicación en tu entorno local:

```bash
# 1. Clona el repositorio
git clone https://github.com/MrTobar04/Desafio1-DPS

# 2. Entra al directorio del proyecto
cd Desafio1-DPS

# 3. Instala las dependencias
npm install

# 4. Ejecuta la aplicación en modo desarrollo
npm start
