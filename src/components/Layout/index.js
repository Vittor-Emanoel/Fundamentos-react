import React, { useEffect } from 'react'
import Routes from '../../Routes'

import Footer from '../Footer'
import Header from '../Header'

export default function Layout({ onToggleTheme, selectedTheme }) {

    useEffect(() => {
      function handleScroll () {
     
      }
      document.addEventListener('scroll', handleScroll)

      return () =>  document.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <>
      <Header/>

      <Routes />

      <Footer  />
    </>
  )
}
