import React from 'react'

import { UseFundMe } from '../Context/FundMeContext'
import SearchFriendsScope from './SearchFriendsScope'

const SearchFundMeFriends = () => {
    const { handleSearchList, searchFromlist } = UseFundMe()
  return (
        <div className='bg-stone-950 overflow-y-auto h-40 max-h-40'>
      <SearchFriendsScope
        onChange={handleSearchList}
        value={searchFromlist}
        styles="grid m-auto "
        placeholder='Search friends'
       />
    </div>
  )
}

export default SearchFundMeFriends
