import React from 'react'

const ButtonScope = ( {children, ml, onClick}) => {
  return (
    <div onClick={onClick}>
      <button className={`bg-[#002190] text-white px-3 py-2 rounded-md ml-${ml} relative`}>{children}</button>
    </div>
  )
}

export default ButtonScope
