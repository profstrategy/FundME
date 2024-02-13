import React from 'react'


const Cover = ({ height, width, children, color, bgColor, paddingX, marginTop }) => {
  return (
    <div className={`w-${width} h-${height} grid m-auto text-${color} px-${paddingX} rounded-xl fixed bg-${bgColor} mb-4 mt-${marginTop} lg:hidden md:hidden`}>
      {children}
    </div>
  )
}

export default Cover
