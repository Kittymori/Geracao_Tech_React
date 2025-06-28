import React from 'react';
import ReactDOM from 'react-dom/client';
import 'meu-site-react/src/index.css'; // Opcional: para estilos globais
import App from 'meu-site-react/src/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);