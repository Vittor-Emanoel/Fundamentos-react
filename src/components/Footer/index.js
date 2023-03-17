import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

import { Container } from './styles'

export default function Footer() {
  const {handleToggleTheme, theme} = useContext(GlobalContext)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  )
}
