import { NavBarContainer } from "./styles"
import { Graph, Infinity, Intersect } from "phosphor-react";

export function NavBar() {
  return (
    <NavBarContainer>
      <div className="navBar">
        <div className="logo">
          <Intersect size={38} />
          <h1><strong>Web</strong>Studio</h1>
        </div>
        <div className="navBarMenu">
          <ul>
            <div className="liContainer">
              <div className="iconContainer">
                <Graph size={21} />
              </div>
              <li>Modelos</li>
            </div>
            <div className="liContainer">
              <div className="iconContainer">
                <Infinity size={21} />
              </div>
              <li>Contato</li>
            </div>
          </ul>
        </div>
      </div>
    </NavBarContainer>
  )
}
