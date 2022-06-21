import React from 'react'
import { useNavigate } from 'react-router-dom'
//IMAGES
import Temp1 from '../imgs/Template-1.png'
import Temp2 from '../imgs/Template-2.png'
import Temp3 from '../imgs/Template-3.png'
//ICONS
import { FiArrowLeft } from "react-icons/fi";

const PickLayout = () => {
  let navigate = useNavigate()

  return (
    <div>
      <button className='back-btn' onClick={() => navigate('/home')} > <FiArrowLeft/> </button>

      <h1 className="text-lg font-semibold">Pick a layout</h1>
      <div className="flex gap-12 mt-5">
        <img onClick={() => navigate('/template1')} className='pick' src={Temp1} alt="" />
        <img onClick={() => navigate('/template2')} className='pick' src={Temp2} alt="" />
        <img onClick={() => navigate('/template3')} className='pick' src={Temp3} alt="" />
      </div>
    </div>
  )
}

export default PickLayout