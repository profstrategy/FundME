import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfile } from '../features/fetchSlice/fetchUsers'
import Spinner from '../skeleton/Spinner'
import ErrorMessage from './ErrorMessage'

const CurrentProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { profile, isLoading, error } = useSelector(store => store.data);

    useEffect(() => {
        dispatch(getProfile(id));
    }, [dispatch, id]);

    // check if profile exist
    if (!profile) {
        return <p className='text-white z-50'>Loading profile...</p>;
    }


    const { surname, last_name, address, amount, image, phone_number, job } = profile;

    if (isLoading) return <Spinner />
    if (error) return <ErrorMessage />
    return (
        <div className='bg-[#202225] mt-[1px] overflow-y-auto h-60 tablet:h-screen iphonesm:h-screen max-h-60'>
            <div className='flex justify-between px-2 items-center mt-2'>
                <img src={image} className='rounded-full object-contain w-10' />
                <div className='flex'>
                    <span className={`flex w-3 h-3 me-3 ${amount <= 40 ? 'bg-gray-200' : amount <= 90 ? 'bg-blue-700' : amount <= 200 ? 'bg-teal-500' : amount <= 300 ? 'bg-purple-500' : amount <= 500 ? 'bg-green-500' : amount <= 700 ? 'bg-indigo-500' : amount <= 1000 ? 'bg-green-500' : amount <= 2000 ? 'bg-brown-700' : 'bg-white-400'} dark:bg-teal-700 rounded-full`}></span>
                    <span className="flex w-2 h-2 me-3 bg-gray-900 rounded-full dark:bg-lime-700"></span>
                    <span className={`flex w-2 h-2 me-3 bg-blue-600 rounded-full  ${amount <= 40 ? 'bg-teal-200' : amount <= 90 ? 'bg-green-700' : amount <= 200 ? 'bg-purple-500' : amount <= 300 ? 'bg-indigo-500' : amount <= 500 ? 'bg-brown-500' : amount <= 700 ? 'bg-yelow-500' : amount <= 1000 ? 'bg-cyan-500' : amount <= 2000 ? 'bg-stone-700' : 'bg-orange-400'}`}></span>
                </div>
            </div>

            <div className='bg-[#17181A] m-auto h-40 mt-3 rounded-lg w-5/6 px-3 text-white'>
                <div className='text-stone-500 flex justify-between'>
                    <h4>username</h4>
                    <span className='text-white'>{`${last_name}#${id}`}</span>
                </div>

                <ul className='flex justify-center gap-5 text-stone-500 border-b-green-200 mt-5'>
                    <li>User info</li>
                    <li>Activity</li>
                </ul>
            </div>
        </div>
    );
};

export default CurrentProfile;

