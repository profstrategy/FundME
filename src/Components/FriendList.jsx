import { useLoaderData } from 'react-router-dom';
import { close } from '../assets';
import { CheckProfile } from '../Components';
import { getProfile } from '../features/fetchSlice/fetchUsers';

const FriendList = ({ profile }) => {
  // const { friends } = useLoaderData() || {};
  
  if (!profile) {
    
    return <div>Loading...</div>;
  }

  const { surname, last_name, image, amount } = profile;

  return (
    <div className='py-3 px-7 relative'>
      <li className={`px-2 list-none flex flex-wrap text-initial justify-between items-center bg-gray-950 rounded-lg mt-2`}>
        <img className='rounded-full' src={image} alt='user' />
        <h5 className={`text-white`}>{`${surname} ${last_name}`}</h5>
      </li>
      <img src={close} className="absolute top-3 iphonesm:bg-[#6D7D93] w-4 md:bg-gray-950  tablet:bg-[#6D7D93] rounded-full right-5 z-50 " alt='close' />

      <div className='flex justify-between w-full items-center shadow-lg lg:shadow-zinc-500 iphonesm:shadow-[#1C1D24] mt-2 px-2'>
        <p className={`${amount <= 10 ? 'text-red-500' : 'text-white md:text-black lg:text-black'}`}>${amount}</p>
        <h6 className={` text-end text-xs col-end-3 ${amount <= 10 ? 'text-red-500' : 'text-green-500'}`}>{amount <= 10 ? 'Low' : 'Normal'}</h6>
        <CheckProfile
          user={amount}
          styles={'lg:text-sm md:text-[.6rem] tablet:text-sm iphonesm:text-[.4rem]'}
        >See friends</CheckProfile>
      </div>
    </div>
  );
};

export async function Loader({ params }) {
  const friends = await getProfile(params.friendName); 
  return friends;
}

export default FriendList;

