import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { arrowLeft } from '../assets';
import { SideBarNav } from '../Components'
import { UseFundMe } from '../Context/FundMeContext'
import GoBack from './GoBack';


const GetFriends = ({ children }) => {
  const [hasNavigated, setHasNavigated] = useState(false);
  const { arrowBacktoFriends } = UseFundMe();
  const navigate = useNavigate()

const handleNavigate = () => {
  if (!hasNavigated) {
    navigate(-1);
    setHasNavigated(true);
  }
}


  return (
    <div className={`bg-[#0D0D0D] border-t-[1px] border-[#6D7D93] shadow-sm w-full shadow-[#6D7D93] h-45 grid grid-cols-1 grid-flow-row max-sm:hidden`}>
      <GoBack src={arrowBacktoFriends ? arrowLeft : ''} value={arrowBacktoFriends}  onClick={handleNavigate} />
      <h5 className='text-white text-center'>Connect with friends here!!</h5>
      <SideBarNav sidestyles='px-5 py-1 text-sm' />
      {children}
    </div>
  );
}

export default GetFriends
