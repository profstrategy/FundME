import { useReducer, useContext } from 'react';

import { user, angleDown, angleUp, close } from '../assets';
import { ButtonScope } from '../Components';


function reducer(state, action) {
  // console.log(state, action)
  switch (action.type) {
    case "icon":
      return { ...state, icon: !state.icon }
    case "modal":
      return { ...state, modal: !state.modal }
    default:
      return state;
  }
}

const initialState = { modal: false, icon: false }

const UserProfile = ({ user, onToggleBorrowFriend, onToggleBorrowBank, UserContext }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { modal, icon } = state

  // useEffect(() => {
  //   dispatch({ type: "icon" })
  //   dispatch({ type: "modal" })

  //   window.addEventListener('click', dispatch)
  // }, [dispatch])

   const { onDelete } = useContext(UserContext)
  

  return (
    <div className='py-3 px-7 relative'>
      <>
        <li className={`${user.isSelected || user.juSelected || user.nameSelected ? 'bg-green-500' : ''} } list-none flex text-initial justify-between px-2 items-center bg-gray-950 rounded-lg mt-2`}>

          <img className='rounded-full' src={user.image} />
          <h5 className={`text-white`}>{user.name}</h5>
          <img src={`${icon ? angleDown : angleUp}`} className='cursor-pointer' onClick={() => {
            dispatch({ type: "icon" });
            dispatch({ type: "modal" });
          }} />

        </li>

          <img src={close} className="absolute top-3 w-4 bg-gray-950 rounded-full right-5 z-50 " onClick={() => onDelete({type: "deleteFriends", payload: user})} />
        
        {modal &&
          <div className='grid grid-cols-1 search'>
            <div className='w-full col-end-3 flex flex-col h-auto gap-1 px-3 bg-stone-50 py-2 rounded-md shadow-lg shadow-zinc-500 mt-2'>

              <li className={`hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 list-none`} onClick={() => { onToggleBorrowFriend(user) }}>Borrow from friend</li>
              <li className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150 list-none' onClick={() => onToggleBorrowBank(user)}>Borrow from Bank</li>
              <li className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150 list-none' onClick={() => onToggleDeposit(user)}>Make a Deposit</li>
            </div>
          </div>
        }

        <div className='grid grid-cols-2 w-full items-center shadow-lg shadow-zinc-500 mt-2 px-2'>
          <p className={`${user.balance <= 10 ? 'text-red-500' : 'text-black'}`}>X account balance is ${user.balance}</p>

          <h6 className={`col-end-3 text-end text-xs ${user.balance <= 10 ? 'text-red-500' : 'text-blue-500'}`}>{user.balance <= 10 ? 'Low balance' : 'Normal'}</h6>
        </div>
      </>
    </div>
  )
}

const User = ({ onToggleBorrowFriend, onToggleBorrowBank, onToggleAddFriends, friends, UserContext }) => {

    return (
      <div className=' m-auto w-4/6 md:w-2/6 lg:w-2/6'>
  
        <div className={`bg-white rounded-lg h-auto w-full shadow-md shadow-zinc-300 pb-3`}>
          <div className='flex justify-between items-center px-2 border-b-2 h-10'>
            <h1 className='col-end-2'>Users</h1>
            <img src={user} alt='user' className='col-start-7 object-contain w-3' />
          </div>
          {friends.map((user) => (
            <UserProfile user={user} key={user.id} onToggleBorrowFriend={onToggleBorrowFriend} onToggleBorrowBank={onToggleBorrowBank} onToggleAddFriends={onToggleAddFriends} UserContext={UserContext} />
          ))}

          <div className='grid justify-end px-3'>
            <ButtonScope
              onClick={onToggleAddFriends}
            >ADD USERS</ButtonScope>
          </div>
        </div>
      </div>

    )

}


export default User
