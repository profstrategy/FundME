import { user, close, usersm } from '../assets';
import { ButtonScope, CheckProfile } from '../Components';
import { UseFundMe } from '../Context/FundMeContext';


const UserProfile = ({ user }) => {
  const { dispatch } = UseFundMe()

  return (
    <div className='py-3 px-7 relative'>
      <li className={`px-2 ${user.isSelected || user.juSelected || user.nameSelected ? 'bg-green-500' : ''} list-none flex flex-wrap text-initial justify-between items-center bg-gray-950 rounded-lg mt-2`}>
        <img className='rounded-full' src={user.image} alt='user' />
        <h5 className={`text-white`}>{user.name}</h5>

      </li>
      <img src={close} className="absolute top-3 iphonesm:bg-[#6D7D93] w-4 md:bg-gray-950  tablet:bg-[#6D7D93] rounded-full right-5 z-50 " onClick={() => dispatch({ type: "deleteFriends", payload: user })} alt='close' />

      <div className='flex justify-between w-full items-center shadow-lg lg:shadow-zinc-500 iphonesm:shadow-[#1C1D24] mt-2 px-2'>
        <p className={`${user.balance <= 10 ? 'text-red-500' : 'text-white md:text-black lg:text-black'}`}>${user.balance}</p>
        <h6 className={` text-end text-xs col-end-3 ${user.balance <= 10 ? 'text-red-500' : 'text-green-500'}`}>{user.balance <= 10 ? 'Low balance' : 'Normal'}</h6>
        <CheckProfile
          user={user.balance}
          styles={'text-sm'}
        >See profile</CheckProfile>
      </div>
    </div>
  )
}

const User = () => {
  const { friends, onToggleAddFriends, navbar } = UseFundMe()

  return (
    <>
      {<div className={`${navbar ? "m-auto w-4/6 iphonesm:w-4/6 iphonesm:relative iphonesm:left-5" : "m-auto w-5/6 md:w-2/6 tablet:w-4/6 lg:w-2/6 iphonesm:m-auto"} `}>
        <div className={`max-sm:bg-[#0D0D0D] lg:bg-white md:bg-white rounded-lg h-auto w-full shadow-zinc-700 shadow-md pb-3`}>
          <div className='flex justify-between items-center px-2 border-b-2 border-[#1C1D24] h-10'>
            <h1 className='col-end-2 max-sm:text-[#ffffff] sm:text-initial'>Users</h1>
            <img src={window.innerWidth <= 750 ? usersm : user} alt='user' className='col-start-7 object-contain w-3' />
          </div>
          {friends.map((user) => (
            <UserProfile user={user} key={user.id} />
          ))}
        </div>
      </div>}
    </>
  )
}

export default User;
