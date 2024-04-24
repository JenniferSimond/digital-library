import { useState } from 'react'
import logo from './assets/logo.svg'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/Navigations'
import Books from './components/Books'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'


function App() {
  const [token, setToken] = useState('')

  return (
    
      <div className='home-div'>
        <div>
          <h1><img id='logo-image' src={logo}/>Legilimens Online Library</h1>
          <Navigation />
        </div>
            <Routes>
              <Route path='/books' element={<Books />}/>
              <Route path='/account' element={<Account />}/>
              <Route path='/login' element={<Login setToken={setToken} />}/>
              <Route path='/register' element={<Register />}/>
            </Routes>
      </div>

     
    
  )
}

export default App
