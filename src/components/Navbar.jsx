import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()

  return (
    <div className='flex justify-between pt-5 pb-2'>
        <p onClick={() => navigate('/')} className="gradient-text font-bold text-sm cursor-pointer">Resumer</p>

        <button onClick={() => navigate('/home')} className='button'>Create your resume</button>
    </div>
  )
}

export default Navbar