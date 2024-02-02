import { useState } from 'react'

import { Cover, ButtonScope } from '../Components';
import { minus, plus } from '../assets';

const BorrowBank = ({  setShowUser, borrowBank }) => {
    const [showIcon, setShowIcon] = useState(plus)

    const handleShowIcon = () => {
        setShowIcon(!showIcon)
        setShowUser(showUser => !showUser)
    }
    return (
        <>
           
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
                                <img src={`${showIcon ? minus : plus}`} className='w-5 visible sm:hidden' onClick={handleShowIcon} />
                            </div>
                            <h6 className='text-black m-auto'>{borrowBank.name} want to borrow from FundME account</h6>
                        </div>
                    </Cover>
                    <div className='bg-white col-span-1 rounded-lg h-auto w-full shadow-md shadow-zinc-300 pb-3 pt-3'>
                        <form className={`w-full grid gap-3 bg-white py-3 h-auto`}>

                            <input type='text' className='w-5/6 m-auto grid shadow-md shadow-slate-200 border-slate-950 border-2 rounded py-2 mb-3' placeholder='amount to borrow' />
                        </form>


                        <div className='grid justify-end px-10'>
                            <ButtonScope
                                ml='1'
                            >Request</ButtonScope>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default BorrowBank
