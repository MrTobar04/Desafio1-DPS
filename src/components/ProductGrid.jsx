'use client';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyCart, addProduct } from "@/redux/cartSlice";
import products from "../data/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/product-grid.css';  


const ProductGrid = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="product-grid-container py-5">
      <div className="container">
        <h2 className="product-title text-center mb-5">
          Productos de Café Himalaya
        </h2>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card product-card h-100 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top product-image"
                  onClick={() => setSelectedProduct(product)}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title product-name">{product.name}</h5>
                  <p className="card-text product-price">${product.price}</p>
                  <button
                    className="btn mt-auto product-btn"
                    onClick={() => dispatch(addProduct(product))}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="modal fade show d-block product-modal-overlay"
          tabIndex="-1"
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-content product-modal">
              <div className="modal-header">
                <h5 className="modal-title product-name">
                  {selectedProduct.name}
                </h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p className="product-description">{selectedProduct.description}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn product-btn"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
