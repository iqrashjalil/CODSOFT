import react,{ useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Companies } from './pages/Companies'
import { Login } from './pages/user_authentications/Login'
import { Signup } from './pages/user_authentications/Signup'

function App() {

  return (
    <>
      {/* <Home /> */}
      {/* <Companies/> */}
      <Login />
      {/* <Signup /> */}

    </>
  )
}

export default App
