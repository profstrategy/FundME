import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import { arrowLeft, arrowRight } from '../assets'
import { UseFundMe } from '../Context/FundMeContext'

const SideBarNav = ({ sidestyles, navstyles }) => {
  const { arrowIcon, dispatch } = UseFundMe()

  const className = classNames({
    "bg-[#1C1D24]": true,
    "list-none": true,
    "text-white": true,
    "w-4/6": true,
    "md:w-4/6": true,
    "lg:w-70": true,
    "z-50": true
  }
  )
  return (
    <>
      {<>
        <div className={`${className} ${navstyles} m-auto rounded-md shadow-sm shadow-[#6D7D93]`}>
          <div className='flex justify-around h-10 items-center'>
            <img src={`${arrowIcon ? arrowLeft : ''}`} className={`object-contain ${arrowIcon ? 'bg-[#0D0D0D]' : ''} tablet:fixed iphonesm:fixed tablet:top-2 tablet:left-2 tablet:w-8 iphonesm:w-8  iphonesm:top-2 iphonesm:left-2 `} />
            <NavLink to={'fundmefriends'}>
              <li className={`${sidestyles}`} onClick={() => dispatch({ type: "arrowIcon", payload: arrowLeft })}>
                Friends
              </li>
            </NavLink>

            <NavLink to={'fundmeusers'}>
              <li className={` ${sidestyles}`} onClick={() => dispatch({ type: "arrowIcon", payload: arrowRight })}>
                Users
              </li>
            </NavLink>
            <img src={`${arrowIcon ? arrowRight : ''}`} className={`object-contain ${arrowIcon ? 'bg-[#0D0D0D]' : ''} tablet:fixed iphonesm:fixed tablet:top-2 tablet:right-2 tablet:w-8 iphonesm:w-8  iphonesm:top-2 iphonesm:right-2`} />
          </div>
        </div>
        <div>
        </div>
      </>
      }</>
  )
}

export default SideBarNav
