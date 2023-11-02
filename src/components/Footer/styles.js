import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20vh;
  background-color: ${(props) => props.theme['green-900']};
  color: ${(props) => props.theme['white']};
`
