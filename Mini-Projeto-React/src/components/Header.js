import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Opcional: para estilos do header

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contatp</Link></li>
          <li><Link to="/user/456">Perfil de Usuário</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;