import React from 'react'


const Cover = ({ height, width, children, color, bgColor, paddingX, marginTop }) => {
  return (
    <div className={`w-${width} h-${height} text-${color} px-${paddingX} rounded-xl bg-${bgColor} mb-4 mt-${marginTop}`}>
      {children}
    </div>
  )
}

export default Cover
