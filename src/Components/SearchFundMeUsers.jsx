import React from 'react';
import SearchFriendsScope from './SearchFriendsScope';
import { useDispatch, useSelector } from 'react-redux';
import { setNotUser, setSearchQuery, setSelectedUser } from '../features/fetchSlice/dataSlice';
import { FundUsers, ErrorMessage, NotUser } from '../Components';
import ListSkeleton from '../skeleton/ListSkeleton'

const SearchFundMeUsers = () => {
  const dispatchQuery = useDispatch();
  const dispatchUser = useDispatch();
  const dispatchUserSelected = useDispatch()
  const { searchQuery, isLoading, data, error, notUser,selectedUser } = useSelector(state => state.data);
  let searchData = searchQuery.length > 0 ? data.filter((data) => `${data.surname} ${data.last_name}`.toLowerCase().includes(searchQuery.toLowerCase())) : data;

  function handleSearchList(e) {
    const words = e.target.value;
    const compare = words === selectedUser;
    if(!data.length) return
    dispatchQuery(setSearchQuery(words));
    if (searchData.length === 0) {
      dispatchUser(setNotUser(words));
    }

    dispatchUserSelected(setSelectedUser(compare))
  }



  return (
    <div className='bg-stone-950 overflow-y-auto tablet:h-screen iphonesm:h-screen iphonesm:max-h-[30rem] tablet:max-h-[30rem] max-h-60'>
      <SearchFriendsScope
        onChange={handleSearchList}
        value={searchQuery}
        styles="grid m-auto mt-5"
        placeholder='Search users'
      />
      <div className='sm:mt-10 iphonesm:mt-10 tablet:mt-20'>
        {isLoading && <ListSkeleton />}

        {!isLoading && searchData.length > 0 && (
          searchData.map(user => (
            <FundUsers {...user} key={user.id} />
          ))
        )}

        {error && <ErrorMessage />}
        {notUser && <NotUser />}
      </div>
    </div>
  );
}

export default SearchFundMeUsers;

