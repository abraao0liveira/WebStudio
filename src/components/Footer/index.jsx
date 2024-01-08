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

          <div className="socialMedia">
            <h2>Siga-nos</h2>
            <a href="/"><InstagramLogo size={30} /></a>
            <a href="http://wa.me//5585992424072?text= Olá! Quero fazer uma cotação." target="_blank"><WhatsappLogo size={30} /></a>
          </div>
          
          <div className="copy">
            <p>&copy; 2023 WebStudio. Todos os direitos reservados.</p>
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
        
        <div className="copyGhost">
            <p>&copy; 2023 WebStudio. Todos os direitos reservados.</p>
        </div>
        <div className="arrow">
          <a href="#"><CaretCircleUp size={38} /></a>
        </div>
      </div>
      
    </FooterContainer>
  )
}
