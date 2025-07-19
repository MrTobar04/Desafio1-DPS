'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-himalaya mt-auto py-4">
      <div className="container text-center">
        <p className="footer-text mb-2">
          © {new Date().getFullYear()} Café Himalaya. Todos los derechos reservados.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">Contacto</a>
        </div>
        <div className="footer-social mt-3">
          <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
          <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
