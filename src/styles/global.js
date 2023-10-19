import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['scroll-100']};
    border-radius: 0.25rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme['scroll-300']};
  }
`
