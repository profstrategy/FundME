import { useReducer, useEffect, createContext } from 'react';
import { User, AddUser, BorrowForm, BorrowBank, Deposit, Navbar, SearchFriends, Cover, GetFriends, ButtonScope } from './Components'
import './App.css'
import { initialUsers } from './Contents/content'

function App() {

  function reducer(state, action) {
    switch (action.type) {
      case "toggleBorrowFriend":
        return {
          ...state,
          borrowFriend: !state.borrowFriend ? action.payload : false,
          borrowBank: false,
          deposit: false,
          addFriends: false

        }
      case "toggleBorrowBank":
        return {
          ...state,
          borrowBank: !state.borrowBank ? action.payload : false,
          borrowFriend: false,
          deposit: false,
          addFriends: false

        }
      case "toggleDeposit":
        return {
          ...state, deposit: !state.deposit ? action.payload : false,
          borrowBank: false,
          borrowFriend: false,
          addFriends: false
        }

      case "toggleAddFriends":
        return {
          ...state,
          addFriends: !state.addFriends ? action.payload : false,
          borrowBank: false,
          borrowFriend: false,
          deposit: false

        }

      case "addFriends":
        return {
          ...state,
          friends: [...state.friends, action.payload],
          addFriends: false
        }

      case "deleteFriends":
        return {
          ...state,
          friends: state.friends.filter((friend) => friend.id !== action.payload.id)
        }

      case "lender":
        return {
          ...state,
          lender: action.payload
        }

      case "amount":
        return {
          ...state,
          amount: action.payload
        }

      case "deposit":
        return {
          ...state,
          deposit: action.payload
        }

      case "depositFriend":
        return {
          ...state,
          depositFriend: action.payload
        }

      case "toggleFriendList":
        return {
          ...state,
          toggleFriendList: !state.toggleFriendList ? action.payload : false,
        }


      case "selectBorrow":
        const updatedFriends = state.friends.map((update) => ({
          ...update,
          isSelected: update.name === action.payload
        }));

        return {
          ...state,
          friends: updatedFriends,
        };

      case "getFriendList":

        return {
          ...state,
          searchList: action.payload
        };

      case "searchFriendList":

        const searchFriendList = state.friends.map((update) => ({
          ...update,
          isSelected: update.name === action.payload
        }))

        return {
          ...state,
          friends: searchFriendList
        }

      case "showIcon":
        return {
          ...state,
          showIcon: !state.showIcon,
          toggleFriendList: true

        }

      case "showFriendModal":
        const showFriendModal = state.friends.map((update) => ({
          ...update,
          nameSelected: update.name === action.payload
        }))
        return {
          ...state,
          showFriendModal: showFriendModal
        }



      default:
        return state
    }
  }

  const initialStates = { borrowFriend: false, borrowBank: false, deposit: false, addFriends: false, friends: initialUsers, selectBorrow: null, searchList: '', searchFriendList: '', showIconFriends: false }
  const [state, dispatch] = useReducer(reducer, initialStates)


  const { borrowFriend, borrowBank, deposit, addFriends, friends, depositFriend, searchFromlist, showIconFriends, } = state;

  const handleIselectedToBorrow = (e) => {
    const lender = e.target.value;

    const compare = borrowFriend.name === lender
    dispatch({ type: "lender", payload: lender });

    if (compare) {
      dispatch({ type: "selectBorrow", payload: lender });
    }
  };

  // const handleSelectedAmtToDeposit = (e) => {
  //   const depositFriend = Number(e.target.value);

  //   dispatch({ type: "depositFriend", payload: depositFriend });
  //   dispatch({ type: "selectDeposit", payload: depositFriend })
  // }

  function handleSearchList(e) {
    const searchName = e.target.value
    dispatch({ type: "getFriendList", payload: searchName })
    dispatch({ type: "searchFriendList", payload: searchName })
  }

  // useEffect(() => {
  //   handleIselectedToBorrow()

  //   window.addEventListener('change', handleIselectedToBorrow)
  //   return () => {window.removeEventListener('change', handleIselectedToBorrow)}
  // },[ handleIselectedToBorrow, borrowFriend, lender ])

  // const handleDeleteFriends = (id) => {
  //   dispatch(())
  // }

  // const handleShowBorrowBank = () => {

  //   window.innerWidth <= 640 ? setShowBorrowBank((prevShowBorrowBank) => !prevShowBorrowBank) && setShowUser((prevShowUser) => !prevShowUser) : setShowBorrowBank((prevShowBorrowBank) => !prevShowBorrowBank)

  //  setSelectBorrowFriend('')
  //  setShowDeposit('')
  //   setOpenAddUser('')
  // };

  // const handleShowDeposit = () => {

  //   window.innerWidth <= 640 ? setShowDeposit((prevShowDeposit) => !prevShowDeposit) && setShowUser((prevShowUser) => !prevShowUser) : setShowDeposit((prevShowDeposit) => !prevShowDeposit)

  //   setShowBorrowBank('')
  //   setSelectBorrowFriend('')
  //   setOpenAddUser('')
  // };

  const UserContext = createContext()
  return (
    <div className=' grid'>
      
      <Navbar />
      <div className='grid grid-rows-1 gap-20' >

      <Cover
          color='black'
          bgColor='white'
          width="3/6"
          paddingX='3'
        >
          <div className='flex justify-between items-center px-1'>
            <h6 className='text-blue-300'>FundME</h6>
            <div>
              <p className='text-sm'>X Bank account</p>
              <em> X balance: </em>
            </div>
          </div>
          
        </Cover>
        <SearchFriends
          value={searchFromlist}
          onChange={handleSearchList}
          placeholder={'Search friends from your friend list'}
        />

        <UserContext.Provider value={{
          onDelete: dispatch,
        }}>
          <User onToggleBorrowFriend={(friend) => dispatch({ type: 'toggleBorrowFriend', payload: friend })}

            onToggleDeposit={(friend) => dispatch({ type: "toggleDeposit", payload: friend })}

            onToggleAddFriends={(friend) => dispatch({ type: "toggleAddFriends", payload: friend })} friends={friends}

            onToggleBorrowBank={(friend) => dispatch({ type: "toggleBorrowBank", payload: friend })}

            UserContext={UserContext}
          />
        </UserContext.Provider>

        {borrowFriend && <BorrowForm borrowFriend={borrowFriend} dispatchFriendAmt={dispatch} handleIselectedToBorrow={() => handleIselectedToBorrow} showIconFriends={showIconFriends} onshowIcon={dispatch} />}
        {borrowBank && <BorrowBank borrowBank={borrowBank} />}
        {deposit && <Deposit depositFriend={depositFriend} deposit={deposit} handleSelectedAmtToDeposit={() => handleSelectedAmtToDeposit} />}
      </div>

      <div className='h-full bg-neutral-900 fixed right-0 lg:w-80 w-full md:w-40 flex flex-col'>
        <ButtonScope />
      <GetFriends />

        {addFriends && <AddUser onAddUsers={(friend) => dispatch({ type: "addFriends", payload: friend })} />}
      </div>
    </div >
  );
}

export default App;