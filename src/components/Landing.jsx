import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  let navigate = useNavigate()
  return (
    <div className='flex flex-col mt-10 items-center gap-6'>
        <p className='gradient-text leading-snug text-2xl font-extrabold text-center w-3/5'>Build beautiful one page resumes for free</p>

        <p className="font-semibold text-md w-2/5 text-center">Build classic resumes within minutes without paying a penny 😄 and by having the best user experience!</p>

        <button onClick={() => navigate('/home')} className="button text-sm">Start your resume</button>
    </div>
  )
}

export default Landing