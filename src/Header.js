import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from './ThemeContext'

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  console.log({ onToggleTheme })

  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: `JStack's Blog`,
}

export default Header
