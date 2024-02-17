import React from 'react'
import { UseFundMe } from '../Context/FundMeContext'
import SearchFriendsScope from './SearchFriendsScope'
const SearchFundMeUsers = () => {
    const { handleSearchList, searchFromlist } = UseFundMe()
  return (
    <div>
      <SearchFriendsScope
        onChange={handleSearchList}
        value={searchFromlist}
        placeholder='Search friends'
       />
    </div>
  )
}

export default SearchFundMeUsers
