import React from 'react'

const Body = ({ children, className, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default Body
