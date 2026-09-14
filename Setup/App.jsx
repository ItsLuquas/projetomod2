import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logointegrador.png";

function Header() {
  return (
    <div className="topo">
      <img src={logo} alt="" width="400px" height="120px" />

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/equipamentos"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Equipamentos
        </NavLink>

        <NavLink
          to="/guia"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Guias & ergonomia
        </NavLink>

        <NavLink
          to="/setup"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Monte seu setup
        </NavLink>
      </nav>
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

function Equipamentos() {
  return <div>Equipamentos</div>;
}

function Guia() {
  return <div>Guia</div>;
}

function Setup() {
  const componentes = {
    teclado: [
      {
        id: 1,
        nome: "Keychron K2 Wireless 75%",
        preco: 650,
      },
      {
        id: 2,
        nome: "Logitech G915",
        preco: 900,
      },
    ],

    monitor: [
      {
        id: 1,
        nome: 'LG Ultrawide 34" WQHD',
        preco: 2499,
      },
      {
        id: 2,
        nome: "Samsung Odyssey",
        preco: 3200,
      },
    ],

    cadeira: [
      {
        id: 1,
        nome: "Herman Miller Aeron",
        preco: 4200,
      },
      {
        id: 2,
        nome: "Flexform Uni",
        preco: 1800,
      },
    ],

    mouse: [
      {
        id: 1,
        nome: "Logitech MX Master 3S",
        preco: 550,
      },
      {
        id: 2,
        nome: "Razer Basilisk",
        preco: 400,
      },
    ],
  };

  const [carrinho, setCarrinho] = useState({
    teclado: null,
    monitor: null,
    cadeira: null,
    mouse: null,
  });

  function selecionarComponente(tipo, id) {
    const componente = componentes[tipo].find((item) => item.id === Number(id));

    setCarrinho((estadoAnterior) => ({
      ...estadoAnterior,
      [tipo]: componente,
    }));
  }

  const total = Object.values(carrinho)
    .filter(Boolean)
    .reduce((total, item) => total + item.preco, 0);

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div>
      <div className="headersetup">
        <h3>SIMULADOR INTERATIVO</h3>
        <h1>Monte o seu setup</h1>

        <p>
          Escolha os componentes ergonômicos e periféricos para calcular o valor
          estimado da sua estação.
        </p>
      </div>
      <div className="tudosetup">
        <div className="direitasetup">
          <label>1. Teclado Mecânico</label>

          <select
            value={carrinho.teclado?.id || ""}
            onChange={(e) => selecionarComponente("teclado", e.target.value)}
          >
            <option value="">Selecione</option>

            {componentes.teclado.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome} - {formatarPreco(item.preco)}
              </option>
            ))}
          </select>
          <br />

          <label>2. Monitor Principal</label>

          <select
            value={carrinho.monitor?.id || ""}
            onChange={(e) => selecionarComponente("monitor", e.target.value)}
          >
            <option value="">Selecione</option>

            {componentes.monitor.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome} - {formatarPreco(item.preco)}
              </option>
            ))}
          </select>
          <br />
          <label>3. Cadeira Ergonômica</label>

          <select
            value={carrinho.cadeira?.id || ""}
            onChange={(e) => selecionarComponente("cadeira", e.target.value)}
          >
            <option value="">Selecione</option>

            {componentes.cadeira.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome} - {formatarPreco(item.preco)}
              </option>
            ))}
          </select>
          <br />
          <label>4. Mouse</label>

          <select
            value={carrinho.mouse?.id || ""}
            onChange={(e) => selecionarComponente("mouse", e.target.value)}
          >
            <option value="">Selecione</option>

            {componentes.mouse.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome} - {formatarPreco(item.preco)}
              </option>
            ))}
          </select>
        </div>

        <div className="esquerdasetup">
          <h2>Resumo da sua compra</h2>

          {Object.entries(carrinho).map(([tipo, item]) => {
            if (!item) return null;

            return (
              <div key={tipo}>
                <span>{item.nome}</span>

                <strong>{formatarPreco(item.preco)}</strong>
              </div>
            );
          })}

          <h3>Investimento: {formatarPreco(total)}</h3>
        </div>
      </div>

      <footer className="footer-container">
        <span>DevDock © 2026 — Projeto Integrador React</span>
        <span className="footer-destaque">
          Desenvolvido para Devs & Gamers{" "}
        </span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipamentos" element={<Equipamentos />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
