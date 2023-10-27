import { NavBarContainer } from "./styles"
import { useRef, useState } from "react"
import { Graph, Infinity, Intersect } from "@phosphor-icons/react";

export function NavBar() {
  const handleClick = (event) => {
    event.preventDefault()

    const target = event.currentTarget.getAttribute('href')

    if (target) {
      const element = document.querySelector(target);
      const headerHeight = document.querySelector('header')?.offsetHeight || 0

      if (element) {
        const rect = element.getBoundingClientRect();
        const targetOffset = rect.top + window.pageYOffset - headerHeight + 1

        window.scrollTo({
          behavior: 'smooth',
          top: targetOffset,
        })
        setIsNavListActive(false)
      }
    }
  }

  const navListRef = useRef(null)
  const [isNavListActive, setIsNavListActive] = useState(false)

  return (
    <NavBarContainer>
      <div className="navBar">
        <div className="logo">
          <Intersect size={38} />
          <h1><strong>Web</strong>Studio</h1>
        </div>
        <div className="navBarMenu">
          <ul className={`navList ${isNavListActive ? 'active' : ''}`} ref={navListRef}>
            <a href="#models" onClick={handleClick}>
              <div className="liContainer">
                <div className="iconContainer">
                  <Graph size={21} />
                </div>
                <li>Modelos</li>
              </div>
            </a>
            <a href="#contacts" onClick={handleClick}>
              <div className="liContainer">
                <div className="iconContainer">
                  <Infinity size={21} />
                </div>
                <li>Contato</li>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </NavBarContainer>
  )
}
