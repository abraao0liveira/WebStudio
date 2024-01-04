import styled from "styled-components";

export const FooterContainer = styled.div`
  align-items: center;
  height: 50vh;
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['white']};

  .box{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;

    .logo {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      h1 {
        font-size: 1.5rem;
        margin-left: 0.25rem;
        strong {
          color: ${(props) => props.theme['green-600']};
        }
      }
    }

    .socialMedia{
      margin-top: 20px;
      
      h2{
        margin-bottom: 10px;
      }
      
      a{
        text-decoration: none;
        color: ${(props) => props.theme['white']};
        margin: 5px;
        transition: 0.3s ease-in-out;

        &:hover{
          color: ${(props) => props.theme['gray-400']};
          transition: 0.3s ease-in-out;
        }
      }
    }

    .arrow {
      margin-top: 15rem;
      margin-right: -5.25rem;
      margin-left: -3.25rem;
      cursor: pointer;
      a {
        text-decoration: none;
        color: ${(props) => props.theme['white']};
        transition: 0.3s ease-in-out;

        &:hover{
          color: ${(props) => props.theme['gray-400']};
          transition: 0.3s ease-in-out;
        }
      }
    }

    .copy {
      margin-top: 1.5rem;
    }
    .copyGhost{
      display: none;
    }

    .form {
      h1 {
        margin-bottom: 0.5rem;
      }

      .form input,
      .form textarea {
        display: block;
        width: 30rem;
        background-color: ${(props) => props.theme["gray-700"]};
        color: ${(props) => props.theme["white"]};
        font: inherit;
        padding: 0.6rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.5rem;
        transition: border-color,
        box-shadow 0.2s ease-in-out;
      }

      .form textarea {
        resize: none;
      }

      .form input:hover,
      .form textarea:hover,
      .form input:focus,
      .form textarea:focus {
        outline: none;
        border-color: ${(props) => props.theme["green-900"]};
        box-shadow: 0 0 3px ${(props) => props.theme["green-600"]};
      }

      .form button {
        padding: 0.8rem;
        background-color: ${(props) => props.theme["gray-700"]};
        color: ${(props) => props.theme["white"]};
        font: bold 1.05rem "Roboto", sans-serif;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.2s ease-in-out;
      }

      .form button:hover,
      .form button:focus {
        outline: none;
        background-color: ${(props) => props.theme["gray-600"]};
      }
    }
  }
  @media screen and (max-width: 734px){
    height: auto;
    margin-top: 2.75rem;
    .box{
      flex-direction: column;
      .logo{
        display: none;
      }
      .socialMedia{
        margin-top: 8px;
        h2{
          display: none;
        }
      }
      .form{
        h1{
          margin-top: 15px;
          margin-bottom: 10px;
        }
        .form input,
        .form textarea {
          width: 100%;
        }
      }
      .copy {
        display: none;
      }
      .copyGhost{
        display: flex;
        margin: auto;
        margin-top: 20px;
        font-size: 0.8rem;
      }
      .arrow{
        margin: auto;
        margin-top: 20px;
      }
    }
  }
`
