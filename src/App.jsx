import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./style/Theme";
import Main from "./components/main/Main";
import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllProjects from "./components/pages/AllProjects";
import { Routes, Route } from "react-router-dom";
import ScrollUp from "./components/ScrollUp";
import Social from "./components/Social";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
        <Footer />
        <ScrollUp />
        <Social />
      </ThemeProvider>
    </>
  );
}

export default App;
