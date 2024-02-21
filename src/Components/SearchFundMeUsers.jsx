import React from 'react'

import { UseFundMe } from '../Context/FundMeContext'
import SearchFriendsScope from './SearchFriendsScope'

const SearchFundMeUsers = () => {
  const { handleSearchList, searchFromlist } = UseFundMe()
  return (
    <div className='bg-stone-950 overflow-y-auto h-60 max-h-60'>
      <SearchFriendsScope
        onChange={handleSearchList}
        value={searchFromlist}
        styles="grid m-auto mt-2"
        placeholder='Search users'
       />
    </div>
  )
}

export default SearchFundMeUsers
