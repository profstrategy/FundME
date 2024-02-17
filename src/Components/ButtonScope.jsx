import React from 'react'
import classNames from 'classnames'

const ButtonScope = ( {children, onClick, styles}) => {
  const className = classNames({
    "bg-[#002190]": true,
    "text-white": true,
    "rounded-md": true,
  })
  return (
    <div onClick={onClick}>
      <button className={`${className} ${styles}`}>{children}</button>
    </div>
  )
}

export default ButtonScope
