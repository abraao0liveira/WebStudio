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
      .movie {
        width: 100%;
      }
    }
    #banner {
      width: 100%;
      display: block;
    }
    .BannerInspiracao {
      width: 80%;
      margin: 10px;
      padding: 12px;
      margin: auto;
      margin-top: 10px;
      border-radius: 25px;
      background-color: ${(props) => props.theme['gray-800']};
      h1 {
        font-size: 1.18rem;
        display: flex;
        margin: center;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme['white']};
      }
      p {
        font-size: 0.95rem;
        margin: 0.5rem 0rem 0.75rem 0rem;
        color: ${(props) => props.theme['white']};
      }
    }
  }
`
