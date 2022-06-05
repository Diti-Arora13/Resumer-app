import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()

  return (
    <div className='flex justify-between py-5'>
        <p onClick={() => navigate('/')} className="gradient-text font-bold text-sm cursor-pointer">Resumer</p>

        <button onClick={() => navigate('/home')} className='button'>Create your resume</button>
    </div>
  )
}

export default Navbar