import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial!</h1>
      <p>Este é o conteúdo da página inicial.</p>
      <nav>
        <ul>
          <li><Link to="/about">Sobre Nós</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/user/123">Ver Perfil do Usuário 123</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
