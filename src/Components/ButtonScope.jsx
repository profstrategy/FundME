import React from 'react'

const ButtonScope = ( {children, ml, onClick}) => {
  return (
    <div onClick={onClick}>
      <button className={`bg-blue-800 text-white px-3 py-2 rounded-md ml-${ml}`}>{children}</button>
    </div>
  )
}

export default ButtonScope
