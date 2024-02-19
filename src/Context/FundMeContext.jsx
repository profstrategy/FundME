import { createContext, useContext, useReducer } from "react";

import { initialUsers } from '../Contents/content'

const fundMeContext = createContext()

function FundMeProvider({ children }) {
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

    const initialStates = { borrowFriend: false, borrowBank: false, deposit: false, addFriends: false, friends: initialUsers, selectBorrow: null, searchList: '', searchFriendList: '',  signIcon: true, arrowIcon: false }

    const [{ borrowFriend, borrowBank, deposit, addFriends, friends, depositFriend, searchFromlist, arrowIcon,  }, dispatch] = useReducer(reducer, initialStates)

    const handleIselectedToBorrow = (lender) => {
        const compare = borrowFriend && borrowFriend.name === lender;
        dispatch({ type: "lender", payload: lender });

        if (compare) {
            dispatch({ type: "selectBorrow", payload: lender });
        }
    };

    function handleSearchList(e) {
        const searchName = e.target.value
        dispatch({ type: "getFriendList", payload: searchName })
        dispatch({ type: "searchFriendList", payload: searchName })
    }

    function onToggleBorrowFriend(friend) {
        dispatch({ type: 'toggleBorrowFriend', payload: friend })
    }

    function onToggleDeposit(friend) {
        dispatch({ type: "toggleDeposit", payload: friend })
    }

    function onToggleAddFriends(friend) {
        dispatch({ type: "toggleAddFriends", payload: friend })
    }

    function onToggleBorrowBank(friend) {
        dispatch({ type: "toggleBorrowBank", payload: friend })
    }

    function onAddUsers(friend) { dispatch({ type: "addFriends", payload: friend }) }

    return <fundMeContext.Provider value={{
        borrowBank,
        borrowFriend,
        friends,
        addFriends,
        depositFriend,
        searchFromlist,
        deposit,
        arrowIcon,
        dispatch,
        onToggleAddFriends,
        onToggleBorrowFriend,
        onToggleBorrowBank,
        onAddUsers,
        onToggleDeposit,
        handleSearchList,
        handleIselectedToBorrow,

    }}>{children}</fundMeContext.Provider>

}

function UseFundMe() {
    const context = useContext(fundMeContext)
    if (!context) throw new Error('Context is used in an unusual location')
    return context
}

export { FundMeProvider, UseFundMe }