import { Page03Container } from "./styles"

export function Page03() {
  return (
    <Page03Container>
      <section id="contacts">
        <div className="contact">
          <h1>Entre em contato</h1>
          <p>Nosso sucesso começa com o seu contato! Se você procura serviços de criação de sites excepcionais, estamos prontos para ouvir suas ideias e necessidades. Entre em contato conosco hoje e vamos transformar sua visão em realidade. Sua presença online começa aqui!</p>
        </div>

        <div className="form">
          <h1>Fale Conosco</h1>
          <form action="https://formsubmit.co/abraaooliveira.br@gmail.com" method="POST" className="form">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder="Nome" id="name" required/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" id="email" required/>

            <label htmlFor="message">Mensagem</label>
            <textarea name="message" placeholder="Mensagem" id="message" required></textarea>

            <input type="hidden" name="_captcha" value="false"/>
            <button type="submit">
              Enviar
            </button>
          </form>
        </div>

      </section>
    </Page03Container>
  )
}
