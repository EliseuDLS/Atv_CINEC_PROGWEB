import './App.css'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <nav className="navbar navbar-expand-lg">
      <img className="logo" src="/src/assets/CINEC Logo.png"/>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#informações">Informações</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>

      <div id="home">
        <section>
            <h1 className="text-white">TCC - CINEC: Análise de Filmes</h1>
            <p>
            O ramo da ficção é muito amplo, ainda mais nos dias de hoje, pois temos vários filmes e jogos que, às vezes, se tornam complicados de acreditar em sua narrativa ou chegar à conclusão de que aquilo é possível ou não. O método proposto neste TCC se dá por meio de uma análise de uma quantia de 6 filmes de ficção científica, sendo estes os melhores avaliados e os mais icônicos da indústria cinematográfica, e dentro de um site informativo e dinâmico, esclarecer determinadas cenas, julgando-as condizentes com a realidade ou totalmente ficcionais, acolhendo como público-alvo, estudantes, sobretudo do ensino médio.
            </p>
        </section>
      </div>

      <div id="informações">
        <section>
          <h2 className="text-white">Cinema e Ciência</h2>
          <p>A vinculação entre cinema e ciência é antiga. Antes mesmo de os irmãos Lumière encantarem o público parisiense, em 1895, com a projeção de cenas impressionantes que inauguraram o cinema como uma fabulosa forma de entretenimento, as técnicas de criar imagens em movimento com sequência de fotografias serviram a propósitos científicos. Duas décadas antes, o astrônomo francês Jules Janssen já usava um 'revólver fotográfico', para reproduzir o registro da trajetória do planeta Vênus através do disco solar. Inspirado em sua experiência, o fotógrafo inglês Edward Muybridge montou uma incrível sequência de fotografias da corrida de um cavalo, reproduzindo seu movimento em detalhes. Isso foi logo percebido como um grande recurso para o estudo da fisiologia do movimento. A câmara, no formato de arma, foi aprimorada pelo fisiólogo francês Etienne-Jules Marey e permitia, sem dificuldade, mirar e acompanhar movimentos como, por exemplo, o de uma ave voando. Étude de la locomotion animale par la chrono-photographie de Marey foi publicado em 1887  a partir das análises propiciadas por esse novo instrumento de pesquisa. Cientistas de outras áreas não tardaram a perceber as vantagens desse recurso e utilizá-lo.
          </p>
          <p>Desde o início da difusão do 'cinema como diversão', filmes foram sendo utilizados também como material didático, particularmente no ensino de ciências. Alguns países europeus testemunharam, no início da década de 1910, um grande florescimento de documentários e filmes escolares, focando sobretudo a zoologia e a botânica. Antes do início da Primeira Guerra Mundial, em 1914, centenas de documentários didáticos já haviam sido produzidos na França. Sequências de imagens sobre a reprodução animal, sobre ciclos de vida das plantas, explosões vulcânicas ou sobre eclipses solares ajudavam a tornar currículos mais interessantes e explicações mais compreensíveis. 
          </p>
        </section>
      </div>

      <div id='contato'>
        <footer>
          <h2>Desenvolvedores</h2>
          <div className="person-card">
            <div className="person">
              <p>Luiz Felipe</p>
              <img src="/src/assets/Luiz.jpg"/>
            </div>
            <div className="social-icons">
              <a href="https://www.instagram.com/luiz._.hope/">
                <i className="fa fa-instagram"> Luiz._.Hope</i>
              </a>
              <a href="https://github.com/H0Pe2006">
                <i className="fa fa-github"> H0Pe2006</i>
              </a>
            </div>
          </div>

          <div className="person-card">
            <div className="person">
              <p>Eliseu da Luz</p>
              <img src="/src/assets/Eliseu.png"/>
            </div>
            <div className="social-icons">
              <a href="https://www.instagram.com/eliseu.dls/">
                <i className="fa fa-instagram"> eliseu.dls</i>
              </a>
              <a href="https://github.com/EliseuDLS">
                <i className="fa fa-github">EliseuDLS</i>
              </a>
            </div>
          </div>
        </footer>
      </div>
      
    </header>
  </div>
  )
};

export default App;