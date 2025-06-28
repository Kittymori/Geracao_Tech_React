import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Entre em Contato</h1>
      <p>Preencha o formulário abaixo para nos contatar.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre Nós</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Contact;