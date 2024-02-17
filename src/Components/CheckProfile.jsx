import React from 'react'
import classNames from 'classnames'


const CheckProfile = ({ children, user, styles }) => {
  const className = classNames({
    "text-red-400" : user <= 10,
    "text-green-700" : user > 10,
})
  return (
    <div className={`${className} ${styles}`}>
      {children}
    </div>
  )
}

export default CheckProfile
