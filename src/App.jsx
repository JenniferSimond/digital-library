import { useState } from 'react'
import logo from './assets/logo.svg'
import { Route, Routes } from "react-router-dom"
import NavigationWrapper from './components/nav-components/NavigationWrapper'
import Books from './components/book-components/Books'
import SingleBook from './components/book-components/SingleBook'
import Login from './components/user-components/Login'
import Register from './components/user-components/Register'

import UserBooks from './components/reservation-components/UserBooks'



function App() {
  // TOKEN --> Passed down to children that need user authentication --> 
  //Logo passed down an prop
  // Remember --> PROPS are like Parameters 

  const [token, setToken] = useState('');
  return (
    <div className='home-div'>
      <NavigationWrapper logo={logo} />
      
      <div className='inner-home-wrapper'>
        <div className='inner-home-div'>
          <Routes>
            <Route path='/' element={<Books />} /> 
            <Route path='/books' element={<Books />} />
            <Route path='/books/:bookId' element={<SingleBook token={token}/>} />  
            <Route path='/mybooks' element={<UserBooks token={token} />} />
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route path='/register' element={<Register setToken={setToken} />} />
          </Routes>
      
        </div>
      </div>
    </div>
  )
}

export default App
