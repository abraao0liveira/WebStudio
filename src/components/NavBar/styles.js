import styled from "styled-components";

export const NavBarContainer = styled.header`
  height: 10vh;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['white']};

  .navBar {
    display: flex;
    margin: 0 auto;
    width: 90%;
  }
  .logo {
    align-items: center;
    justify-content: left;
    margin: auto;
    display: flex;
    padding-right: 8rem;
    h1 {
      font-size: 1.5rem;
      margin-left: 0.25rem;
      strong {
        color: ${(props) => props.theme['green-600']};
      }
    }
  }
  .navBarMenu {
    width: 80%;

    ul {
      display: flex;
      align-items: center;
      justify-content: end;
      margin: auto;
      margin-top: 0.2rem;
      padding: 0;
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme['white']};
    transition: all 0.3s ease-in-out;

    :hover {
      background-color: ${(props) => props.theme['gray-800']};
      transition: all 0.3s ease-in-out;
    }
  }
  .liContainer {
      background-color: ${(props) => props.theme['green-800']};
      border-radius: 50px;
      padding: 0.15rem; 
      margin: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      li{
        list-style: none;
        padding: 0.25rem;
        margin: 0.4rem 0.5rem 0.4rem -0.1rem;
        font-weight: bold;
        font-size: 1.075rem;
      }
    }
    .iconContainer {
      background-color: ${(props) => props.theme['gray-800']};
      border-radius: 50%;
      padding: 0.5rem;
      margin: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`
