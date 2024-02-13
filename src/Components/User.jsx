
import { user, angleDown, angleUp, close, usersm } from '../assets';
import { ButtonScope } from '../Components';
import { UseFundMe } from '../Context/FundMeContext';

const UserProfile = ({ user }) => {
  const { onToggleBorrowFriend, onToggleBorrowBank, onToggleDeposit, icon, modal, dispatch } = UseFundMe()
  // const [state, dispatch] = useReducer(reducer, initialState)
  // const { modal, icon } = state



  // useEffect(() => {
  //   dispatch({ type: "icon" })
  //   dispatch({ type: "modal" })

  //   window.addEventListener('click', dispatch)
  // }, [dispatch])
  

  return (
    <div className='py-3 px-7 relative'>
      <>
        <li className={`${user.isSelected || user.juSelected || user.nameSelected ? 'bg-green-500' : ''} list-none flex text-initial justify-between items-center bg-gray-950 rounded-lg mt-2`}>

          <img className='rounded-full' src={user.image} />
          <h5 className={`text-white`}>{user.name}</h5>
          <img src={`${icon ? angleDown : angleUp}`} className='cursor-pointer' onClick={() => {
            dispatch({ type: "icon" });
            dispatch({ type: "modal" });
          }} />

        </li>

          <img src={close} className="absolute top-3 w-4 md:bg-gray-950  tablet:bg-[#6D7D93] rounded-full right-5 z-50 " onClick={() => dispatch({type: "deleteFriends", payload: user})} />
        
        {modal &&
          <div className='grid grid-cols-1 search'>
            <div className='w-full col-end-3 flex flex-col h-auto gap-1 px-3 bg-stone-50 py-2 rounded-md shadow-lg shadow-zinc-500 mt-2'>

              <li className={`hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 list-none`} onClick={() => { onToggleBorrowFriend(user) }}>Borrow from friend</li>
              <li className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150 list-none' onClick={() => onToggleBorrowBank(user)}>Borrow from Bank</li>
              <li className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150 list-none' onClick={() => onToggleDeposit(user)}>Make a Deposit</li>
            </div>
          </div>
        }

        <div className='grid grid-cols-2 w-full items-center shadow-lg lg:shadow-zinc-500 max-sm:shadow-[#1C1D24] mt-2 px-2'>
          <p className={`${user.balance <= 10 ? 'text-red-500' : 'text-white md:text-black lg:text-black'}`}>X account balance is ${user.balance}</p>

          <h6 className={`col-end-3 text-end text-xs ${user.balance <= 10 ? 'text-red-500' : 'text-blue-500'}`}>{user.balance <= 10 ? 'Low balance' : 'Normal'}</h6>
        </div>
      </>
    </div>
  )
}

const User = () => {
const { friends, onToggleAddFriends } = UseFundMe()
  
    return (
      <div className=' m-auto w-5/6 md:w-2/6 tablet:w-4/6 lg:w-2/6 iphonesm:m-auto'>
  
        <div className={`max-sm:bg-[#0D0D0D] lg:bg-white md:bg-white rounded-lg h-auto w-full shadow-zinc-700 shadow-md pb-3`}>
          <div className='flex justify-between items-center px-2 border-b-2 border-[#1C1D24] h-10'>
            <h1 className='col-end-2 max-sm:text-[#ffffff] sm:text-initial'>Users</h1>
            <img src={window.innerWidth <= 750 ? usersm : user} alt='user' className='col-start-7 object-contain w-3' />
          </div>
          {friends.map((user) => (
            <UserProfile user={user} key={user.id}  />
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
