import React from 'react'
import { UseFundMe } from '../Context/FundMeContext'
import SearchFriendsScope from './SearchFriendsScope'


const SearchFundMeUsers = () => {
  const { handleSearchList, searchFromlist, users } = UseFundMe()
 
// const dispatch = useDispatch()
  return (
    <div className='bg-stone-950 overflow-y-auto h-60 max-h-60'>
      <SearchFriendsScope
        onChange={handleSearchList}
        value={searchFromlist}
        styles="grid m-auto mt-2"
        placeholder='Search users'
       />
<p className='text-white'>{users}</p>
    </div>
  )
}

export default SearchFundMeUsers
