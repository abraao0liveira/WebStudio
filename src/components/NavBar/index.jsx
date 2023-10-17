import { NavBarContainer } from "./styles"
import logo from "../../assets/logo.png"

export function NavBar() {
  return (
    <NavBarContainer>
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navBarMenu">
          <ul>
            <div className="liContainer">
              <div className="iconContainer">
              
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
    </NavBarContainer>
  )
}
