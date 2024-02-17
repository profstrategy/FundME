import './Root.css'
import {  Intro, AppLayOut, FundMeFriends, UserFriends } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Root() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='app' element={<AppLayOut />}>
        <Route index element={<p>List</p>} />
        <Route path="usersfriends" element={<UserFriends />} />
        <Route path='fundmefriends' element={<FundMeFriends />} />
      </Route>
      <Route path='*' element={<h2 className='text-white'>not found</h2>} />
    </Routes>
  </BrowserRouter>
  );
}

export default Root