import React, { useState, useEffect } from 'react'
import CookieContext from './CookieContext'
import Button from './components/Button'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'

const Cookie = ({ children, style, className, settings, delay, ...other }) => {
  const [hidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (!Cookies.get(settings.name)) {
      setTimeout(() => setIsHidden(false), delay || 2000)
    }
  }, [])

  const styles = {
    display: hidden ? 'none' : 'block',
    position: 'fixed',
    zIndex: '9999',
    ...style
  }

  return (
    <CookieContext.Provider value={{ setIsHidden, hidden, settings }}>
      <div {...other} className={className} style={styles}>
        {children}
      </div>
    </CookieContext.Provider>
  )
}

Cookie.Button = Button

Cookie.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  settings: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.number
  })
}

export { Cookie, Cookies }
