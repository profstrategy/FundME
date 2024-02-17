import React from 'react'
import { Outlet } from 'react-router-dom'
import { GetFriends } from '../Components'

const SideBar = () => {
  return (
    <div>
      <GetFriends >
      <Outlet />
      </GetFriends>
    </div>
  )
}

export default SideBar
