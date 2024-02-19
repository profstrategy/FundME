import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { arrowLeft, arrowRight } from '../assets'
import { UseFundMe } from '../Context/FundMeContext'

const SideBarNav = ({ sidestyles, navstyles }) => {
const { arrowIcon, dispatch } = UseFundMe()

  const className = classNames({
    "bg-[#1C1D24]": true,
    "list-none": true,
    "text-white": true,
    "w-5/6": true,
  }
  )
  return (
    <div className={`${className} ${navstyles} m-auto rounded-md shadow-sm shadow-[#6D7D93]`}>
      <div className='flex gap-8 justify-center h-10 items-center'>
        <img src={`${arrowLeft}`} className='object-contain' />
        <NavLink to={'fundmefriends'}>
          <li className={`${sidestyles}`} >
            Friends
          </li>
        </NavLink>
        <NavLink to={'fundmeusers'}>
          <li className={` ${sidestyles}`}>
            Users
          </li>
        </NavLink>
        <img src={`${ arrowRight}`} className='object-contain' />
      </div>

    </div>
  )
}

export default SideBarNav
