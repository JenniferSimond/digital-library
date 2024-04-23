import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/Navigations'
import Books from './components/Books'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'

function App() {
  const [token, setToken] = useState('')

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <Navigation />

      

     <Routes>
      <Route path='/books' element={<Books />}/>
      <Route path='/account' element={<Account />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register setToken={setToken} />}/>
    
     </Routes>

     
    </>
  )
}

export default App
