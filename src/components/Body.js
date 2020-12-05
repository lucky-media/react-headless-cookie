import React from 'react'
import PropTypes from 'prop-types'
const Body = ({ children, className, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Body
