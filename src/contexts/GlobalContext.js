
import React, { createContext, useMemo, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import themes from '../styles/themes'


export const GlobalContext = createContext({

})

export const GlobalProvider = ({children}) => {
  const [theme, setTheme] = useLocalStorage('Tema')


  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  //função de efeito
  useState(() => {
    console.debug('useEffect executou') 
}, [theme])


  return (
    <GlobalContext.Provider value={{theme, setTheme, currentTheme, handleToggleTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}

