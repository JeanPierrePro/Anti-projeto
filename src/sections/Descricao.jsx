// src/sections/Descricao.jsx

import React from 'react';

function Descricao() {
  const ideiaCentral = [
    "Apresentar e manipular modelos 3D didáticos (Objetos de Aprendizagem).",
    "Comunicar (via texto/voz simulada) as etapas de um processo ou as características de um conceito.",
    "Avaliar o progresso do aluno por meio de interações e quizzes no ambiente 3D."
  ];

  return (
    <section id="descricao" className="pap-section">
      <h2 className="section-title">3. Tema e Descrição Geral do Projeto</h2>

      <div className="card">
        <h3>Título do Projeto</h3>
        <p className="subtitle" style={{color: 'var(--primary-color)', fontSize: '1.2em'}}>
          "Protótipo de um Assistente Pedagógico Virtual 3D: Interatividade e Imersão para o Ensino de [Inserir o Tema Específico Aqui]"
        </p>
      </div>

      <div className="card">
        <h3>Ideia Central: Funções do Assistente</h3>
        <p>Desenvolver um Assistente Virtual 3D (Avatar) que atua como um **guia e mediador ativo** em um ambiente de aprendizagem tridimensional. O assistente terá a capacidade de:</p>
        <ul>
          {ideiaCentral.map((ponto, index) => (
            <li key={index}>{ponto}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Descrição Sumária do Protótipo</h3>
        <p>O projeto será um **protótipo interativo** focado em um único tema pedagógico (case study). Consistirá numa aplicação 3D (para desktop ou web) onde o aluno navega num cenário virtual. O foco é o **engajamento do aluno na manipulação tridimensional** desse conteúdo, com o suporte contínuo do assistente.</p>
      </div>
    </section>
  );
}

export default Descricao;