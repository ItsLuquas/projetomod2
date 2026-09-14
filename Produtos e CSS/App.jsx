import React, { useState } from 'react';
import './App.css';
import foto1 from './assets/Tk2.jpg';
import foto2 from './assets/LG34.jpg';
import foto3 from './assets/Miller.webp';
import foto4 from './assets/MX3S.jpg';
import foto5 from './assets/Dell27.jpg';
import foto6 from './assets/X3D.jpg';

function Produtos() {
  const todosProdutos = [
    {
      id: 1,
      categoria: 'Periféricos',
      badge: 'PÉRIFERICOS',
      nome: 'Teclado Keychron 2',
      descricao: 'Wireless 75%, Switches Brown, RGB e layout compacto.',
      preco: 'R$650,00',
      foto: foto1
    },
    {
      id: 2,
      categoria: 'Monitores',
      badge: 'Monitores',
      nome: "Monitor LG Ultrawide 34'",
      descricao: 'Resolução WQHD 144Hz ideal para código',
      preco: 'R$2,499,00',
      foto: foto2
    },
    {
      id: 3,
      categoria: 'Ergonomia',
      badge: 'Ergonomia',
      nome: 'Cadeira Herman Miller',
      descricao: 'Wireless 75%, Switches Brown, RGB e layout compacto.',
      preco: 'R$4,200,00',
      foto: foto3
    },
    {
      id: 4,
      categoria: 'Periféricos',
      badge: 'PÉRIFERICOS',
      nome: 'Mouse MX Master 3S',
      descricao: 'Ergonômico, rolagem MagSpeed ultra-rápido',
      preco: 'R$550,00',
      foto: foto4
    },
    {
      id: 5,
      categoria: 'Monitores',
      badge: 'Monitores',
      nome: "Monitor Dell 27' 4k",
      descricao: 'Painel IPS 4K, hub USB-C e rotação vertical',
      preco: 'R$2,899,00',
      foto: foto5
    },
    {
      id: 6,
      categoria: 'Hardware',
      badge: 'Hardware',
      nome: 'Ryzen 7 7800X3D',
      descricao: 'Alta performance para compilação e jogos.',
      preco: 'R$2,699,00',
      foto: foto6
    }
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');

  const produtosFiltrados = todosProdutos.filter((produto) => {
    const bateuCategoria =
      categoriaAtiva === 'Todos' || produto.categoria === categoriaAtiva;

    const bateuBusca = produto.nome
      .toLowerCase()
      .includes(termoBusca.toLowerCase());

    return bateuCategoria && bateuBusca;
  });

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
                <button className="btn-details">Ver detalhes</button>
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
  return(
    <Produtos/>
  )
}

export default App;