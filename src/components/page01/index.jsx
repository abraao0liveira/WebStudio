import { Page01Container } from "./styles"
import video from "../../assets/video.gif"

export function Page01() {
  return (
    <Page01Container>
      <div className="page01">
        <h1><strong>Web</strong>Studio</h1>
        <h2>O melhor lugar para desenvolver o site da sua empresa!</h2>
      </div>
      
      <section>
      <div className="image">
        <img className="movie" src={video}alt="video" />
        </div>
        <div id="banner" >
          <div className="BannerInspiracao">
            <h1>Presença Online!</h1>
            <p>Um site que permite uma maior presença Online para seus negócios.</p>
          </div>
          <div className="BannerInspiracao">
            <h1>Alcance Global!</h1>
            <p>Com estratégias de Marketing digital o seu site atrairá pessoas de qualquer parte do mundo.</p>
          </div>
          <div className="BannerInspiracao">
            <h1>Profissionalismo!</h1>
            <p>Um site bem projetado e funcional transmitindo uma imagem de credibilidade e profissionalismo para os clientes.</p>
          </div>
        </div>
      </section>
    </Page01Container>
  )
}
