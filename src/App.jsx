import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Page01 } from "./components/page01";
import { Page02 } from "./components/page02";
import { Page03 } from "./components/page03";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <Page01 />
      <Page02 />
      <Page03 />
      <Footer />

      <GlobalStyles />
    </ThemeProvider>
  )
}
