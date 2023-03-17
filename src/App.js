import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout'
import { GlobalContext } from './contexts/GlobalContext'
import GlobalStyle from './styles/global'


function App() {
  const {theme, currentTheme, handleToggleTheme} = useContext(GlobalContext)


  return (

    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout  />
    </ThemeProvider>

  )
}

export default App
