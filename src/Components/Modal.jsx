import React from 'react'

const Modal = ({ children }) => {
  return (
    <div className='grid grid-cols-1 hidden'>
      {children}
    </div>
  )
}

export default Modal
