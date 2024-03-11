import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFriends } from '../features/fetchSlice/dataSlice';
import Loader from '../skeleton/Loader';
import ButtonScope from './ButtonScope';

const UserActivity = () => {
  const { profile } = useSelector(store => store.data) || {};
  const dispatch = useDispatch()
  if (!profile) return <Loader />

  const {
      surname,
      last_name,
      amount,
      image
  } = profile;

const handleSubmit = () => {

  const newUser = {
    surname: surname,
    last_name: last_name,
    amount: amount,
    image: image
  };
  dispatch(addFriends(newUser));
  console.log(newUser)
};


  return (
    <div>
      <span className='text-[.7rem] grid justify-center'>Add {last_name} as friend before any activities</span>
      <ButtonScope
        styles={`m-auto py-2 px-3 grid justify-center`}
        onClick={handleSubmit}
      >Add {last_name}</ButtonScope>

      <div>
        {/* <ButtonScope>Borrow</ButtonScope>
        <ButtonScope>Deposit</ButtonScope>
        <ButtonScope></ButtonScope> */}
      </div>
    </div>
  )
}

export default UserActivity
