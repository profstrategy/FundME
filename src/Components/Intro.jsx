import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div>
     <Link to={'/app'} relative="path"><h1 className='text-white'>Hello</h1></Link>
    </div>
  )
}

export default Intro
