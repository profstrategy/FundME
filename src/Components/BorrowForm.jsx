import React, { useState } from 'react';

import { BorrowScope, Cover, ButtonScope } from '../Components';
import { minus, plus } from '../assets';

const BorrowForm = ({ showBorrowFriend }) => {
  const [showIcon, setShowIcon] = useState(plus)

  const handleShowIcon = () => {
    setShowIcon(!showIcon)
  }
  return (
    <>
      {showBorrowFriend &&
        <div className='mt-5 md:mt-0'>
          <Cover
            color='black'
            bgColor='white'
            height='10'
            paddingX='3'
            marginTop='3'
          >
            <div className='flex items-center px-1 h-10'>
              <div className='bg-black flex rounded-full justify-center h-5 cursor-pointer'>
                <img src={`${showIcon ? minus : plus}`} className='w-5' onClick={handleShowIcon} />
              </div>
              <h6 className='text-black m-auto'>You want to borrow from x</h6>
            </div>
          </Cover>
          <div className={`bg-white rounded-lg h-auto w-full shadow-md shadow-zinc-300 pb-3 pt-3`}>
            <BorrowScope
              bgColor='white'
              height='auto'
              py='3'
            >
              <input type='text' placeholder='name of lender' className='w-5/6 m-auto grid py-2 bg- shadow-md shadow-slate-200 border-slate-950 border-2 rounded' />

              <input type='text' className='w-5/6 m-auto grid shadow-md shadow-slate-200 border-slate-950 border-2 rounded py-2 mb-3' placeholder='amount to borrow' />

            </BorrowScope>

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
