import React, { useState } from 'react';
import './Guia.css';

function Guia() {
  const [guiaSelecionado, setGuiaSelecionado] = useState(null);

  const guias = [
    {
      id: 1,
      tag: 'POSTURA',
      titulo: 'Postura correta para programadores',
      descricao:
        'Regule a altura da cadeira, alinhe os braços em 90° e mantenha na linha dos olhos para evitar dores na coluna lombar e cervical.',
      conteudoCompleto: [
        'Ajuste a altura da cadeira para que seus pés fiquem totalmente apoiados no chão ou em um descanso de pé.',
        'Mantenha seus joelhos em um ângulo de 90 graus com as coxas na horizontal.',
        'Os braços e antebraços devem formar um ângulo reto (90°) em relação ao teclado.',
        'O topo da tela do monitor deve estar alinhado com a linha dos seus olhos, a uma distância de um braço esticado (50 cm a 70 cm).'
      ]
    },
    {
      id: 2,
      tag: 'HARDWARE',
      titulo: 'Teclados Mecânicos vs LER/DORT',
      descricao:
        'Descubra como switches leves, acionamento macio e o uso de descanso de pulso reduzem a sobrecarga e previnem inflamações nas articulações.',
      conteudoCompleto: [
        'Switches leves (como Red ou Brown) exigem menos força de acionamento em cada tecla pressed.',
        'Evite digitar com os pulsos angulados para cima ou para os lados; utilize um descanso de pulso ergonômico.',
        'A resposta tátil reduz o hábito de "bater" a tecla até o fundo (bottoming out), diminuindo o impacto nos dedos e tendões.',
        'Layouts menores (75% ou Tenkeyless) aproximam o mouse do teclado, reduzindo a tensão nos ombros.'
      ]
    },
    {
      id: 3,
      tag: 'VISÃO',
      titulo: 'Iluminação e Regra 20-20-20',
      descricao:
        'Evite a fadiga com o uso de Lightbars no monitor e pausas estratégicas a cada 20 minutos focando objetos distantes no seu ambiente.',
      conteudoCompleto: [
        'Regra 20-20-20: A cada 20 minutos de tela, olhe para um objeto a pelo menos 6 metros de distância por 20 segundos.',
        'Use uma Lightbar no monitor para iluminação assimétrica, evitando reflexos diretos no painel da tela.',
        'Mantenha a iluminação ambiente proporcional ao brilho da sua tela para evitar esforço ocular exagerado.',
        'Pisque com frequência para manter os olhos lubrificados e reduza o uso de luz azul à noite.'
      ]
    },
    {
      id: 4,
      tag: 'MOBILIÁRIO',
      titulo: 'Como Escolher Cadeira Ergonômica',
      descricao:
        'Entenda sobre lombar ajustável, tecido mesh respirável e braços 4D para garantir conforto durante longas sessões de programação.',
      conteudoCompleto: [
        'Suporte Lombar Ajustável: Deve acompanhar a curvatura natural da espinha na região inferior das costas.',
        'Tecido Mesh: Proporciona ventilação adequada e distribuição uniforme da pressão do corpo.',
        'Braços Reguláveis (3D ou 4D): Garantem o alinhamento correto dos cotovelos com a altura da mesa.',
        'Mecanismo Synchro: Permite reclinar o encosto mantendo o assento no ângulo correto para alívio da pressão muscular.'
      ]
    }
  ];

  return (
    <>
      <div className="guia-container">
        {/* Banner Principal */}
        <section className="guia-header-box">
          <span className="guia-subtitle">Saúde & Proatividade</span>
          <h1 className="guia-title">Guias Ergonômicas & Postura Dev</h1>
          <p className="guia-description">
            Aprenda a configurar seu ambiente de trabalho para evitar lesões e maximizar o rendimento.
          </p>
        </section>

        {/* Grid de Cards */}
        <section className="guia-grid">
          {guias.map((item) => (
            <div key={item.id} className="guia-card">
              <div className="guia-badge">{item.tag}</div>
              <h2 className="guia-card-title">{item.titulo}</h2>
              <p className="guia-card-description">{item.descricao}</p>
              <button
                className="guia-btn-read"
                onClick={() => setGuiaSelecionado(item)}
              >
                Ler Guia Completo
              </button>
            </div>
          ))}
        </section>

        {/* Modal do Guia Completo */}
        {guiaSelecionado && (
          <div className="modal-overlay" onClick={() => setGuiaSelecionado(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <span className="guia-badge">{guiaSelecionado.tag}</span>
                <h2>{guiaSelecionado.titulo}</h2>
              </div>
              
              <div className="modal-body">
                <p className="modal-description">{guiaSelecionado.descricao}</p>
                <h3>Recomendações Práticas:</h3>
                <ul>
                  {guiaSelecionado.conteudoCompleto.map((ponto, index) => (
                    <li key={index}>{ponto}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">
                <button
                  className="guia-btn-read"
                  onClick={() => setGuiaSelecionado(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer posicionado fora da div guia-container */}
      <footer className="footer-container">
        <span>DevDock © 2026 — Projeto Integrador React</span>
        <span className="footer-destaque">
          Desenvolvido para Devs & Gamers
        </span>
      </footer>
    </>
  );
}

export default Guia;