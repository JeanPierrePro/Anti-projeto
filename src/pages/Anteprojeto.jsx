// src/pages/Anteprojeto.jsx

import React from 'react';

// Importa todas as seções
import Header from '../sections/Header';
import Enquadramento from '../sections/Enquadramento';
import Descricao from '../sections/Descricao';
import Objetivos from '../sections/Objetivos';
import Metodologia from '../sections/Metodologia';
import Planeamento from '../sections/Planeamento';
import Footer from '../sections/Footer'; 

function Anteprojeto() {
  return (
    <div className="anteprojeto-container">
      <Header />
      
      <Enquadramento />
      <div className="section-divider"></div>

      <Descricao />
      <div className="section-divider"></div>

      <Objetivos />
      <div className="section-divider"></div>

      <Metodologia />
      <div className="section-divider"></div>

      <Planeamento />
      <div className="section-divider"></div>

      <Footer />
    </div>
  );
}

export default Anteprojeto;