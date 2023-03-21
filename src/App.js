import React, { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'



import themes from './styles/themes'
//Styles
import Layout from './components/Layout'
import GlobalStyle from './styles/global'


function App() {

  // const {theme, currentTheme} = useContext(GlobalContext)
  const [theme, setTheme] = useState('dark')


  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }


  //função de efeito

  //Primeiro caso de uso é executar na primeira renderização do component 
  //Executar apenas uma vez depois do mount = API ARRAY VAZIO[]
  //Executar sempre que um state ou prop mudar = ELE FICA MONITORANDO AS VARIAVÉIS


  //unmont = quando eles desmonta

  useState(() => {
       console.debug('useEffect executou') 
  }, [])

  return (

    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout selectedTheme={theme} onToggleTheme={handleToggleTheme} />
    </ThemeProvider>

  )
}

export default App
