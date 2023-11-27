import { Page03Container } from "./styles"
import igmLogo from "../../assets/igmLogo.png"
import engemecLogo from "../../assets/engemecLogo.png"

export function Page03() {
  return (
    <Page03Container>
      <section id="projects">
        <h1>Projetos Desenvolvidos</h1>
        <div className="webSites">
          <div className="webSite">
            <a href="https://igrejaemmaracanau.com.br/" rel="noreferrer" target="_blank">
              <img src={igmLogo} alt="logo-IGM" />
            </a>
            <h2>Igreja em Maracanaú</h2>
          </div>
          <div className="webSite">
            <a href="https://bemquererdecora.com.br/" rel="noreferrer" target="_blank">
              <img src={igmLogo} alt="logo-BemQuerer" />
            </a>
            <h2>BemQuerer Decora</h2>
          </div>
          <div className="webSite">
            <a href="https://engemec-construcoes.vercel.app/" rel="noreferrer" target="_blank">
              <img src={engemecLogo} alt="logo-Engemec" />
            </a>
            <h2>Engemec Construções</h2>
          </div>
        </div>
      </section>
    </Page03Container>
  )
}
