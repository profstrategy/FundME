import React from 'react';
import { User, AddUser, BorrowForm, UserProfile } from './Components'
import { initialUsers } from './Contents/content'
import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-black flex justify-center'>
      <div className='sm:grid md:grid-cols-2 sm:w-5/6 gap-5 sm:grid-flow-col w-5/6 m-auto h-80'>
        <User>
          <UserProfile user={initialUsers} />
        </User>

        <BorrowForm  user={initialUsers} />
      </div>
    </div>
  )
}

export default App
