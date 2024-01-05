import { Page02Container } from "./styles"
import { Check, Plus } from "@phosphor-icons/react";

export function Page02() {
  return (
    <Page02Container>
      <section id="models">
        <h1>Escolha o Modelo de Site Ideal</h1>
        <hr />
        <h3>A <strong>presença digital</strong> de uma empresa é significativamente fortalecida por meio de um website, que estabelece uma base sólida para o êxito de sua presença online.</h3>

        <div className="boxes">
          <div className="box">
            <h2>Página Única</h2>
            <h4>R$ 980,00<p>&nbsp;/site</p></h4>
            <ul>
              <li> <Check weight="bold" size={15} /> Site página única.</li>
              <li><Check weight="bold" size={15} /> Ideal para promover um produto ou eventos.</li>
            </ul>
          </div>

          <div className="box">
            <h2>Site de Négocios</h2>
            <h4>R$ 1.360,00<p>&nbsp;/site</p></h4>
            <ul>
              <li><Check weight="bold" size={15} /> Site com 3 páginas.</li>
              <li><Check weight="bold" size={15} /> Ideal para promover sua empresa e produtos.</li>
              <li><Plus weight="bold" size={15} /> Página extra <strong> por R$ 299,90.</strong></li>
              <li><Plus weight="bold" size={15} /> Suporte <strong> por R$ 199,90 /mês.</strong></li>
            </ul>
          </div>
          
          <div className="box">
            <h2>Site NuvemShop</h2>
            <h4>R$ 2.830,00<p>&nbsp;/site</p></h4>           
            <ul>
              <li><Check weight="bold" size={15} /> Site de vendas criado por meio da plataforma NuvemShop.</li>
              <li><Check weight="bold" size={15} /> 3 produtos adicionados.</li>
              <li><Check weight="bold" size={15} /> Mentoria: primeiros passos na plataforma.</li>
              <li><Plus weight="bold" size={15} /> Suporte <strong> por R$ 199,90/mês.</strong></li>
            </ul>
          </div>
        </div>

      </section>
    </Page02Container>
  )
}
