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
  hr {
    display: none;
  }
  h3 {
    width: 65%;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    strong {
      color: ${(props) => props.theme['green-200']};
    }
  }
   
  .boxes {
    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-evenly;

    .box {
      position: relative;
      height: 385px;
      width: 330px;
      background-color: ${(props) => props.theme['gray-800']};
      border-radius: 30px;
      padding: 20px;
      align-items: center;

      h2{  
        padding-bottom: 10px;
        font-size: 1rem; 
      }
      h4{
        padding-bottom: 10px;
        color: ${(props) => props.theme['green-200']};
        font-size: 1.7rem;
        display: flex;

        p{
          display: flex;
          font-size: 0.9rem;
          color: ${(props) => props.theme['gray-400']};
          line-height: 2.5;
        }
      }
      ul{
        padding: 10px;
      }
      li{
        padding: 10px;
        text-decoration: none;
        list-style: none;
      }
    }
  }

  @media screen and (max-width: 734px){
    height: auto;
    padding-top: 50px;
    h1{
      font-size: 2.5rem;
      text-align: center;
    }
    hr{
      display: block;
      width: 55%;
      height: 4px;
      margin: 28px auto;
      margin-top: -10px;
      background-color: ${(props) => props.theme['green-200']};
      border: none;
      border-radius: 5px;
    }
    h3{
      width: 90%;
      font-size: 1rem;
    }
    .boxes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .box{
        height: 50%;
        width: 80%;
        margin: 10px;
      }
    }
  }

  @media screen and (max-width: 360px){
    h1 {
      font-size: 2.15rem;
    }
  }
`
