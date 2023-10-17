import { Page01Container } from "./styles"

export function Page01() {
  return (
    <Page01Container>
      <div className="navBar">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="navBarMenu">
          <ul>
            <div className="liContainer">
              <div className="iconContainer">
                <img src="" alt="" />
              </div>
              <li>Identidade</li>
            </div>
            <div className="liContainer">
              <div className="iconContainer">
                <img src="" alt="" />
              </div>
              <li>Modelos</li>
            </div>
            <div className="liContainer">
              <div className="iconContainer">
                <img src="" alt="" />
              </div>
              <li>Contato</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="page01">
        <h1>Hello</h1>
      </div>
    </Page01Container>
  )
}
