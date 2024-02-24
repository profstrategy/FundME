import React from 'react';
import SearchFriendsScope from './SearchFriendsScope';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../features/fetchSlice/dataSlice';
import { FundUsers, Skeleton, ErrorMessage } from '../Components';

const SearchFundMeUsers = () => {
  const dispatch = useDispatch();
  const { input, isLoading, data, error } = useSelector(state => state.data);

  function handleSearchList(e) {
    dispatch(setInput(e.target.value));
  }

  return (
    <div className='bg-stone-950 overflow-y-auto h-60 tablet:h-screen iphonesm:h-screen max-h-60'>
      <SearchFriendsScope
        onChange={handleSearchList}
        value={input}
        styles="grid m-auto mt-5 tablet:w-4/6 tablet:left-28"
        placeholder='Search users'
      />
      <div className='sm:mt-10 iphonesm:mt-10 tablet:mt-20'>
        {isLoading && <Skeleton />}

        {!isLoading && data.length > 0 && (
          data.map(user => (
            <FundUsers {...user} key={user.id} />
          ))
        )}

        {error && <ErrorMessage />}
      </div>
    </div>
  );
}

export default SearchFundMeUsers;

