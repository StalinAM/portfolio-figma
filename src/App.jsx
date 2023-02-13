import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { DarkTheme } from './style/Theme'
import Main from './components/main/Main'
import GlobalStyles from './style/GlobalStyles'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AllProjects from './components/pages/AllProjects'
import { Routes, Route } from 'react-router-dom'
import ScrollUp from './components/ScrollUp'
import Social from './components/Social'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <GlobalStyles toggle={toggle} />
      <ThemeProvider theme={DarkTheme}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header toggle={toggle} setToggle={setToggle} />
                <Main toggle={toggle} setToggle={setToggle} />
              </>
            }
          />
          <Route path='/all-projects' element={<AllProjects />} />
        </Routes>
        <Footer />
        <ScrollUp />
        <Social />
      </ThemeProvider>
    </>
  )
}

export default App
