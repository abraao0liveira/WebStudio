import { Page02Container } from "./styles"

export function Page02() {
  return (
    <Page02Container>
      <section id="models">
        <h1>Modelos</h1>
        <h3><strong>A presença</strong> digital de uma empresa é significativamente fortalecida por meio de um website, que estabelece uma base sólida para o êxito de sua presença online.</h3>

        <div className="boxes">
          <div className="box">
            <h2>Página Única</h2>
            <h4>R$980,00</h4>
            <p>Um site com página única, ideal para promover um produto ou eventos.</p>
          </div>

          <div className="box">
            <h2>Site de Négocios</h2>
            <h4>R$1360,00</h4>
            <p>Um site com 3 páginas, ideal para promover sua empresa e produtos.</p>
            <p>Página extra <strong>+ R$299,90</strong></p>
            <p>Suporte <strong>+ 199,90/mês</strong></p>
          </div>
          
          <div className="box">
            <h2>Site NuvemShop</h2>
            <h4>R$2830,00</h4>
            <p>Um site criado por meio da plataforma NuvemShop, ideal para vendas.</p>
            <p>+ 3 produtos adicionados.</p>
            <p>+ Mentoria ensinando utilizar a plataforma.</p>
            <p>Suporte <strong>+ 199,90/mês</strong></p>
          </div>
        </div>

      </section>
    </Page02Container>
  )
}
