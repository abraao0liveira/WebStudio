import styled from "styled-components";
import star1 from "../../assets/star1.png"

export const Page02Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${star1});
  color: ${(props) => props.theme['white']};
`
