import styled from "styled-components"
import star1 from "../../assets/star1.png"

export const Page01Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: auto;
  height: 90vh;
  /* background: ${(props) => props.theme['gray-900']}; */
  background-image: url(${star1});
  color: ${(props) => props.theme['white']};

  .page01 {
    width: 90%;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1{
      font-size: 5rem;
      margin: 0;
     
      strong{
        color: ${(props) => props.theme['green-600']};
      }
    }
    
  }
  section{
    width: 90%;
    display: flex;
    margin: center;
   
    
  }
  .image{
    display: flex; 
    width: 50%;
   

  }
  #banner{
    width: 50%;
    display: flex;
    margin: auto;
    justify-content: end;
    bottom: 0px;
  }
  .BannerInspiracao{
    width: 300px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: linear-gradient( to bottom, 
      ${(props) => props.theme['green-600']},
      ${(props) => props.theme['green-800']}, 
      ${(props) => props.theme['green-900']});

    h1{
      font-size: 1.4rem;
      text-align: center;
      margin: 1rem 0rem 2rem 0rem;
    }
    p{
      font-size: 1.1rem;
      text-align: center;
      
    }
  }
`
