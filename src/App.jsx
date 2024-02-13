import './App.css'
import { BorrowBank, AddUser, BorrowForm, GetFriends, Statistics, Deposit, User, SearchFriends, Navbar } from './Components';
import { FundMeProvider } from './Context/FundMeContext';
function App() {
  return (
    <FundMeProvider>
      <div className=' grid'>
        <Navbar />
        <div className='flex flex-col gap-5 ' >
          <Statistics />
          <SearchFriends
            placeholder={'Search friends from your friend list'}
            marginY='10'
            topS='10'
          />
          <User />
          <div className='lg:hidden max-sm:visible md:hidden'>
            <AddUser />
            <BorrowForm />
            <BorrowBank />
            <Deposit />
          </div>
        </div>
        <div className='min-h-screen bg-neutral-900 fixed right-0 lg:w-80 w-full md:w-60 flex flex-col tablet:hidden items-center justify-between lg:block md:block xl:block iphonesm:hidden'>
          <GetFriends />
          <AddUser />
          <BorrowForm />
          <BorrowBank />
          <Deposit />
        </div>

      </div >
    </FundMeProvider>
  );
}

export default App;