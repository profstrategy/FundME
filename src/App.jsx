import React, { useState } from 'react';
import { User, AddUser, BorrowForm, BorrowBank, BorrowScope } from './Components'
import './App.css'

function App() {
  const [openAddUser, setOpenAddUser] = useState(false);
  const [showBorrowFriend, setShowBorrowFriend] = useState(false);
  const [showUser, setShowUser] = useState(true);
  const [borrowBank, setBorrowBank] = useState(false)

  const handleUserOpen = () => {
    setOpenAddUser((prevOpenAddUser) => !prevOpenAddUser);
    setShowBorrowFriend('')
    setBorrowBank('')
  };

  const handleShowBorrowFriend = () => {

    window.innerWidth <= 640 ? setShowBorrowFriend((prevShowBorrowFriend) => !prevShowBorrowFriend) && setShowUser((prevShowUser) => !prevShowUser) : setShowBorrowFriend((prevShowBorrowFriend) => !prevShowBorrowFriend)

    setBorrowBank('')
    setOpenAddUser('')
  };

  const handleShowBorrowBank = () => {

    window.innerWidth <= 640 ? setBorrowBank((prevShowBorrowBank) => !prevShowBorrowBank) && setShowUser((prevShowUser) => !prevShowUser) : setBorrowBank((prevShowBorrowBank) => !prevShowBorrowBank)
    
    setShowBorrowFriend('')
    setOpenAddUser('')
  };
  return (
    <div className=' bg-black'>
      <div className={`mt-16 md:mt-20`}>
        <div
          className={` w-5/6 sm:w-5/6 md:w-4/6 m-auto lg:w-4/6 gap-5  ${showBorrowFriend ? 'grid grid-cols-2 lg:w-4/6 md:w-4/6 max-sm:grid-cols-1' : ''
            }${showBorrowFriend ? 'grid grid-cols-2 lg:w-4/6 md:w-4/6 max-sm:grid-cols-1' : ''}`}
        >

          <User handleUserOpen={handleUserOpen} handleShowBorrowFriend={handleShowBorrowFriend} showBorrowFriend={showBorrowFriend} showUser={showUser} setShowUser={setShowUser} handleShowBorrowBank={handleShowBorrowBank} />
          <BorrowScope >
            <BorrowForm showBorrowFriend={showBorrowFriend} setShowUser={setShowUser} showUser={showUser} />
            <BorrowBank borrowBank={borrowBank} setShowUser={setShowUser}/>
          </BorrowScope>

        </div>
      </div>

      <div
        className={` sm:w-5/6 sm:grid-flow-col  w-5/6 sm:w-5/6 md:w-5/6 m-auto lg:w-5/7 mt-5 ${showBorrowFriend ? ' grid m-auto grid-cols-2 lg:w-4/6 max-sm:grid-cols-1' : ''
          }`}
      >
        <AddUser openAddUser={openAddUser} />
      </div>
    </div>
  );
}

export default App;