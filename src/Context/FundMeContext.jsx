import { createContext, useContext, useReducer, useEffect } from "react";

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

            case "arrowBacktoFriends":
                return {
                    ...state,
                    arrowBacktoFriends: action.payload
                };

            case "arrowBacktoUsers":
                return {
                    ...state,
                    arrowBacktoUsers: !state.arrowBacktoUsers
                };

            case "arrowfront":
                return {
                    ...state,
                    arrowFront: !state.arrowFront
                };


            case "navbar":
                return {
                    ...state,
                    navbar: !state.navbar,

                }


            default:
                return state
        }
    }

    const initialStates = { borrowFriend: false, borrowBank: false, deposit: false, addFriends: false, selectBorrow: null, signIcon: true, arrowBacktoFriends: false, arrowBacktoUsers: true, navbar: false }

    const [{ borrowFriend, borrowBank, deposit, addFriends, depositFriend, searchFromlist, arrowBacktoFriends, arrowBacktoUsers, arrowFront, navbar }, dispatch] = useReducer(reducer, initialStates)




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
        addFriends,
        depositFriend,
        searchFromlist,
        deposit,
        arrowFront,
        arrowBacktoFriends,
        arrowBacktoUsers,
        navbar,
        dispatch,
        onToggleAddFriends,
        onToggleBorrowFriend,
        onToggleBorrowBank,
        onAddUsers,
        onToggleDeposit,

    }}>{children}</fundMeContext.Provider>

}

function UseFundMe() {
    const context = useContext(fundMeContext)
    if (!context) throw new Error('Context is used in an unusual location')
    return context
}

export { FundMeProvider, UseFundMe }