import React from 'react'
import { BorrowBank, AddUser, BorrowForm, Statistics, Deposit, User, Navbar, SideBar } from '../Components'
import { FundMeProvider } from '../Context/FundMeContext';
const AppLayOut = () => {
  return (
    <FundMeProvider>
      <div className=' grid'>
        <Navbar />
        <div className='flex flex-col gap-5 ' >
          <Statistics />
          <User />
          <div className='lg:hidden max-sm:visible md:hidden'>
            <AddUser />
            <BorrowForm />
            <BorrowBank />
            <Deposit />
          </div>
        </div>
        <div className='fixed right-0 lg:w-80 w-full md:w-60 flex flex-col tablet:hidden items-center  justify-between lg:block md:block xl:block iphonesm:hidden'>
          <SideBar />
          <AddUser />
          <BorrowForm />
          <BorrowBank />
          <Deposit />
        </div>
      </div >
    </FundMeProvider>
  )
}

export default AppLayOut
