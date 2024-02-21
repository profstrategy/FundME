import React from 'react'
import { Outlet } from 'react-router-dom'
import  GetFriends from './GetFriends'

const SearchBarMobile = () => {
  return (
    <div>
      <GetFriends />
      <Outlet />
    </div>
  )
}

export default SearchBarMobile
