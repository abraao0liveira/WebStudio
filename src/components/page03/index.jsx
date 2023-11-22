import { Page03Container } from "./styles"

export function Page03() {
  return (
    <Page03Container>
      <section id="projects">
        <h1>Projetos que já desenvolvemos.</h1>
        <div className="sliderWrapper">
          <div className="slider">
            <img id="slide-1" src="https://images7.alphacoders.com/132/1329456.jpeg" alt="" />
            <img id="slide-2" src="https://images4.alphacoders.com/132/1326330.png" alt="" />
            <img id="slide-3" src="https://images.alphacoders.com/132/1326812.jpeg" alt="" />
          </div>
          <div className="sliderNav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>
    </Page03Container>
  )
}
