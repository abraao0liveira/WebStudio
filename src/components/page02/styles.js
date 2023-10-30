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
      color: ${(props) => props.theme['green-200']};
    }
  }
   
  .boxes {
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;

    .box {
      position: relative;
      width: 30%;
      height: 400px;
      width: 350px;
      background: linear-gradient( to top, 
      ${(props) => props.theme['green-600']},
      ${(props) => props.theme['green-600']}, 
      ${(props) => props.theme['green-800']});
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
      .btn{
        padding: 5px;
        width: 250px;
        background-color: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['white']};
        border-radius: 10px;
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;
        margin: auto;
        align-items: center;
        left: 0;
        right: 0; 
      }
      a{
        text-decoration: none;
        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['green-400']};
      }
    }
  }
`
