import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import PostsList from '../PostsList'

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />

      <PostsList />

      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
    </>
  )
}
