import { createBrowserRouter } from "react-router-dom";
import { Loader as friendLoader } from "../Components/FriendList";
import { AppLayOut, CurrentProfile, FriendList, Intro, SearchBarMobile, SearchFundMeFriends, SearchFundMeUsers, UserActivity, UserDetails } from "../Components/";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Intro />,
    },

    {
        path: 'getfriends',
        element: <SearchBarMobile />,
        children: [
            {
                path: 'fundmeusers',
                element: <SearchFundMeUsers />
            },
            {
                path: 'fundmefriends', element: <SearchFundMeFriends />
            },
            {
                path: 'fundmeusers/:id',
                element: < CurrentProfile />,
                
                children: [
                    {
                        path: 'userdetails',
                        element: <UserDetails />
                    },

                    {
                        path: 'useractivity',
                        element: <UserActivity />
                    },
                    {
                        path: 'fundmeusers/:friendName', 
                        element: <FriendList />,
                        loader: friendLoader,
                    }
                ]
            }
        ]

    },

    {
        path: 'app',
        element: <AppLayOut />,
        
        children: [
            {
                path: 'fundmeusers', element: <SearchFundMeUsers />,
            },
            {
                path: 'fundmefriends', element: <SearchFundMeFriends />,
            },
            {
                path: 'fundmeusers/:id', element: <CurrentProfile />
            },
            {
                path: 'fundmeusers/:friendName', element: <FriendList />, loader: friendLoader,
            }
        ]
    }



])