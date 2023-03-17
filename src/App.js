import React, { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout'
import GlobalStyle from './styles/global'

import themes from './styles/themes'

function App() {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  console.log(currentTheme)

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout selectedTheme={theme} onToggleTheme={handleToggleTheme} />
    </ThemeProvider>
  )
}

export default App
