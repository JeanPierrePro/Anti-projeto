// src/sections/Objetivos.jsx

import React from 'react';

function Objetivos() {
  const objetivosEspecificos = [
    "Modelar e animar o personagem 3D do Assistente Pedagógico (Avatar) e um cenário de suporte relevante.",
    "Desenvolver a lógica de comportamento do Assistente, incluindo a sequência pedagógica de apresentação de conteúdo.",
    "Programar a interatividade do ambiente 3D, permitindo ao aluno manipular objetos e responder a desafios.",
    "Integrar o sistema de diálogo (simulado) para que o Assistente possa comunicar instruções e feedback.",
    "Realizar testes de usabilidade para aferir a eficácia da interface e do fluxo de aprendizagem."
  ];

  return (
    <section id="objetivos" className="pap-section">
      <h2 className="section-title">4. Objetivos</h2>

      <div className="card">
        <h3>Objetivo Geral</h3>
        <p>Criar e validar um **Protótipo de Assistente Pedagógico Virtual 3D funcional** que demonstre como a imersão e a interatividade 3D podem ser usadas para simplificar a aprendizagem de conceitos complexos e aumentar a motivação do aluno.</p>
      </div>
      
      <div className="card">
        <h3>Objetivos Específicos</h3>
        <ul>
          {objetivosEspecificos.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Objetivos;