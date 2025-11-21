// src/sections/Header.jsx (REFACTORADO)

import React from 'react';
import '../styles/sections/header.css'; 

function Header() {
  return (
    <header className="pap-header">
      <div className="header-content">
        <h1>PROVA DE APTIDÃO PROFISSIONAL</h1>
        <h2>Assistente Pedagógico Virtual 3D</h2>
        <p className="subtitle">Interatividade e Imersão para o Ensino</p>
        
        {/* Este bloco é centralizado via Flexbox no CSS */}
        <div className="header-info-block">
          <span>
            <span role="img" aria-label="student">👨‍🎓</span> **ALUNO(A):** <strong>Jean Pierre da Costa Antunes</strong>
          </span>
          <span>
            <span role="img" aria-label="advisor">🧑‍🏫</span> **ORIENTADOR(A):** <strong>Johnny Mosqueira Ocampo</strong>
          </span>
          <span>
            <span role="img" aria-label="date">🗓️</span> **DATA:** <strong>30/10/2025</strong>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;