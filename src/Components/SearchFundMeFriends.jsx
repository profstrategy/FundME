import React from 'react'

import SearchFriendsScope from './SearchFriendsScope'

const SearchFundMeFriends = () => {
  return (
        <div className='bg-stone-950 overflow-y-auto h-60 max-h-60'>
      <SearchFriendsScope
        styles="grid m-auto mt-2"
        placeholder='Search friends'
       />
    </div>
  )
}

export default SearchFundMeFriends
