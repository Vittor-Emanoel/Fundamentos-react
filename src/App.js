import React, { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContext } from './contexts/GlobalContext'


//Styles
import Layout from './components/Layout'
import GlobalStyle from './styles/global'


function App() {
  const {theme, currentTheme} = useContext(GlobalContext)


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
      <Layout  />
    </ThemeProvider>

  )
}

export default App
