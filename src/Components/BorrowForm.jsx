import React from 'react';

import { ButtonScope } from '../Components';
import { minus, plus } from '../assets';
import { UseFundMe } from '../Context/FundMeContext';

const BorrowForm = () => {

  const { borrowFriend, lender, amount, handleIselectedToBorrow, dispatchFriendAmt, onshowIcon, showIconFriends } = UseFundMe()
  
  return (
    <>
      {borrowFriend &&
        <div className={`mt-5 md:mt-0`}>
          <div className={`rounded-md bg-[#0D0D0D] py-3 border-[1px] border-[#6D7D93] m-auto tablet:w-4/6 iphonesm:w-5/6 iphonesm:m-auto h-auto`}>

            <form className={`w-full grid gap-3 bg-[#0D0D0D] py-3 h-auto `}>
              <h6 className='text-[#ffffff] text-md text-center m-auto px-2'>you want to borrow from {borrowFriend.name} </h6>

              <img src={`${showIconFriends ? minus : plus}`} className='w-5 visible sm:hidden bg-[#6D7D93] rounded-full relative bottom-12 left-3' onClick={() => onshowIcon({ type: "showIcon" })} />

              <input
                type='text'
                placeholder='name of lender'
                value={lender}
                className='w-5/6 m-auto grid py-2 bg-[#0D0D0D] shadow-md shadow-[#0D0D0D] border-[#1C1D24] border-2 outline-none rounded text-[#FFFFFF]'
                onChange={(e) => handleIselectedToBorrow(e.target.value)}
              />

              <input type='text' value={amount} className='w-5/6 m-auto grid py-2 bg-[#0D0D0D] shadow-md shadow-[#0D0D0D] border-[#1C1D24] border-2 outline-none rounded text-[#FFFFFF]' placeholder='amount to borrow' onChange={(e) => dispatchFriendAmt({ type: "amount", payload: Number(e.target.value) })} />
            </form>

            <div className='grid justify-end px-10'>
              <ButtonScope
                ml='1'
              >Request</ButtonScope>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default BorrowForm
