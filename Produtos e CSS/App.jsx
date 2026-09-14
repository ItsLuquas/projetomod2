import React, { useState } from 'react';
import './App.css';
import foto1 from './assets/Tk2.jpg';
import foto2 from './assets/LG34.jpg';
import foto3 from './assets/Miller.webp';
import foto4 from './assets/MX3S.jpg';
import foto5 from './assets/Dell27.jpg';

function DetalhesProduto({ produto, aoVoltar }) {
  return (
    <div className="container-details">
      <button className="btn-filter btn-back" onClick={aoVoltar}>
        ← Voltar para a lista
      </button>

      <div className="card-details">
        <div className="card-image-box details-image-box">
          {produto.foto ? (
            <img src={produto.foto} alt={produto.nome} className="card-image" />
          ) : (
            <span className="placeholder-text">[FOTO DO PRODUTO]</span>
          )}
        </div>

        <div className="card-category-badge">{produto.badge}</div>
        <h1 className="title details-title">{produto.nome}</h1>
        <p className="card-price details-price">{produto.preco}</p>
        <p className="card-description details-description">{produto.descricao}</p>

        {produto.specs && (
          <div className="details-info-box">
            <h3>Especificações Técnicas</h3>
            <ul>
              {produto.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        {produto.ergonomia && (
          <div className="details-info-box highlight">
            <h3>Foco em Saúde & Ergonomia</h3>
            <p>{produto.ergonomia}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Produtos() {
  const todosProdutos = [
    {
      id: 1,
      categoria: 'Periféricos',
      badge: 'PERIFÉRICOS',
      nome: 'Teclado Keychron K2',
      descricao: 'Wireless 75%, Switches Brown, RGB e layout compacto.',
      preco: 'R$799,00',
      foto: foto1,
      specs: ['Layout 75%', 'Switches Gateron Brown', 'Conexão Bluetooth e Cabo', 'Bateria de 4000mAh'],
      ergonomia: 'Teclas com resposta tátil leve e altura reduzida, prevenindo a fadiga do pulso em digitações prolongadas.'
    },
    {
      id: 2,
      categoria: 'Monitores',
      badge: 'MONITORES',
      nome: "Monitor LG Ultrawide 34'",
      descricao: 'Resolução WQHD 144Hz ideal para código.',
      preco: 'R$2.699,00',
      foto: foto2,
      specs: ['Resolução WQHD (3440x1440)', 'Painel IPS 144Hz', 'Suporte com Ajuste de Altura'],
      ergonomia: 'Área de tela estendida que elimina a necessidade de um segundo monitor, reduzindo o movimento excessivo do pescoço.'
    },
    {
      id: 3,
      categoria: 'Ergonomia',
      badge: 'ERGONOMIA',
      nome: 'Cadeira Herman Miller',
      descricao: 'Suporte lombar avançado e estrutura ajustável de alta durabilidade.',
      preco: 'R$12.490,00',
      foto: foto3,
      specs: ['Ajuste Lombar PostureFit', 'Malha Mesh Respirável', 'Braços Reguláveis 3D'],
      ergonomia: 'Distribuição uniforme do peso corporal e alinhamento natural da coluna vertebral durante todo o expediente.'
    },
    {
      id: 4,
      categoria: 'Periféricos',
      badge: 'PERIFÉRICOS',
      nome: 'Mouse MX Master 3S',
      descricao: 'Ergonômico, rolagem MagSpeed ultra-rápida.',
      preco: 'R$649,00',
      foto: foto4,
      specs: ['Sensor 8000 DPI', 'Clique Silencioso', 'Scroller MagSpeed em Aço'],
      ergonomia: 'Design esculpido para encaixe perfeito da mão, mantendo o pulso em um ângulo neutro e natural.'
    },
    {
      id: 5,
      categoria: 'Monitores',
      badge: 'MONITORES',
      nome: "Monitor Dell 27' 4K",
      descricao: 'Painel IPS 4K, hub USB-C e rotação vertical.',
      preco: 'R$2.999,00',
      foto: foto5,
      specs: ['Resolução 4K UHD', 'Conectividade USB-C 65W', 'Rotação de 90° (Modo Pivot)'],
      ergonomia: 'Rotação vertical perfeita para leitura de linhas extensas de código mantendo a postura ereta.'
    },
    {
      id: 6,
      categoria: 'Ergonomia',
      badge: 'ERGONOMIA',
      nome: 'Suporte Articulado a Gás para Monitor',
      descricao: 'Ajuste fluido de altura, inclinação e rotação 360° para alinhamento postural.',
      preco: 'R$199,00',
      foto: 'https://images.tcdn.com.br/img/img_prod/1362985/suporte_para_monitor_articulado_a_gas_de_17_a_32_polegadas_pm40aq_213_9_dbc9d8e49b29d4c8c73e845aa2bf431e.jpeg',
      specs: ['Pistão a Gás com Amortecimento', 'Padrão VESA 75x75 e 100x100', 'Organizador de Cabos Integrado'],
      ergonomia: 'Posiciona a tela na altura exata da linha dos olhos, eliminando a tensão na cervical e nos ombros.'
    },
    {
      id: 7,
      categoria: 'Hardware',
      badge: 'HARDWARE',
      nome: 'Placa de Vídeo RTX 5090 32GB',
      descricao: 'O topo absoluto em desempenho gráfico para IA avançada e renderização 3D extrema.',
      preco: 'R$19.999,00',
      foto: 'https://th.bing.com/th/id/OPHS.XHAGSQ6f1cbeeA474C474?w=474&h=474&qlt=100&o=5&dpr=2&pid=21.1',
      specs: ['32GB GDDR7', 'Arquitetura Blackwell', 'Barramento 512-bit', 'Suporte a DLSS 4'],
      ergonomia: 'Aceleração gráfica de última geração que elimina gargalos, otimizando o fluxo de trabalho e o tempo de resposta.'
    },
    {
      id: 8,
      categoria: 'Hardware',
      badge: 'HARDWARE',
      nome: 'Processador AMD Ryzen 9 9950X',
      descricao: 'O processador mais potente do mercado para compilação pesada e multitarefa.',
      preco: 'R$4.599,00',
      foto: 'https://m.media-amazon.com/images/I/71hZfMZNZuL._AC_SY300_SX300_QL70_ML2_.jpg',
      specs: ['16 Cores e 32 Threads', 'Clock Boost até 5.7GHz', '80MB de Cache Total', 'Socket AM5'],
      ergonomia: 'Fluidez em multitarefa extrema que impede travamentos do sistema, reduzindo a fadiga durante a rotina dev.'
    }
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtosFiltrados = todosProdutos.filter((produto) => {
    const bateuCategoria =
      categoriaAtiva === 'Todos' || produto.categoria === categoriaAtiva;

    const bateuBusca = produto.nome
      .toLowerCase()
      .includes(termoBusca.toLowerCase());

    return bateuCategoria && bateuBusca;
  });

  if (produtoSelecionado !== null) {
    return (
      <DetalhesProduto 
        produto={produtoSelecionado} 
        aoVoltar={() => setProdutoSelecionado(null)} 
      />
    );
  }

  return (
    <div className="container">
      <header className="header-box">
        <span className="subtitle">Saúde & Proatividade</span>
        <h1 className="title">Todos os Equipamentos</h1>
        <p className="description">
          Aprenda a configurar seu ambiente de trabalho para evitar lesões e maximizar o rendimento.
        </p>
      </header>

      <div className="search-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Busca por equipamento..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-buttons">
        <button
          className={`btn-filter ${categoriaAtiva === 'Todos' ? 'active' : ''}`}
          onClick={() => setCategoriaAtiva('Todos')}
        >
          Todos
        </button>
        <button
          className={`btn-filter ${categoriaAtiva === 'Periféricos' ? 'active' : ''}`}
          onClick={() => setCategoriaAtiva('Periféricos')}
        >
          Periféricos
        </button>
        <button
          className={`btn-filter ${categoriaAtiva === 'Monitores' ? 'active' : ''}`}
          onClick={() => setCategoriaAtiva('Monitores')}
        >
          Monitores
        </button>
        <button
          className={`btn-filter ${categoriaAtiva === 'Ergonomia' ? 'active' : ''}`}
          onClick={() => setCategoriaAtiva('Ergonomia')}
        >
          Ergonomia
        </button>
        <button
          className={`btn-filter ${categoriaAtiva === 'Hardware' ? 'active' : ''}`}
          onClick={() => setCategoriaAtiva('Hardware')}
        >
          Hardware
        </button>
      </div>

      <main className="products-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <div className="card" key={produto.id}>
              <div className="card-image-box">
                {produto.foto ? (
                  <img src={produto.foto} alt={produto.nome} className="card-image" />
                ) : (
                  <span className="placeholder-text">[FOTO DO PRODUTO]</span>
                )}
              </div>

              <div className="card-category-badge">{produto.badge}</div>
              <h2 className="card-title">{produto.nome}</h2>
              <p className="card-description">{produto.descricao}</p>

              <div className="card-footer">
                <span className="card-price">{produto.preco}</span>
                <button 
                  className="btn-details"
                  onClick={() => setProdutoSelecionado(produto)}
                >
                  Ver detalhes
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#a0a6b2' }}>
            Nenhum produto encontrado.
          </p>
        )}
      </main>
    </div>
  );
}

function App() {
  return <Produtos />;
}

export default App;
