'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modifyCart, removeProduct, clearCart } from "@/redux/cartSlice";
import '../styles/navbar.css';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(removeProduct(product))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleModifyProduct = (product, quantity) => {
        // Convertir a número por seguridad
        const parsedQuantity = Number(quantity);

        // Validar: debe ser un número entero, no NaN, y mayor o igual a 0
        if (Number.isInteger(parsedQuantity) && parsedQuantity >= 0) {
            dispatch(modifyCart({ product, quantity: parsedQuantity }));
        } else {
            console.warn("Cantidad inválida:", quantity);
            // Opcional: podrías mostrar un mensaje al usuario
        }
    };  
    
    return (
        <nav className='navbar'>
            <h1>Mi Tienda</h1>
            <button className='cart-button' onClick={() => setShowCart(!showCart)}>
                🛒 Carrito ({cart.length})
            </button>
            {showCart && (
                <div className='cart-dropdown'>
                    {cart.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (
                        <>
                            {Object.values(cart.products).map((item, index) => (
                                <>
                                    {item.quantity !== 0 ? 
                                    (
                                        <div key={index} className='cart-item'>
                                            <img width={120} height={150} src={item.product.image} alt={item.title} />
                                            <p>{item.quantity} x {item.product.name} - ${item.product.price}</p>
                                            <input   onChange={(e) => handleModifyProduct(item.product, e.target.value)}></input>
                                            <button onClick={() => handleRemove(item.product)}>Eliminar</button>
                                        </div>
                                        
                                    ) : null}
                                </>

                            ))}
                            <p>Total - ${cart.total}</p>
                            <button className='clear-button' onClick={handleClearCart}>Vaciar Carrito</button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
