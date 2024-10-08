import styled from "styled-components"
import star1 from "../../assets/star1.png"

export const Page01Container = styled.div`
  margin: auto;
  height: 90vh;
  background-image: url(${star1});
  color: ${(props) => props.theme['white']};

  .page01 {
    width: 90%;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
      font-size: 5rem;
      margin: 1rem 0 0 0;

      strong {
        color: ${(props) => props.theme['green-600']};
      }
    }
  }
  section {
    width: 90%;
    display: flex;
    margin: center;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    .movie {
      width: 120%;
      border-radius: 25%;
    }
  }
  #banner {
    width: 50%;
    display: flex;
    margin: auto;
    justify-content: end;
    bottom: 0px;
  }
  .BannerInspiracao {
    width: 100%;
    margin: 10px;
    padding: 12px;
    border-radius: 25px;
    background-color: ${(props) => props.theme['gray-800']};
    h1 {
      font-size: 1.18rem;
      margin: 1rem 0rem 1.75rem 0rem;
      color: ${(props) => props.theme['white']};
    }
    p {
      font-size: 0.95rem;
      margin: 0.5rem 0rem 0.75rem 0rem;
      color: ${(props) => props.theme['white']};
    }
  }
  .buttonWpp {
    display: none;
    justify-content: center;
    button {
      margin-top: 1.5rem;
      padding: 10px 12px;
      background-color: ${(props) => props.theme['gray-800']};
      border-radius: 15px;
      border: none;
      cursor: pointer;
      box-shadow: 0px 0px 12px 0px rgba(255,255,255,0.3);
      a {
        font-weight: bold;
        font-size: 1.075rem;
        padding: 10px 20px;
        text-decoration: none;
        color: ${(props) => props.theme['white']};
      }
    }
  }

  @media screen and (max-width: 734px){
    height: auto;
    .page01 {
      display: none;
    }
    section {
      flex-direction: column;
      width: 100%;
    }
    .image {
      width: 100%;
      overflow-x: hidden;
      .movie {
        width: 38rem;
      }
    }
    #banner {
      width: 100%;
      display: block;
    }
    .BannerInspiracao {
      display: none;
    }
    .buttonWpp {
      display: flex;
    }
  }
`
