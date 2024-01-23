import React from 'react'

const BorrowScope = ({ height, bgColor, py, children, px,  }) => {

  return (
    <div className='bg-white rounded-md'>
      <form className={`w-full grid gap-3 bg-${bgColor} px-${px} py-${py} h-${height}`}>
        {children}
      </form>
    </div>
  )
}

export default BorrowScope
