import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <p>Você pode voltar para a <Link to="/">Página Inicial</Link>.</p>
    </div>
  );
};

export default NotFound;