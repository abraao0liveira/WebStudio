import styled from "styled-components";
import star1 from "../../assets/star1.png"

export const Page02Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-image: url(${star1});
  color: ${(props) => props.theme['white']};

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h3 {
    width: 65%;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    strong {
      color: ${(props) => props.theme['green-600']};
    }
  }

  .boxes {
    width: 80%;
    height: 60%;
    display: flex;
    background: linear-gradient( to bottom, 
      ${(props) => props.theme['green-600']},
      ${(props) => props.theme['green-800']}, 
      ${(props) => props.theme['green-900']});
    padding: 1.5rem;
    margin-top: 3.5rem;
    margin-left: auto;  
    margin-right: auto;
    border-radius: 15px;

    .box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0rem 1rem 0rem 0rem;

      h2 {
        margin: 0.5rem 0rem 0.65rem 0rem;
        font-size: 1.18rem;
      }
      h4 {
        font-size: 0.95rem;
        margin-bottom: 0.75rem;
      }
      p {
        margin: 0.18rem 0rem 0.2rem 0rem;
        font-size: 0.95rem;
        text-align: center;
      }
    }
  }
`
