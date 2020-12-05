import React from 'react'
import Cookies from 'js-cookie'
import CookieContext from '../CookieContext'

const Button = ({ children, className, style }) => {
  const { setIsHidden } = React.useContext(CookieContext)

  const setCookie = () => {
    Cookies.set('cookies', 'false', {
      expires: 180,
      path: ''
    })

    setIsHidden(true)
  }

  return (
    <button onClick={setCookie} className={className} style={style}>
      {children}
    </button>
  )
}

export default Button
