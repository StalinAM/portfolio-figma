import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./style/Theme";
import Main from "./components/main/Main";
import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
