import React from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1 className="text-lg font-semibold">Your Resume</h1>

        <div onClick={() => navigate('/pick')} className="border-2 cursor-pointer hover:bg-black hover:bg-opacity-10 border-black py-14 inline-flex gap-2 flex-col justify-center items-center blue-shadow mt-8 w-40 px-5">

          <AiOutlineFileAdd className='text-xl text-pink' />
          <p className='text-center'>Create new resume</p>

        </div>
    </div>
  )
}

export default Home