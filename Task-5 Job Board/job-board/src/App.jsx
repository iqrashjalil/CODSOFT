import react,{ useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Companies } from './pages/Companies'
import { Login } from './pages/user_authentications/Login'
import { Signup } from './pages/user_authentications/Signup'
import { User_Settings } from './pages/user_dashboard/User_Settings'
import { Company_Dashboard } from './pages/company_dashboard/Company_Dashboard'
import { Jobdetails } from './pages/Jobdetails'
import { Apply } from './pages/Apply'

function App() {

  return (
    <>
      <Home />
      {/* <Companies/> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <User_Settings /> */}
      {/* <Company_Dashboard /> */}
      {/* <Jobdetails /> */}
      {/* <Apply /> */}

    </>
  )
}

export default App
