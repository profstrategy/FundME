import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBarMobile from './SearchBarMobile'

const GetFriendsMobile = () => {
  return (
    <div>
      <SearchBarMobile>
        <Outlet />
      </SearchBarMobile>
    </div>
  )
}

export default GetFriendsMobile
