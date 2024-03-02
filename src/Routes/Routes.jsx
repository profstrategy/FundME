import { createBrowserRouter} from "react-router-dom";
import { AppLayOut, CurrentProfile, Intro, SearchBarMobile, SearchFundMeFriends, SearchFundMeUsers, UserActivity, UserDetails } from "../Components/";

let isMobile = window.innerWidth <= 767;
export const router = createBrowserRouter([

    {
        path: '/',
        element: <Intro />,
    },

    {
        path: 'getfriends',
        element: <SearchBarMobile />,
            children : [
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
                        }
                    ]
                }
         ]
        
    },

    {
        path:'app', 
        element: <AppLayOut />,
        children: [
            {
                path:'fundmeusers', element: <SearchFundMeUsers />,
            },
            {
                path:'fundmefriends', element: <SearchFundMeFriends />,
            },
            {
                path: 'fundmeusers/:id', element: <CurrentProfile />
            } 
        ]
    }
   


])