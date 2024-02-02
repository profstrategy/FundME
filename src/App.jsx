import { useReducer, useEffect } from 'react';
import { User, AddUser, BorrowForm, BorrowBank, Deposit, Navbar } from './Components'
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
          return{
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

              case "selectBorrow":
                return {
                  ...state,
                  friends: state.friends.includes(action.payload)
                    ? state.friends
                    : [...state.friends, action.payload],
                };
              

      default:
        return state
    }
  }

  const initialStates = { borrowFriend: false, borrowBank: false, deposit: false, addFriends: false, friends: initialUsers, lender: '', amount: ''}
  const [state, dispatch] = useReducer(reducer, initialStates)
  

  const { borrowFriend, borrowBank, deposit, addFriends, friends, lender, amount } = state;

  const handleIselectedToBorrow = () => {
    

    const isToBorrow = borrowFriend.name === lender
    dispatch({type: "selectBorrow", payload: isToBorrow})

    console.log('done')
  }

  useEffect(() => {
    handleIselectedToBorrow()

    window.addEventListener('change', handleIselectedToBorrow)
    return () => {window.removeEventListener('change', handleIselectedToBorrow)}
  },[ handleIselectedToBorrow, borrowFriend, lender, dispatch ])

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
  return (
    <div className=' bg-black'>
      <Navbar />
      <div className={`min-h-screen grid grid-cols-1 items-center justify-center`}>

        <div
          className={` w-4/6 md:w-5/6 lg:w-4/6 relative grid justify-center m-auto gap-3 max-sm:left-4  ${borrowFriend || borrowBank || deposit ? 'grid grid-cols-2 lg:w-4/6 md:w-4/6 max-sm:grid-cols-1' : ''}`}
        >

          <User onToggleBorrowFriend={(friend) => dispatch({ type: 'toggleBorrowFriend', payload: friend })}

             onToggleDeposit={(friend) => dispatch({ type: "toggleDeposit", payload: friend })}
             
             onToggleAddFriends={(friend) => dispatch({ type: "toggleAddFriends", payload: friend })} friends={friends}
             
             onToggleBorrowBank={(friend) => dispatch({ type: "toggleBorrowBank", payload: friend })}

             onDelete={dispatch}
              />

          {borrowFriend && <BorrowForm borrowFriend={borrowFriend} amount={amount}  dispatchFriendAmt={dispatch} handleIselectedToBorrow={handleIselectedToBorrow} />}
          {borrowBank && <BorrowBank borrowBank={borrowBank} />}
          {deposit && <Deposit deposit={deposit}/>}

        </div>
      </div>

      <div
        className={`w-4/6 m-auto grid grid-cols-1 md:w-3/6 lg:w-2/6 max-sm:left-4 max-sm:relative mt-4`}
      >
        {addFriends && <AddUser onAddUsers={(friend) => dispatch({ type: "addFriends", payload: friend })} />}
      </div>
    </div>
  );
}

export default App;