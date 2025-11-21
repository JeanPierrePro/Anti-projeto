// src/sections/Metodologia.jsx

import React from 'react';
import '../styles/sections/tabela.css'; 

function Metodologia() {
  const tecnologias = [
    { categoria: "Motor 3D/Ambiente de Desenvolvimento", ferramenta: "Unity 3D", justificacao: "Excelente para prototipagem rápida e compatibilidade web/desktop." },
    { categoria: "Modelagem e Animação 3D", ferramenta: "Blender (Software freeware)", justificacao: "Padrão da indústria para criação de personagens e ambientes 3D." },
    { categoria: "Linguagem de Programação", ferramenta: "C# (com Unity)", justificacao: "Linguagem robusta e padrão para a lógica de jogos e simulações." },
    { categoria: "Design/Roteirização", ferramenta: "Figma / Docs", justificacao: "Criação do storyboard do assistente e wireframing da interface." },
  ];

  const etapas = [
    "Análise e Design Pedagógico: Definir o conceito, criar o Roteiro Pedagógico e especificar Requisitos.",
    "Conceção e Produção de Ativos 3D: Modelagem 3D do Assistente e objetos, e Design da experiência (UX/UI).",
    "Implementação Técnica (Engine): Programação da Lógica de Interação (movimento, ações) e do Módulo de Diálogo.",
    "Testes e Validação: Testes Funcionais, Usabilidade e recolha de feedback para refinamentos.",
    "Documentação: Elaboração do Relatório Final (PAP) e preparação da apresentação."
  ];

  return (
    <section id="metodologia" className="pap-section"> 
      <h2 className="section-title">5. Metodologia de Desenvolvimento</h2>
      
      <p style={{textAlign: 'center', marginBottom: '30px', color: 'var(--text-secondary)'}}>
        Utilizaremos uma **abordagem Iterativa/Ágil**, comum no desenvolvimento de software e simulações 3D, permitindo ajustes rápidos com base em testes e feedback contínuo.
      </p>

      {/* Imagem do Ciclo Agile (Centralizada) */}
      <div style={{margin: '30px auto', maxWidth: '80%', textAlign: 'center'}}>
              </div>

      <div className="card">
        <h3>Etapas do Desenvolvimento</h3>
        <ul>
          {etapas.map((etapa, index) => (
            <li key={index}>{etapa}</li>
          ))}
        </ul>
      </div>

      {/* Tabela de Tecnologias - O layout é corrigido pelo CSS da tabela */}
      <div className="card planning-table-container">
        <h3>Tecnologias, Linguagens e Ferramentas a Utilizar</h3>
        <table>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Tecnologia/Ferramenta</th>
              <th>Justificação</th>
            </tr>
          </thead>
          <tbody>
            {tecnologias.map((tec, index) => (
              <tr key={index}>
                <td data-label="Categoria"><strong>{tec.categoria}</strong></td>
                <td data-label="Tecnologia">{tec.ferramenta}</td>
                <td data-label="Justificação">{tec.justificacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Metodologia;