import styled from "styled-components";

export const Page01Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: ${(props) => props.theme['green-900']};
  color: ${(props) => props.theme['white']};

  .page01 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
