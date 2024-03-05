import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { FundMeProvider, UseFundMe } from '../Context/FundMeContext'

import { getProfile } from '../features/fetchSlice/fetchUsers'
import Spinner from '../skeleton/Spinner'
import ErrorMessage from './ErrorMessage'
import GoBack from './GoBack'
import { arrowLeft } from '../assets'
import UserActivity from './UserActivity'
import UserDetails from './UserDetails'

const CurrentProfile = () => {
    const [currNavigated, setcurrNavigated] = useState(false);
    const { arrowBacktoUsers } = UseFundMe();
    const [activeTab, setActiveTab] = useState("details");
    const [activetTabStyle, setActiveTabStyle] = useState(0)
    const navigateusers = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const { profile, isLoading, error, selectedUser } = useSelector(store => store.data);

    useEffect(() => {
        dispatch(getProfile(id));
    }, [dispatch, id]);

    function handleTabChange(tab) {
        setActiveTab(tab);
    }

    const handleNavigateUsers = () => {
        if (!currNavigated) {
          
        }
      };

    const renderContent = () => {
        switch (activeTab) {
            case "details":
                return (<UserDetails userId={id} /> && <GoBack />);
            case "useractivity":
                return <UserActivity userId={id} />;
            default:
                return null;
        }
    };

    // check if profile exist
    if (!profile) {
        return <p className='text-white z-50'>Loading profile...</p>;
    }


    const { last_name, amount, image } = profile;

    if (isLoading) return <Spinner />
    if (error) return <ErrorMessage />
    return (
        <FundMeProvider>
            <div className='bg-[#202225] mt-[1px] overflow-y-auto lg:min-h-50 tablet:h-screen iphonesm:h-screen iphonesm:max-h-[30rem] tablet:max-h-[30rem]  max-h-60 '>
                <div className='flex justify-between px-2 items-center mt-2'>
                    <img src={image} className='rounded-full object-contain w-10' />
                    <div className='flex'>
                        <span className={`flex w-3 h-3 me-3 ${amount <= 40 ? 'bg-gray-200' : amount <= 90 ? 'bg-blue-700' : amount <= 200 ? 'bg-teal-500' : amount <= 300 ? 'bg-purple-500' : amount <= 500 ? 'bg-green-500' : amount <= 700 ? 'bg-indigo-500' : amount <= 1000 ? 'bg-green-500' : amount <= 2000 ? 'bg-brown-700' : 'bg-white-400'} dark:bg-teal-700 rounded-full`}></span>
                        <span className="flex w-2 h-2 me-3 bg-gray-900 rounded-full dark:bg-lime-700"></span>
                        <span className={`flex w-2 h-2 me-3 bg-blue-600 rounded-full  ${amount <= 40 ? 'bg-teal-200' : amount <= 90 ? 'bg-green-700' : amount <= 200 ? 'bg-purple-500' : amount <= 300 ? 'bg-indigo-500' : amount <= 500 ? 'bg-brown-500' : amount <= 700 ? 'bg-yelow-500' : amount <= 1000 ? 'bg-cyan-500' : amount <= 2000 ? 'bg-stone-700' : 'bg-orange-400'}`}></span>
                    </div>
                </div>

                <div className='bg-[#17181A] m-auto min-h-40 mt-3 rounded-lg w-5/6 px-3 text-white'>
                    <div className='text-stone-500 flex justify-between items-center '>
                        <GoBack
                            onClick={handleNavigateUsers}
                            value={arrowBacktoUsers}
                        />
                        <h4>username</h4>
                        <span className='text-white'>{`${last_name}#${id}`}</span>
                    </div>


                    <ul className='flex justify-around w-full items-center text-stone-500 border-b-[1px] w-full border-stone-700 mt-5 mb-2 py-2'>
                        <li onClick={
                            () => {
                                handleTabChange('details')
                                setActiveTabStyle(0)
                            }

                        } className={`cursor-pointer ${activetTabStyle === 0 ? 'bg-[#0D0D0D] px-3 py-1 rounded-md text-white' : ''}`}>User details</li>
                        <li onClick={() => {
                            handleTabChange('useractivity')
                            setActiveTabStyle(1)
                        }} className={`cursor-pointer ${activetTabStyle === 1 ? 'bg-[#0D0D0D] px-3 py-1 rounded-md text-white' : ''}`}>Activity</li>
                    </ul>
                    {renderContent()}
                    <Outlet />
                </div>
            </div>
        </FundMeProvider>
    );
};

export default CurrentProfile;

