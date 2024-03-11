
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { user, usersm } from '../assets';
import { UseFundMe } from '../Context/FundMeContext';
import FriendList from './FriendList';


const User = () => {
  const { navbar } = UseFundMe()
  const { friends } = useSelector(store => store.data)

  return (
    <>
      <div className={`${navbar ? "m-auto w-4/6 iphonesm:w-4/6 iphonesm:relative iphonesm:left-5 lg:w-2/6 md:w-2/6" : "m-auto w-5/6 md:w-2/6 tablet:w-4/6 lg:w-2/6 iphonesm:m-auto"} `}>
        <div className={`max-sm:bg-[#0D0D0D] lg:bg-white md:bg-white rounded-lg h-auto w-full shadow-zinc-700 shadow-md pb-3`}>
          <div className='flex justify-between items-center px-2 border-b-2 border-[#1C1D24] h-10'>
            <h1 className='col-end-2 max-sm:text-[#ffffff] sm:text-initial'>Users</h1>
            <img src={window.innerWidth <= 750 ? usersm : user} alt='user' className='col-start-7 object-contain w-3' />
          </div>
            {friends.map((profile) => (
              <FriendList profile={profile} key={profile.id} />
            ))}
        </div>
      </div>
    </>
  )
}

export default User;
