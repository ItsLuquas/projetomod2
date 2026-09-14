import { useState } from "react";
import "./Setup.css";
import logo from "./assets/logointegrador.png";



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
        nome: "Dell 27 Polegadas",
        preco: 1500,
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
    Hardware: [
      {
        id: 1,
        nome: "Ryzen 9 9950X",
        preco: 4600,
      },
      {
        id: 2,
        nome: "RTX 5090 32GB",
        preco: 2000,
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
          <br />
          <label>5. Hardware</label>

          <select
            value={carrinho.Hardware?.id || ""}
            onChange={(e) => selecionarComponente("Hardware", e.target.value)}
          >
            <option value="">Selecione</option>

            {componentes.Hardware.map((item) => (
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



export default Setup;
