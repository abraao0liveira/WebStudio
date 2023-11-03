import styled from "styled-components";

export const FooterContainer = styled.div`
  /* display: flex; */
  align-items: center;
  height: 50vh;
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['white']};

  .box{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;

    .logo{
      display: flex;
      margin-bottom: 10px;
    }

    .socialMedia{
      margin-top: 30px;
      
      h2{
        margin-bottom: 10px;
      }
      a{
      text-decoration: none;
      color: ${(props) => props.theme['white']};
      margin: 5px;
      
      }
    }

    
  }

`
