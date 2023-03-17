import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContext } from './contexts/GlobalContext'


//Styles
import Layout from './components/Layout'
import GlobalStyle from './styles/global'


function App() {
  const {theme, currentTheme} = useContext(GlobalContext)


  return (

    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout  />
    </ThemeProvider>

  )
}

export default App
