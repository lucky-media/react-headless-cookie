import React from 'react'
import Cookies from 'js-cookie'
import CookieContext from '../CookieContext'
import PropTypes from 'prop-types'

const Button = ({ children, className, style, as, ...props }) => {
  const { setIsHidden, settings } = React.useContext(CookieContext)

  const { name, ...other } = settings

  const Tag = as || 'button'

  const setCookie = () => {
    Cookies.set(name, 'false', {
      expires: 180,
      ...other
    })

    setIsHidden(true)
  }

  return (
    <Tag aria-label="close-button" {...props} onClick={setCookie} className={className} style={style}>
      {children}
    </Tag>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Button
