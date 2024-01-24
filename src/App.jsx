import React, { useState } from 'react';
import { User, AddUser, BorrowForm } from './Components'
import './App.css'

function App() {
  const [openAddUser, setOpenAddUser] = useState(false)
  const [showBorrowFriend, setShowBorrowFriend] = useState(false)
  const handleUserOpen = () => {
    setOpenAddUser(openAddUser => !openAddUser)
  }
  

  const handleShowBorrowFriend = () => {
    setShowBorrowFriend(showBorrowFriend => !showBorrowFriend)
  }


  return (
    <div className=' bg-black'>
      <div className={`mt-16 md:mt-20`}>
        <div className={` w-5/6 sm:w-5/6 md:w-5/6 m-auto lg:w-5/7 gap-5  ${showBorrowFriend ? 'grid grid-cols-2 lg:w-4/6 md:w-4/6 max-sm:grid-cols-1' : ''}`}>

          <User handleUserOpen={handleUserOpen} handleShowBorrowFriend={handleShowBorrowFriend} showBorrowFriend={showBorrowFriend}/>

          <BorrowForm showBorrowFriend={showBorrowFriend}/>
        </div>
      </div>

      <div className={` sm:w-5/6 sm:grid-flow-col  w-5/6 sm:w-5/6 md:w-5/6 m-auto lg:w-5/7 mt-5 ${showBorrowFriend ? ' grid m-auto grid-cols-2 lg:w-4/6 max-sm:grid-cols-1' : ''}`}>
        <AddUser openAddUser={openAddUser} />
      </div>
    </div>
  )
}

export default App
