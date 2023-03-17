import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

import { Container } from './styles'

export default function Header() {
  const {handleToggleTheme, theme} = useContext(GlobalContext) 
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  )
}
