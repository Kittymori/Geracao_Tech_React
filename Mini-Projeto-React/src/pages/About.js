import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Sobre Nós</h1>
      <p>Conheça mais sobre nossa empresa e nossos valores.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default About;