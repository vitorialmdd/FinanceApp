import { HeaderComponent } from "./components/HeaderComponent";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { CardComponent } from "./components/CardComponent";
import Modal from "react-modal";

Modal.setAppElement('#root');
export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <HeaderComponent/>
        <CardComponent />
      </ThemeProvider>
    </>
  )
}

