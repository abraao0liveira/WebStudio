import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Page01 } from "./components/page01";
import { Page02 } from "./components/page02";
import { Page03 } from "./components/page03";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Page01 />
      <Page02 />
      <Page03 />

      <GlobalStyles />
    </ThemeProvider>
  )
}
