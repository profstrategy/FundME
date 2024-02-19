import './Root.css'
import {  Intro, AppLayOut, SearchFundMeUsers, SearchFundMeFriends } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Root() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='app' element={<AppLayOut />}>
        <Route path='fundmeusers' element={<SearchFundMeUsers />} />
        <Route index path='fundmefriends' element={<SearchFundMeFriends />} />
      </Route>
      <Route path='*' element={<h2 className='text-white'>not found</h2>} />
    </Routes>
  </BrowserRouter>
  );
}

export default Root