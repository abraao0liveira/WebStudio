import styled from "styled-components";
import star1 from "../../assets/star1.png"

export const Page03Container = styled.div`
  height: 60vh;
  background-image: url(${star1});
  color: ${(props) => props.theme['white']};
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
  .webSites {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2.75rem;
    .webSite {
      width: 21.5rem;
      height: 12rem;
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 20px;
      background-color: ${(props) => props.theme['gray-800']};
      img {
        width: 90px;
        height: 90px;
        margin-bottom: 1rem;
        border-radius: 50px;
        transition: all 0.2s ease-in-out;
        &:hover {
          transition: all 0.2s ease-in-out;
          transform: scale(1.08);
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 734px){
    height: auto;
    h1{
      margin-top: 20px;
      font-size: 1.6rem;
      text-align: center;
    }
    .webSites{
      .webSite{
        width: 16rem;
        height: 9rem;
        margin: 0.5rem;
        img{
          width: 70px;
          height: 70px;
        }
      }
    }
  }
`
