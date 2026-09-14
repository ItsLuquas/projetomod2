import heroImg from './assets/hero.png'
import './App.css'
import banner from './assets/banner.jpg'

function Header() {
  return (
    <div className="topo">
      <h1 className="dev">
        DevDock<span className="barras">///</span>
      </h1>
      <nav>
        <a href="" className="ciano">Home</a>
        <a href="" className="branco">Equipamentos</a>
        <a href="" className="branco">Guias & ergonomia</a>
        <a href="" className="branco">Monte seu setup</a>
      </nav>
    </div>
  )
}

function Main() {
  return (
    <>
      <div className="card">
        <div className="card-conteudo">
          <h2 className="ciano">ESTAÇÃO DE TRABALHO & SETUP</h2>
          <h1 className="primario">Hub de Setups, Periféricos & Profundidade dev</h1>
          <p className="secundario">
            Descubra os melhores equipamentos, periféricos ergonômicos e recomendações de 
            hardware para programadores e gamers elevarem seu desempenho.
          </p>
          
          <div className="botoes-container">
            <button className="btn-ciano">Explorar equipamentos</button>
            <button className="btn">Guia de ergonomia</button>
          </div>
        </div>

        <div className="card-imagem">
          <img src={banner} alt="imagem banner" />
        </div>
      </div>

      <section className="secao-categorias">
        <h1 className="titulo-secao">Categorias em destaque</h1>

        <div className="grid-categorias">
          <div className="card-categoria">
            <div className="linha-detalhe"></div>
            <h3>Periféricos</h3>
            <span>Teclados & mouses</span>
          </div>

          <div className="card-categoria">
            <div className="linha-detalhe"></div>
            <h3>Monitores</h3>
            <span>Ultrawide & Suportes</span>
          </div>

          <div className="card-categoria">
            <div className="linha-detalhe"></div>
            <h3>Ergonomia</h3>
            <span>Cadeiras & Mesas</span>
          </div>

          <div className="card-categoria">
            <div className="linha-detalhe"></div>
            <h3>Hardware</h3>
            <span>GPUs & Processadores</span>
          </div>
        </div>

      
        <h1 className="titulo-secao secao-margin">RECOMENDAÇÕES DA SEMANA</h1>
        
        <div className="grid-recomendacoes">
        
          <div className="caixa">
            <div className="foto">
              <img src="" alt="" />
            </div>
            <div className="card-corpo">
              <span className="badge-categoria">PERIFÉRICOS</span>
              <h2 className="titulo-produto">Teclado Keychron 2</h2>
              <p className="secundario-card">Wireless 75%, Switches Brown, RGB e layout compacto.</p>
              <div className="card-rodape">
                <h2 className="valor">R$ 650,00</h2>
                <button className="btn-ciano-sm">Ver Detalhes</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="caixa">
            <div className="foto">
              <img src="" alt="" />
            </div>
            <div className="card-corpo">
              <span className="badge-categoria">MONITORES</span>
              <h2 className="titulo-produto">Monitor LG Ultrawide 34'</h2>
              <p className="secundario-card">Resolução WQHD 144Hz, ideal para tarefas e código.</p>
              <div className="card-rodape">
                <h2 className="valor">R$ 2.499,00</h2>
                <button className="btn-ciano-sm">Ver Detalhes</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="caixa">
            <div className="foto">
              <img src="" alt="" />
            </div>
            <div className="card-corpo">
              <span className="badge-categoria">ERGONOMIA</span>
              <h2 className="titulo-produto">Cadeira Herman Miller</h2>
              <p className="secundario-card">Ajuste lombar avançado e tela respirável para longas sessões.</p>
              <div className="card-rodape">
                <h2 className="valor">R$ 4.200,00</h2>
                <button className="btn-ciano-sm">Ver Detalhes</button>
              </div>
            </div>
          </div>
        </div>

        
        <footer className="footer-container">
          <span>DevDock © 2026 — Projeto Integrador React</span>
          <span className="footer-destaque">Desenvolvido para Devs & Gamers </span>
        </footer>
      </section>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App