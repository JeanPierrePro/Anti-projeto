// src/sections/Footer.jsx

import React from 'react';
// Não precisa de CSS dedicado se usar os estilos globais

function Footer() {
  return (
    <footer className="pap-section" style={{textAlign: 'center', backgroundColor: 'var(--bg-card)', padding: '30px', marginTop: '50px', borderTop: '3px solid var(--primary-color)'}}>
      <h2 className="section-title" style={{marginBottom: '20px', borderBottom: 'none'}}>7. Bibliografia e Contacto</h2>
      
      <div className="card" style={{backgroundColor: 'var(--bg-dark)'}}>
        <h3>Bibliografia / Referências</h3>
        <p style={{color: 'var(--text-secondary)'}}>
          * (Este espaço deve ser preenchido com as fontes bibliográficas, tutoriais, manuais, artigos e sites utilizados na pesquisa e desenvolvimento do projeto.) *
        </p>
      </div>

      <p style={{marginTop: '30px', fontSize: '0.9em', color: 'var(--text-secondary)'}}>
        © 2025 Jean Pierre da Costa Antunes | Técnico de Programador de Informática.
      </p>
      <p style={{fontSize: '0.9em', color: 'var(--primary-color)'}}>
        Protótipo desenvolvido em Unity 3D e apresentado com React (Vite).
      </p>
    </footer>
  );
}

export default Footer;