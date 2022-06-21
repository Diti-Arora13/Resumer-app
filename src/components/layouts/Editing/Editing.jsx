import React, { useState } from "react";

const Editing = () => {
  const [activeTab, setActiveTab] = useState(false)

  const toggle = () => setActiveTab(!activeTab)

  return (
    <div>
      <div className="flex items-center mb-4">
        <button onClick={toggle} className={`text-md py-2 px-16 ${!activeTab && `bg-black bg-opacity-10 border-b-2 border-blu`}`}>Style</button>

        <button onClick={toggle} className={`text-md py-2 px-16 ${activeTab && `bg-black bg-opacity-10 border-b-2 border-pink`}`}>Details</button>
      </div>

      
      
    </div>
  );
};

export default Editing;
