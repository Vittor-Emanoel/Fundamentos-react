
import React, { createContext, useMemo, useState } from "react"
import themes from '../styles/themes'


export const GlobalContext = createContext({

})

export const GlobalProvider = ({children}) => {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }


  return (
    <GlobalContext.Provider value={{theme, setTheme, currentTheme, handleToggleTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}

