import React from 'react'
import classnames from 'classnames'

const ButtonStack = ({ align, fullWidth, children }) => {
  return (
    <div className={classnames(
      'button-stack',
      { [align]: align },
      { 'full-width': fullWidth }
    )}
    >
      {children}
    </div>
  )
}

export default ButtonStack
