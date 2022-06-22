import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const Style = () => {
  const [gradient, setGradient] = useState(false)
  const [activeTab, setActiveTab] = useState(false)

  const toggle = () => setActiveTab(!activeTab)
  return (
    <div>
      <h1 className="text-sm font-semibold inline-block mr-4">Banner color : </h1>

      {/* <select className='py-2.5 px-5 rounded-md cursor-pointer border-black border blue-shadow bg-white'>
        <option>Solid</option>
        <option>Gradient</option>
      </select> */}

      <div className="inline-flex flex-col">
        <button onClick={toggle} className="sm-blue-shadow py-1 px-5 w-full font-medium border border-black rounded-md hover:bg-black hover:bg-opacity-10 flex items-center gap-3">
            {gradient ? 'Gradient' : 'Solid'}
            <FiChevronDown />
        </button>

        {activeTab &&
            <div className="sm-blue-shadow border-black border rounded-md mt-4 w-max divide-black divide-y ">
                <p onClick={() => { setActiveTab(false); setGradient(false) }} className='px-4 py-2 cursor-pointer hover'>Solid</p>

                <p onClick={() => { setActiveTab(false); setGradient(true) }} className='px-4 py-2 cursor-pointer hover'>Gradient</p>
            </div>
        }
      </div>
    </div>
  )
}

export default Style