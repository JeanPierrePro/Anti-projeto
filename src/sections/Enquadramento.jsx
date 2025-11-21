// src/sections/Enquadramento.jsx

import React from 'react';

function Enquadramento() {
  const problematicas = [
    "Desmotivação do aluno e sensação de isolamento.",
    "Dificuldade em visualizar e manipular conceitos abstratos ou processos complexos (ex: como um motor funciona).",
    "A ausência de um suporte pedagógico visível e proativo no próprio ambiente de estudo."
  ];

  return (
    <section id="enquadramento" className="pap-section"> 
      <h2 className="section-title">2. Enquadramento e Justificação</h2>

      <div className="card">
        <h3>Contexto do Projeto: Inovação e Imersão</h3>
        <p>O contexto atual é a crescente necessidade de inovar nos processos de ensino-aprendizagem, especialmente no Ensino à Distância (EAD) e na procura por experiências altamente envolventes. A integração de tecnologia 3D e ambientes imersivos (como a Realidade Virtual) demonstrou ser altamente eficaz para aumentar o engajamento e a retenção de conhecimento.</p>
      </div>

      <div className="card">
        <h3>Problemática Identificada</h3>
        <p>A principal limitação é a falta de interação personalizada e imersão nos formatos tradicionais de ensino online (vídeos, PDFs). Isso leva a:</p>
        <ul>
          {problematicas.map((p, index) => (
            <li key={index}>**{p.split(':')[0]}**{p.includes(':') ? ':' + p.split(':')[1] : ''}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Motivação Pessoal e Profissional</h3>
        <p><strong>Pessoal:</strong> Forte interesse em aplicar tecnologias de ponta (3D e programação de IA/Agentes) para transformar a educação. </p>
        <p><strong>Profissional:</strong> Desenvolver um portfólio de competências em *game/simulation design* para educação, design de interação 3D e design instrucional.</p>
      </div>
    </section>
  );
}

export default Enquadramento;