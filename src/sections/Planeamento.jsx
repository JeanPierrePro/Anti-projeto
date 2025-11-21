// src/sections/Planeamento.jsx

import React from 'react';
// Importa o CSS da tabela para estilização
import '../styles/sections/tabela.css'; 

function Planeamento() {
  // Dados da Seção 6: Planeamento
  const cronograma = [
    { fase: "1. Análise e Design Pedagógico", atividade: "Definição do Conceito, Roteiro do Assistente e Documentação de Requisitos.", duracao: 4, acumuladas: 4 },
    { fase: "2. Conceção e Produção de Ativos 3D", atividade: "Modelagem e Texturização do Assistente 3D e dos Objetos Didáticos.", duracao: 6, acumuladas: 10 },
    { fase: "3. Implementação Técnica", atividade: "Programação da Lógica do Assistente (IA Simples) e Interações 3D.", duracao: 9, acumuladas: 19 },
    { fase: "4. Testes e Validação", atividade: "Testes Funcionais, Usabilidade e Refinamentos (Iterações).", duracao: 3, acumuladas: 22 },
    { fase: "5. Documentação e Entrega", atividade: "Redação do Relatório (PAP) e Preparação da Defesa.", duracao: 2, acumuladas: 24 },
  ];

  return (
    // Usa a classe pap-section para centralização e a animação fadeIn definida em global.css
    <section id="planeamento" className="pap-section"> 
      <h2 className="section-title">6. Planeamento (Cronograma)</h2>
      
      <p style={{marginBottom: '30px', color: 'var(--text-secondary)'}}>
        O cronograma detalha as 5 fases do projeto, com uma duração total de 24 semanas (aproximadamente 6 meses), seguindo a metodologia Iterativa/Ágil.
      </p>

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
              <tr key={index}>
                {/* data-label é crucial para a responsividade em mobile */}
                <td data-label="Fase"><strong>{item.fase}</strong></td>
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