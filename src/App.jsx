import { useState } from 'react'
import logo from './assets/logo.svg'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/nav-components/Navigations'
import Books from './components/book-components/Books'
import SingleBook from './components/book-components/SingleBook'
import Login from './components/user-components/Login'
import Register from './components/user-components/Register'
import MyBooks from './components/reservation-components/MyBooks'


function App() {
  // TOKEN --> Passed down to children that need user authentication --> prop drilling??
  // Remember --> PROPS are like Parameters 
  const [token, setToken] = useState('');
//IMPORTANT --> Make Navigation one component --> add media query to handle mobile phone views --> max-width 425px
  return (
    <div className='home-div'>
      <div className='nav-wrapper'>
        <div className='nav-div'>
          <h1><img id='logo-image' src={logo} /><span className='logo-span'>Legilimens</span> 
          <span className='logo-span2'>- Online -</span> 
          <span className='logo-span'>Library</span></h1>
          <h2 className='nav-catchphrase'>Check Out an Adventure!</h2>
          <div className='nav-link-text'>
            <Navigation />
          </div>
        </div>
      </div>
      <div className='inner-home-wrapper'>
        <div className='inner-home-div'>
          <Routes>
            <Route path='/' element={<Books />} /> 
            <Route path='/books' element={<Books />} />
            <Route path='/books/:bookId' element={<SingleBook token={token}/>} />  
            <Route path='/account' element={<MyBooks token={token} />} />
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route path='/register' element={<Register setToken={setToken} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
