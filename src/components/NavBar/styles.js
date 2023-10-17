import styled from "styled-components";

export const NavBarContainer = styled.header`
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  height: 10vh;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['white']};

  .navBar {
    display: flex;
    margin: 0;
  }
  .logo {
    align-items: center;
    justify-content: left;
    margin: auto;
    display: flex;

    img{
    width: 20%;
    margin: 0;
    display: flex;
    }
  
  }
  .navBarMenu{
    width: 80%;
    ul{
      display: flex;
      align-items: center;
      justify-content: end;
      margin: auto;
      padding: 0;
    }
  }
  .liContainer {
      background-color: ${(props) => props.theme['green-800']};
      border-radius: 50px;
      padding: 0.2rem; 
      margin: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;

        li{
          list-style: none;
          padding: 0.3rem;
          margin: 0.4rem;
          font-weight: bold;
          font-size: 1rem;

        }

    }
    .iconContainer{
      background-color: ${(props) => props.theme['gray-500']};
      border-radius: 50%;
      padding: 0.5rem;
      margin: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

    }
`
