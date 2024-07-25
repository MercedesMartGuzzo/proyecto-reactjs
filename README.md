Proyecto de E-commerce en React
Hola! Soy Mercedes Martinez y este es mi proyecto de e-commerce desarrollado en React, como parte de mi curso de React en la carrewra Full Stack Developer en Coderhouse. La aplicación está inspirada en una tienda online de productos de ropa y accesorios para hombres y mujeres.

El sitio creado permite a los usuarios navegar por las diferentes secciones, ver los productos, agregarlos y eliminarlos del carrito, y finalizar la compra.

Características

Navegación: Los usuarios pueden navegar entre las diferentes categorías de productos.
Detalles del producto: Los usuarios pueden ver los detalles de productos individuales.
Carrito de compras: Los usuarios pueden agregar productos al carrito, ver el contenido del carrito, eliminar uno, varios o todos los productos.
Finalización de compra: Los usuarios pueden proceder a la página de finalización de compra para completar su pedido.

Componentes

NavBar: Barra de navegación principal.
ItemListContainer: Contenedor para la lista de productos.
ItemDetailContainer: Contenedor para los detalles de un producto específico.
Carrito: Página del carrito de compras.
Finalizar: Página para finalizar la compra.
CartWidget: Widget del carrito, incluido en el NavBar.
Item: Componente para mostrar un producto individual.
ItemCount: Componente para seleccionar la cantidad de productos a comprar.
Context:Estecomponente se utiliza para manejar el estado global de la aplicación mediante Context API, usando CartProvider pude compartir datos entre componentes sin tener que pasar explícitamente las props a través de varios niveles de componentes.
Rutas
/: Página principal con el componente ItemListContainer.
'/products/detail/:id' Detalles de un producto específico con el componente ItemDetailContainer.
'/products/:category': Lista de productos de una categoría específica con el componente ItemListContainer.
/carrito: Página del carrito de compras con el componente Carrito.
/checkout: Página de finalización de compra con el componente Finalizar.

Tecnologías Utilizadas

React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Para manejo de rutas.
Context API: Para manejo del estado global de la aplicación (CartProvider).
React Hook Form: Biblioteca para el manejo de formularios.
useState: Hook para el manejo del estado local.
useEffect: Hook para manejar efectos secundarios en componentes funcionales.
Firebase: Para la autenticación de usuarios y la base de datos.
Fakestoreapi: traje mis productos a traves del uso de esta api
Vercel: Para el desploy de la aplicación.


# React + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
