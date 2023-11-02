import { FooterContainer } from "./styles"
import { Intersect, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <FooterContainer>
      <div className="box">
        <div className="logo">
          <Intersect size={38} />
          <h1><strong>Web</strong>Studio</h1>
        </div>
        <p>O melhor lugar para desenvolver o site da sua empresa!</p>
      </div>

      <div className="socialMedia">
        <div className="instagram">
          <a href="/"><InstagramLogo size={32} />Instagram</a>
        </div>
        <div className="whatsApp">
          <a href="/"><WhatsappLogo size={32} />WhatsApp</a>
        </div>
      </div>
    </FooterContainer>
  )
}
