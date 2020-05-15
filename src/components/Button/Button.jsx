import React from 'react'
import classnames from 'classnames'

const Button = ({ size = 'md', children, classes, onClick }) => {
  if (classes) classes = classes.split(/(\.|\s)/).join(' ')
  return (
    <button
      className={classnames(
        'btn',
        `btn-${size}`,
        classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
