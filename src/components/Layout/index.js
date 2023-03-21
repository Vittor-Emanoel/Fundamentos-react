import React, { useEffect } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import PostsList from '../PostsList'

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

      <PostsList />

      <Footer  />
    </>
  )
}
