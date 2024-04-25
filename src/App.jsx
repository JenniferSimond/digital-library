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
    
  
        <div className='.home-div'>
          <div className='nav-div'>
            <h1><img id='logo-image' src={logo}/><span className='logo-span'>Legilimens</span> <span className='logo-span2'>- Online -</span> <span className='logo-span'>Library</span></h1>
            <div className='nav-link-text'>
              <Navigation />
            </div>
          </div>
             <div className='inner-home-wrapper'>
               <div className='inner-home-div'>
                    <Routes>
                      <Route path='/books' element={<Books />}/>
                      <Route path='/account' element={<Account />}/>
                      <Route path='/login' element={<Login setToken={setToken} />}/>
                      <Route path='/register' element={<Register setToken={setToken}/>}/>
                    </Routes>
               </div>
             </div>
        </div>
      
     
     
    
  )
}

export default App
