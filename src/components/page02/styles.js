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
      color: ${(props) => props.theme['green-400']};
    }
  }

  /* .boxes {
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
  
  } */
  
  .boxes {
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    /* margin: 5px;
    padding: 10px;
    height: 400px;
    width: 900px; */

    .box {
      position: relative;
      width: 30%;
      height: 400px;
      width: 350px;
      background: linear-gradient( to bottom, 
      ${(props) => props.theme['green-600']},
      ${(props) => props.theme['green-800']}, 
      ${(props) => props.theme['green-900']}); ;
      border-radius: 30px;
      padding: 20px;
     
      align-items: center;
    
        h2{
         
          padding-bottom: 10px;
          
        }
        h4{
          padding-bottom: 10px;
          color: ${(props) => props.theme['green-200']};
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
          /* align-items: center;
          justify-content: center;
          display: flex;
          margin: auto;
          margin-top: 10px; */
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
        /* button{
          padding: 5px;
          width: 150px;
          background-color: ${(props) => props.theme['green-400']};
          color: ${(props) => props.theme['white']};
          border-radius: 15px;
          align-items: center;
          justify-content: center;
          display: flex;
          margin: auto;
          margin-top: 10px;
        } */
    }
    
  
  }
 
  
`
