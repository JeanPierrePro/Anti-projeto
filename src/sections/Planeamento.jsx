// src/sections/Planeamento.jsx

import React from 'react';
// Importa o CSS da tabela para estilização
import '../styles/sections/tabela.css'; 

function Planeamento() {
  // Dados da Seção 6: Planeamento
  const cronograma = [
    // NOVO: Atividade 0. Pré-projeto (Setup e Configuração)
    { fase: "0. Pré-projeto (Setup)", atividade: "Instalação dos devidos sistemas (Braver e Blender) e configuração das devidas ferramentas para o projeto.", duracao: 1, acumuladas: 1, concluido: true },
    { fase: "1. Análise e Design Pedagógico", atividade: "Definição do Conceito, Roteiro do Assistente e Documentação de Requisitos.", duracao: 4, acumuladas: 5, concluido: false },
    { fase: "2. Conceção e Produção de Ativos 3D", atividade: "Modelagem e Texturização do Assistente 3D e dos Objetos Didáticos.", duracao: 6, acumuladas: 11, concluido: false },
    { fase: "3. Implementação Técnica", atividade: "Programação da Lógica do Assistente (IA Simples) e Interações 3D.", duracao: 9, acumuladas: 20, concluido: false },
    { fase: "4. Testes e Validação", atividade: "Testes Funcionais, Usabilidade e Refinamentos (Iterações).", duracao: 3, acumuladas: 23, concluido: false },
    { fase: "5. Documentação e Entrega", atividade: "Redação do Relatório (PAP) e Preparação da Defesa.", duracao: 2, acumuladas: 25, concluido: false },
  ];

  // Dados para a seção "O que já foi feito"
  const feito = [
    "✅ Instalação e Configuração dos Sistemas Braver e Blender.",
    "✅ Configuração do Ambiente de Desenvolvimento (React, Node.js).",
    "✅ Documentação inicial de requisitos e brainstorming do conceito.",
    "✅ Criação do repositório Git e configuração do CI/CD.",
    "✅ Pesquisa preliminar sobre assistentes 3D e tecnologias relacionadas.",
    " X projeto em pausa devida doencas ",
    
  ];

  return (
    // Usa a classe pap-section para centralização e a animação fadeIn definida em global.css
    <section id="planeamento" className="pap-section"> 
      <h2 className="section-title">6. Planeamento (Cronograma)</h2>
      
      <p style={{marginBottom: '30px', color: 'var(--text-secondary)'}}>
        O cronograma detalha as 6 fases do projeto, com uma duração total de **25 semanas** (aproximadamente 6 meses), seguindo a metodologia Iterativa/Ágil.
      </p>

      ---

      {/* NOVO: O que já foi feito */}
      <h3 className="section-subtitle">O que já foi feito (Setup Inicial)</h3>
      <div className="card" style={{padding: '20px', marginBottom: '30px', backgroundColor: 'var(--card-secondary-bg)'}}>
        <ul style={{listStyleType: 'none', paddingLeft: 0}}>
          {feito.map((item, index) => (
            <li key={index} style={{marginBottom: '5px', color: 'var(--text-primary)'}}>{item}</li>
          ))}
        </ul>
      </div>
      
      {/* O card aplica o fundo escuro suave e o efeito hover/lift */}
      <div className="card planning-table-container">
        <table>
          <thead>
            <tr>
              <th>Fase</th>
              <th>Atividade Chave</th>
              <th>Duração (Semanas)</th>
              <th>Semanas Acumuladas</th>
            </tr>
          </thead>
          <tbody>
            {cronograma.map((item, index) => (
              <tr key={index} className={item.concluido ? 'concluido' : ''}>
                {/* data-label é crucial para a responsividade em mobile */}
                <td data-label="Fase">
                  <strong>{item.fase}</strong>
                  {item.concluido && <span style={{marginLeft: '10px', color: 'var(--color-success)', fontSize: '0.8em'}}> (Concluído)</span>}
                </td>
                <td data-label="Atividade">{item.atividade}</td>
                <td data-label="Duração" className="text-center">{item.duracao}</td>
                <td data-label="Acumuladas" className="text-center">{item.acumuladas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Planeamento;