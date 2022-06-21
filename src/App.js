import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import Home from './components/Home';
import PickLayout from './components/PickLayout';
//LAYOUTS
import TempOne from './components/layouts/TempOne'
import TempTwo from './components/layouts/TempTwo'
import TempThree from './components/layouts/TempThree'

const App = () => {
  return (
    <Router>
      <div className='bg-white min-h-screen relative px-10'>
        <Navbar />
 
        {/* ROUTES */}
        <Routes>
          <Route path='/' element={<Landing />}  />
          <Route path='/home' element={<Home />}  />
          <Route path='/pick' element={<PickLayout />}  />

          <Route path='/template1' element={<TempOne />} />
          <Route path='/template2' element={<TempTwo />} />
          <Route path='/template3' element={<TempThree />} />
        </Routes>

        {/* <p className='absolute bottom-0 -mb-20'>Made with ❤ by Diti</p> */}
      </div>
    </Router>
  )
}

export default App