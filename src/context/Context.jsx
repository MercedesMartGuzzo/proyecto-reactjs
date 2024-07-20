import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const carrito = JSON.parse(localStorage.getItem("carrito")) || {
    items: [],
    total: 0,
    qty: 0
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(carrito);

    const Agregar = (item, cantidad) => {
        const agregarItem = { ...item, cantidad };
        const carritoNuevo = Array.isArray(cart.items) ? [...cart.items] : [];
        const agregadoCarrito = carritoNuevo.find((producto) => producto.id === itemAgregado.id);

        if (agregadoCarrito) {
            agregadoCarrito.cantidad += cantidad;
        } else {
            carritoNuevo.push(agregarItem);
        }

        const total = carritoNuevo.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0);
        const qty = carritoNuevo.reduce((acc, curr) => acc + curr.cantidad, 0);

        setCart({
            items: nuevoCarrito,
            total,
            qty
        });
    };

    const precioFinal = () => {
        return cart.items.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    };

    const limpiar = () => {
        setCart({
            items: [],
            total: 0,
            qty: 0
        });
    };
    const eliminarProducto = (id) => {
        const carritoNuevo= cart.items.filter((item) => item.id !== id);
        const total = carritoNuevo.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0);
        const qty = carritoNuevo.reduce((acc, curr) => acc + curr.cantidad, 0);

        setCart({
            items: carritoNuevo,
            total,
            qty
        })
    };


    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart));
    }, [cart]);

    return (
        <Context.Provider value={{ cart, precioFinal, limpiar, eliminarProducto  }}>
            {children}
        </Context.Provider>
    );
};