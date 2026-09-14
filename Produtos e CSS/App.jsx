import React, { useState } from 'react';
import './App.css';
import foto1 from './assets/Tk2.jpg';
import foto2 from './assets/LG34.jpg';
import foto3 from './assets/Miller.webp';
import foto4 from './assets/MX3S.jpg';
import foto5 from './assets/Dell27.jpg';
import foto6 from './assets/X3D.jpg';

// COMPONENTE DA TELA DE DETALHES
function DetalhesProduto({ produto, aoVoltar }) {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '40px 20px' }}>
      <button 
        className="btn-filter" 
        onClick={aoVoltar} 
        style={{ marginBottom: '24px', cursor: 'pointer' }}
      >
        ← Voltar para a lista
      </button>

      <div className="card" style={{ padding: '24px' }}>
        <div className="card-image-box" style={{ height: '300px', marginBottom: '20px' }}>
          {produto.foto ? (
            <img src={produto.foto} alt={produto.nome} className="card-image" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          ) : (
            <span className="placeholder-text">[FOTO DO PRODUTO]</span>
          )}
        </div>

        <div className="card-category-badge">{produto.badge}</div>
        <h1 className="title" style={{ fontSize: '2rem', margin: '10px 0' }}>{produto.nome}</h1>
        <p className="card-price" style={{ fontSize: '1.8rem', color: '#00f2fe', marginBottom: '16px' }}>{produto.preco}</p>
        <p className="card-description" style={{ fontSize: '1.1rem', marginBottom: '24px' }}>{produto.descricao}</p>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ color: '#fff', marginBottom: '12px' }}>Especificações Técnicas</h3>
          <ul style={{ paddingLeft: '20px', color: '#a0a6b2' }}>
            {produto.specs?.map((spec, index) => (
              <li key={index} style={{ marginBottom: '6px' }}>{spec}</li>
            ))}
          </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(0, 242, 254, 0.05)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #00f2fe' }}>
          <h3 style={{ color: '#00f2fe', marginBottom: '8px' }}>Foco em Saúde & Ergonomia</h3>
          <p style={{ color: '#e2e8f0', margin: 0 }}>{produto.ergonomia}</p>
        </div>
      </div>
    </div>
  );
}

function Produtos() {
  const todosProdutos = [
    {
      id: 1,
      categoria: 'Periféricos',
      badge: 'PÉRIFERICOS',
      nome: 'Teclado Keychron 2',
      descricao: 'Wireless 75%, Switches Brown, RGB e layout compacto.',
      preco: 'R$650,00',
      foto: foto1,
      specs: ['Layout 75%', 'Switches Gateron Brown', 'Conexão Bluetooth e Cabo', 'Bateria de 4000mAh'],
      ergonomia: 'Teclas com resposta tátil leve e altura reduzida, prevenindo a fadiga do pulso em digitações prolongadas.'
    },
    {
      id: 2,
      categoria: 'Monitores',
      badge: 'Monitores',
      nome: "Monitor LG Ultrawide 34'",
      descricao: 'Resolução WQHD 144Hz ideal para código',
      preco: 'R$2,499,00',
      foto: foto2,
      specs: ['Resolução WQHD (3440x1440)', 'Painel IPS 144Hz', 'Suporte com Ajuste de Altura'],
      ergonomia: 'Área de tela estendida que elimina a necessidade de um segundo monitor, reduzindo o movimento excessivo do pescoço.'
    },
    {
      id: 3,
      categoria: 'Ergonomia',
      badge: 'Ergonomia',
      nome: 'Cadeira Herman Miller',
      descricao: 'Suporte lombar avançado e estrutura ajustável de alta durabilidade.',
      preco: 'R$4,200,00',
      foto: foto3,
      specs: ['Ajuste Lombar PostureFit', 'Malha Mesh Respirável', 'Braços Reguláveis 3D'],
      ergonomia: 'Distribuição uniforme do peso corporal e alinhamento natural da coluna vertebral durante todo o expediente.'
    },
    {
      id: 4,
      categoria: 'Periféricos',
      badge: 'PÉRIFERICOS',
      nome: 'Mouse MX Master 3S',
      descricao: 'Ergonômico, rolagem MagSpeed ultra-rápido',
      preco: 'R$550,00',
      foto: foto4,
      specs: ['Sensor 8000 DPI', 'Clique Silencioso', 'Scroller MagSpeed em Aço'],
      ergonomia: 'Design esculpido para encaixe perfeito da mão, mantendo o pulso em um ângulo neutro e natural.'
    },
    {
      id: 5,
      categoria: 'Monitores',
      badge: 'Monitores',
      nome: "Monitor Dell 27' 4k",
      descricao: 'Painel IPS 4K, hub USB-C e rotação vertical',
      preco: 'R$2,899,00',
      foto: foto5,
      specs: ['Resolução 4K UHD', 'Conectividade USB-C 65W', 'Rotação de 90° (Modo Pivot)'],
      ergonomia: 'Rotação vertical perfeita para leitura de linhas extensas de código mantendo a postura ereta.'
    },
    {
      id: 6,
      categoria: 'Hardware',
      badge: 'Hardware',
      nome: 'Ryzen 7 7800X3D',
      descricao: 'Alta performance para compilação e jogos.',
      preco: 'R$2,699,00',
      foto: foto6,
      specs: ['8 Cores e 16 Threads', 'Tecnologia 3D V-Cache', 'Socket AM5'],
      ergonomia: 'Processamento ultra-rápido que reduz o tempo de compilação de projetos, minimizando o estresse e a espera na rotina dev.'
    }
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');
  
  // ESTADO DO PRODUTO SELECIONADO
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtosFiltrados = todosProdutos.filter((produto) => {
    const bateuCategoria =
      categoriaAtiva === 'Todos' || produto.categoria === categoriaAtiva;

    const bateuBusca = produto.nome
      .toLowerCase()
      .includes(termoBusca.toLowerCase());

    return bateuCategoria && bateuBusca;
  });

  // TELA CONDICIONAL: SE TIVER UM PRODUTO SELECIONADO, MOSTRA OS DETALHES DELE
  if (produtoSelecionado !== null) {
    return (
      <DetalhesProduto 
        produto={produtoSelecionado} 
        aoVoltar={() => setProdutoSelecionado(null)} 
      />
    );
  }

  // SENÃO, MOSTRA A TELA NORMAL COM O GRID
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
                
                {/* BOTÃO COM CLIQUE ATIVADO */}
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
  return (
    <Produtos/>
  );
}

export default App;
