import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Opcional: para estilos do layout

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;