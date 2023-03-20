import React, { useEffect } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import PostsList from '../PostsList'

export default function Layout({ onToggleTheme, selectedTheme }) {

  useEffect(() => {
      console.debug({
        selectedTheme
      })

    //sempre que o component for desmontado retornando uma função

      return () => {
        console.debug('Component saiu da tela')
      }

  }, [selectedTheme])

  return (
    <>
      <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />

      <PostsList />

      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
    </>
  )
}
