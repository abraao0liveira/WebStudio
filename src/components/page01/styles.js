import styled from "styled-components";

export const Page01Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme['green-900']};
  color: ${(props) => props.theme['white']};

  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .page01 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
