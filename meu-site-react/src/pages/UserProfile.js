import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); // Obtém o parâmetro 'id' da URL
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Este é o perfil do usuário com ID: <strong>{id}</strong>.</p>
    </div>
  );
};

export default UserProfile;