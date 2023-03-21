
import React, { createContext, useMemo, useRef, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import themes from '../styles/themes'


export const GlobalContext = createContext({

})

export const GlobalProvider = ({children}) => {
  const [theme, setTheme] = useLocalStorage('Tema')


  //manter o valor a cada render
  const firstRender = useRef(true);
  

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  //função de efeito
  useState(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return
    }


}, [theme])


  return (
    <GlobalContext.Provider value={{theme, setTheme, currentTheme, handleToggleTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}

