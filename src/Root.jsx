import './App.css'
import { Intro, AppLayOut, SearchFundMeUsers, SearchFundMeFriends, SearchBarMobile, CurrentProfile } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FundMeProvider } from './Context/FundMeContext';
function Root() {

  return (
    <FundMeProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Intro />} />
          <Route path='/getfriends' element={<SearchBarMobile />} >
            <Route path='fundmeusers' element={<SearchFundMeUsers />} />
            <Route index element={<SearchFundMeFriends />} />
            <Route path='fundmefriends' element={<SearchFundMeFriends />} />
            <Route path='fundmeusers/:id' element={<CurrentProfile />} />
          </Route>

          <Route path='app' element={<AppLayOut />}>
            <Route path='fundmeusers' element={<SearchFundMeUsers />} />
            <Route path='fundmefriends' element={<SearchFundMeFriends />} />
            <Route index element={<SearchFundMeFriends />} />
            <Route path='fundmeusers/:id' element={<CurrentProfile />} />
          </Route>
          
          <Route path='*' element={<h2 className='text-white'>not found</h2>} />
        </Routes>
      </BrowserRouter>
    </FundMeProvider>
  );
}

export default Root