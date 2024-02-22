import React from 'react'
import { Outlet } from 'react-router-dom';
import { BorrowBank, AddUser, BorrowForm, Statistics, Deposit, User, Navbar, SideBar, SideBarScope, SideBarImg, GetFriends, LogOut } from '../Components'
import { FundMeProvider } from '../Context/FundMeContext';
const AppLayOut = () => {

  return (
    <FundMeProvider>
      <div className=' grid'>
        <Navbar />
        <div className='flex flex-col gap-5'>
          <Statistics />
          <User />
          <div className='lg:hidden max-sm:visible md:hidden'>
            <AddUser />
            <BorrowForm />
            <BorrowBank />
            <Deposit />
          </div>
        </div>
        <SideBar>
          <LogOut />
          <GetFriends>
            <Outlet />
          </GetFriends>

          <SideBarScope>
            <SideBarImg />
            <AddUser />
            <BorrowForm />
            <BorrowBank />
            <Deposit />
          </SideBarScope>

        </SideBar>
      </div >
    </FundMeProvider>
  )
}

export default AppLayOut
