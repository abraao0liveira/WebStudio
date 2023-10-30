import { Page02Container } from "./styles"
import { Check } from "@phosphor-icons/react";

export function Page02() {
  return (
    <Page02Container>
      <section id="models">
        <h1>Escolha o Modelo de Site Ideal</h1>
        <h3>A <strong>presença digital</strong> de uma empresa é significativamente fortalecida por meio de um website, que estabelece uma base sólida para o êxito de sua presença online.</h3>

        <div className="boxes">
          <div className="box">
            <h2>Página Única</h2>
            <h4>R$ 980,00<p>&nbsp;/site</p></h4>
            <ul>
              <li> <Check size={15} /> Site página única, </li>
              <li><Check size={15} /> Ideal para promover um produto ou eventos</li>
            </ul>
            <a href="" className="btn"><strong>Contratar</strong></a>
          </div>

          <div className="box">
            <h2>Site de Négocios</h2>
            <h4>R$ 1.360,00<p>&nbsp;/site</p></h4>
            <ul>
              <li><Check size={15} /> Site com 3 páginas</li>
              <li><Check size={15} /> Ideal para promover sua empresa e produtos</li>
              <li><Check size={15} /> Página extra <strong>+ R$ 299,90</strong></li>
              <li><Check size={15} /> Suporte <strong>+ R$ 199,90 /mês</strong></li>
            </ul>
            <a href="" className="btn"><strong>Contratar</strong></a>
          </div>
          
          <div className="box">
            <h2>Site NuvemShop</h2>
            <h4>R$ 2.830,00<p>&nbsp;/site</p></h4>           
            <ul>
              <li><Check size={15} /> Site de vendas criado por meio da plataforma NuvemShop</li>
              <li><Check size={15} /> + 3 produtos adicionados</li>
              <li><Check size={15} /> + Mentoria ensinando utilizar a plataforma</li>
              <li><Check size={15} /> Suporte <strong>+ R$ 199,90/mês</strong></li>
            </ul>
            <a href="" className="btn"><strong>Contratar</strong></a>
          </div>
        </div>

      </section>
    </Page02Container>
  )
}
