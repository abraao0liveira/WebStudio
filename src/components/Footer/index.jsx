import { FooterContainer } from "./styles"
import { Intersect, InstagramLogo, WhatsappLogo, CaretCircleUp } from "@phosphor-icons/react";

export function Footer() {
  return (
    <FooterContainer>
      <div className="box">
        
        <div className="global">
          <div className="logo">
            <Intersect size={38} />
            <h1><strong>Web</strong>Studio</h1> 
          </div>
  
          <div className="paragrafo">
            <p>O melhor lugar para desenvolver o site da sua empresa!</p>
          </div>

          <div className="socialMedia">
            <h2>Siga-nos</h2>
            <a href="/"><InstagramLogo size={32} /></a>
            <a href="/"><WhatsappLogo size={32} /></a>
          </div>

          <div>
            <a href="#"><CaretCircleUp size={32} /></a>
          </div>
        </div>

        <div className="form">
          <h1>Fale Conosco</h1>
          <form action="https://formsubmit.co/abraaooliveira.br@gmail.com" method="POST" className="form">
            <input type="text" name="name" placeholder="Nome" id="name" required/>

            <input type="email" name="email" placeholder="Email" id="email" required/>

            <textarea name="message" placeholder="Mensagem" id="message" required></textarea>

            <input type="hidden" name="_captcha" value="false"/>
            <button type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </FooterContainer>
  )
}
