import React, { useState, useEffect } from 'react'
import CookieContext from './CookieContext'
import Body from './components/Body'
import Button from './components/Button'
import Cookies from 'js-cookie'

const Cookie = ({ children }) => {
  const [hidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (!Cookies.get('cookies')) {
      setTimeout(() => setIsHidden(false), 10)
    }
  }, [])

  return (
    <CookieContext.Provider value={{ setIsHidden, hidden }}>
      <div
        style={{
          display: hidden ? 'none' : 'block',
          position: 'fixed',
          width: '100%',
          bottom: '0px',
          zIndex: '9999',
          backgroundColor: '#000',
          color: 'white',
          padding: '1rem'
        }}
      >
        {children}
      </div>
    </CookieContext.Provider>
  )
}

Cookie.Body = Body
Cookie.Button = Button

export { Cookie }
