import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UseFundMe } from '../Context/FundMeContext';
import { getProfile } from '../features/fetchSlice/fetchUsers';

const FundUsers = ({ surname, last_name, image, address, id }) => {
  const { selectedUser } = useSelector(store => store.data.selectedUser);
  const { dispatch } = UseFundMe()
  const dispatchProfile = useDispatch()
  const isSelected = selectedUser === `${surname} ${last_name}`;

  const isSmallScreen = window.innerWidth <= 760;

  return (
    <div>
      <Link to={`${id}`}>
        <ul className={`flex justify-between px-2 lg:w-10/12 w-4/6 m-auto items-center rounded-md mt-1 bg-[#1C1D24] border-y-[1px] border-stone-950 ${isSelected ? 'bg-green-500' : ''}`} onClick={() => {dispatchProfile(getProfile(id))
        dispatch({ type: 'arrowBacktoUsers' })
        }}>
          <img src={image} className='rounded-full' />
          <li className='text-white list-none text-md'>{isSmallScreen ? `${surname} ${last_name}` : surname}</li>
          <li className={` list-none text-[.8rem] ${address.city ? 'text-[#002190]' : ''}`}>
            <span className=' text-[.7rem]'>{address.city}</span>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default FundUsers;


