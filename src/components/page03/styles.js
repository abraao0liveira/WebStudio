import styled from "styled-components";
import star1 from "../../assets/star1.png"

export const Page03Container = styled.div`
  height: 80vh;
  background-image: url(${star1});
  color: ${(props) => props.theme['white']};
`
