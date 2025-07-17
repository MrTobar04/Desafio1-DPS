'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modifyCart, removeProduct, clearCart } from "@/redux/cartSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let onCart = 0;
  Object.values(cart.products).forEach(product => onCart += product.quantity);

  const handleModifyProduct = (product, quantity) => {
    const parsedQuantity = Number(quantity);
    if (Number.isInteger(parsedQuantity) && parsedQuantity >= 0) {
      dispatch(modifyCart({ product, quantity: parsedQuantity }));
    } else {
      console.warn("Cantidad inválida:", quantity);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-himalaya">
      <div className="container-fluid">
        <a className="navbar-brand cafe-title" href="#"> Café Himalaya</a>

        <button className="btn cart-toggle-btn" onClick={() => setShowCart(!showCart)}>
          🛒 Carrito ({onCart})
        </button>
      </div>

      {showCart && (
        <div className="cart-dropdown shadow">
          {onCart === 0 ? (
            <p className="empty-cart">El carrito está vacío</p>
          ) : (
            <>
              {Object.values(cart.products).map((item, index) => (
                item.quantity > 0 && (
                  <div key={index} className="cart-item d-flex align-items-center">
                    <img src={item.product.image} alt={item.title} width={110} height={90} className="me-3 rounded" />
                    <div className="cart-details">
                      <p className="mb-1">{item.quantity} x {item.product.name}</p>
                      <p className="mb-1">${item.product.price}</p>
                      <input
                        type="number"
                        min="0"
                        className="form-control quantity-input"
                        value={item.quantity}
                        onChange={(e) => handleModifyProduct(item.product, e.target.value)}
                      />
                      <button className="btn btn-sm btn-outline-danger mt-2" onClick={() => handleRemove(item.product)}>Eliminar</button>
                    </div>
                  </div>
                )
              ))}
              <div className="cart-summary mt-3">
                <p className="fw-bold">Total: ${cart.total}</p>
                <button className="btn btn-sm btn-outline-danger mt-2" onClick={handleClearCart}>Vaciar Carrito</button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
