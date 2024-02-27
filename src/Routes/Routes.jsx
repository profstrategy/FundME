import { createBrowserRouter } from "react-router-dom";
import { AppLayOut, Intro, SearchBarMobile, SearchFundMeFriends, SearchFundMeUsers } from "../Components/";
import SearchFundMe from '../Components/FundUsers'

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Intro />,
    },

    {
        path: '/app',
        element: <AppLayOut />,
        children: [
            {
                path: 'fundmeusers',
                element: <SearchFundMeUsers />,
            },
            {
                path: 'fundmefriends',
                element: <SearchFundMeFriends />,
            },

            {
                path: 'getfriends',
                element: <SearchBarMobile />,
                children: [
                    {
                        path: 'fundmeusers',
                        element: <SearchFundMe />,
                     
                    },
                    {
                        path: 'fundmefriends',
                        element: <SearchFundMe />,
                    
                    },
                ],
            },
        ],
    },

   
])