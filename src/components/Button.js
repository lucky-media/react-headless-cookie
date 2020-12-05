import React from 'react'
import Cookies from 'js-cookie'
import CookieContext from '../CookieContext'
import PropTypes from 'prop-types'

const Button = ({ children, className, style }) => {
  const { setIsHidden, settings } = React.useContext(CookieContext)

  const setCookie = () => {
    Cookies.set('cookies', 'false', {
      expires: 180
    })

    setIsHidden(true)
  }

  return (
    <button onClick={setCookie} className={className} style={style}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Button
