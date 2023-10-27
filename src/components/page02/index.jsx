import { Page02Container } from "./styles"
import { Atom } from "phosphor-react"

export function Page02() {
  return (
    <Page02Container>
      <section id="models">
        <h1>Modelos</h1>
        <h3><strong>A presença</strong> online de um negócio é substancialmente aprimorada por meio de um site, que fornece uma base sólida para o sucesso de sua empreitada na web.</h3>

        <div className="boxes">
          <div className="box">
            <Atom size={32} />
            <h4>Página Única</h4>
            <p>R$980,00</p>
            <p>Um site com página única, ideal para promover um produto ou eventos.</p>
          </div>

          <div className="box">
            <Atom size={32} />
            <h4>Site de négocios</h4>
            <p>R$1360,00</p>
            <p>Um site com 3 páginas, ideal para promover sua empresa e produtos.</p>
            <p>Página extra + R$299,90</p>
            <p>Suporte + 199,90/mês</p>
          </div>
          
          <div className="box">
            <Atom size={32} />
            <h4>Site NuvemShop</h4>
            <p>R$2830,00</p>
            <p>Um site criado por meio da plataforma NuvemShop, ideal para vendas.</p>
            <p>+ 3 produtos adicionados.</p>
            <p>+ Mentoria ensinando utilizar a plataforma.</p>
            <p>Suporte + 199,90/mês</p>
          </div>
        </div>

      </section>
    </Page02Container>
  )
}
