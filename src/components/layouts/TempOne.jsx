import React from "react";
import { useNavigate } from 'react-router-dom'
import Pfp from "../../imgs/pfp.png";
//icons
import { FaUser } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const TempOne = () => {
  let navigate = useNavigate()

  return (
    <>
      <button className='back-btn' onClick={() => navigate('/pick')} > <FiArrowLeft/> </button>
      <div className="flex">
          
        {/* Styling component */}

        {/* resume */}
        <div className="w-a4w h-a4h border-black border-2">
          <div className="gradient pl-5 pb-3 pt-10 border-b border-black text-white">
            <div className="flex items-center">
              <img src={Pfp} alt="" className="h-20 w-20 rounded-full" />

              <div className="ml-5">
                <h1 className="text-md">Nancy Wheeler</h1>
                <p className="text-ex-sm uppercase">Front end developer</p>
              </div>
            </div>

            <div className="text-white mt-5 flex gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                <FaUser />
                <p>12345 78908</p>
              </div>

              <div className="flex items-center gap-2">
                <AiOutlineTwitter className="text-md" />
                <p>@theditiarora</p>
              </div>

              <div className="flex items-center gap-2">
                <HiMail className="text-md" />
                <p>diti.aromatic@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            {/* about me */}
            <div className="p-5">
              <p className="uppercase font-bold text-ex-small">about me</p>
              <p className="mt-2 text-ex-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <hr className="border-black" />

            {/* division */}
            <div className="flex text-ex-small h-div-h">
              {/* left */}
              <div className="w-1/3 border-r border-black">
                {/* skills */}
                <div className="py-3 pl-5">
                  <p className="uppercase font-bold mb-1">Skill</p>
                  <ul className="list-disc pl-3">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                  </ul>
                </div>
                <hr className="border-black my-2" />

                {/* Hobbies */}
                <div className="py-3 pl-5">
                  <p className="uppercase font-bold mb-1">Hobbies</p>
                  <ul className="list-disc pl-3">
                    <li>Photography</li>
                    <li>Dancing</li>
                    <li>Singing</li>
                  </ul>
                </div>
                <hr className="border-black my-2" />

                {/* achievment */}
                <div className="py-3 pl-5">
                  <p className="uppercase font-bold mb-1">Achievement</p>
                  <ul className="list-disc pl-3">
                    <li>Won XYZ hakathon</li>
                    <li>Participated and won swags in Hacktoberfest</li>
                    <li>Mentor at GSOC</li>
                  </ul>
                </div>
              </div>

              {/* right */}
              <div className="w-full h-div-h">
                {/* work experience */}
                <div className="pt-3 pl-5">
                  <p className="uppercase font-bold mb-1"> work experience</p>
                  <div className="text-ex-small2">
                    <div class="flex gap-5">
                      <div>
                        <p className="text-ex-small">Fosterio</p>
                        <p class="text-xs whitespace-nowrap text-gray-400">2019 - 2020</p>
                      </div>
                      <div class="relative flex flex-col items-center">
                        <div class="h-2 w-2 rounded-full bg-gray-400 relative z-10"></div>
                        <div class="border bg-gray-400 h-full"></div>
                      </div>

                      <p class="pb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta minima reprehenderit molestiae veniam deserunt ad,
                        voluptatem dolorem obcaecati! Iure, facilis?
                      </p>
                    </div>
                    <div class="flex gap-5">
                      <div>
                        <p className="text-ex-small">Fosterio</p>
                        <p class="text-xs whitespace-nowrap text-gray-400">2019 - 2020</p>
                      </div>
                      <div class="relative flex flex-col items-center">
                        <div class="h-2 w-2 rounded-full bg-gray-400 relative z-10"></div>
                        <div class="border bg-gray-400 h-full"></div>
                      </div>

                      <p class="pb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta minima reprehenderit molestiae veniam deserunt ad,
                        voluptatem dolorem obcaecati! Iure, facilis?
                      </p>
                    </div>
                    <div class="flex gap-5">
                      <div>
                        <p className="text-ex-small">Fosterio</p>
                        <p class="text-xs whitespace-nowrap text-gray-400">2019 - 2020</p>
                      </div>

                      <div class="h-2 w-2 flex-shrink-0 rounded-full bg-gray-400 relative z-10"></div>

                      <p class="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta minima reprehenderit molestiae veniam deserunt ad,
                        voluptatem dolorem obcaecati! Iure, facilis?
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-black my-2" />

                {/* education */}
                <div className="px-5 py-2">
                  <p className="uppercase font-bold mb-1">Education</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <p>University Name</p>
                      <p>-</p>
                      <p>Bachelor’s in Science</p>
                    </div>
                    <p className="text-gray-500">2019-2020</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-2 items-center">
                      <p>University Name</p>
                      <p>-</p>
                      <p>Bachelor’s in Science</p>
                    </div>
                    <p className="text-gray-500">2019-2020</p>
                  </div>
                </div>

                <hr className="border-black my-2" />

                <div className="px-5 py-2">
                  <p className="uppercase font-bold mb-1">projects</p>

                  <div className="flex">
                    <div className="mt-1 gap-1 flex flex-col">
                      <a href='http' className="flex items-center"><span><FiExternalLink className="inline" /> Project</span></a>

                      <a href='http' className="flex items-center"><span><FiExternalLink className="inline" /> Project</span></a>

                      <a href='http' className="flex items-center"><span><FiExternalLink className="inline" /> Project</span></a>

                      <a href='http' className="flex items-center"><span><FiExternalLink className="inline" /> Project</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempOne;
