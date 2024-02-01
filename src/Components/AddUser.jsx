import React from 'react'
import { useState } from 'react'

import { ButtonScope } from '../Components'
import { angleUp } from '../assets'

const AddUser = ({ onAddUsers }) => {

  const [name, setName] = useState('')
  const [balance, setBalance] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')


  function handleAddUser (e) {
    e.preventDefault()

    if(!name || !balance || !image) return
  const id = crypto.randomUUID()

    const newUsers = {
      id : id,
      name,
      balance,
      icon: angleUp,
      image: `${image}?=${id}`
    }
      setImage("https://i.pravatar.cc/48")
      setName('')
      setBalance('')

    onAddUsers(newUsers)
    console.log(newUsers)
  }
  return (
    <>
      {
        < div className={`bg-white rounded-md py-3 mb-3 lg:w-5/6 md:w-5/6 w-full m-auto`} >

          <form className={`w-full grid gap-3 bg-white py-3 h-auto `} onSubmit={handleAddUser}>
            <h1 className='text-xl mx-8'>ADD YOUR FRIENDS </h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='name of user' className='w-5/6 m-auto grid py-2 bg- shadow-md shadow-slate-200 border-slate-950 border-2 rounded' />

            <input type='text' value={balance} className='w-5/6 m-auto grid shadow-md shadow-slate-200 border-slate-950 border-2 rounded py-2 mb-3' placeholder='amount to deposit' onChange={(e) => setBalance(Number(e.target.value))} />
            <label className='px-9 text-blue-500'>Not required</label>
            <input type='text' value={image} className=' w-5/6 m-auto grid shadow-md shadow-slate-200 border-slate-950 border-2 rounded py-2 mb-3' placeholder='https://i.pravatar' onChange={(e) => setImage(e.target.value)} disabled/>

          </form>

          <div className='grid justify-end px-10'>
            <ButtonScope
              ml='1'
              onClick={handleAddUser}
            >ADD</ButtonScope>
          </div>
        </div >
      }
    </>
  )
}

export default AddUser
