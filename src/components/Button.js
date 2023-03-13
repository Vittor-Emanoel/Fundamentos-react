import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function Button(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#FFFFFF' : '#000',
        backgroundColor: theme === 'dark' ? '#000' : '#FFFFFF',
      }}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
