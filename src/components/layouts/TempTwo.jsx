import React from "react";
import { useNavigate } from 'react-router-dom'
import Pfp from "../../imgs/pfp.png";
//icons
import { FaUser } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const TempTwo = () => {
  let navigate = useNavigate()
  return (
    <>
      <button className='back-btn' onClick={() => navigate('/pick')} > <FiArrowLeft/> </button>
      <div className="flex">
        
        {/* Styling component */}

        {/* resume */}
        <div className="h-a4h flex flex-col w-a4w border-2 border-black">
          <div className="flex h-full">
            {/* LEFT */}
            <div className="bg-blue-200 h-full w-2/5 border-r-2 border-black text-ex-small">
              <img
                className="w-24 h-24 border-black border-2 rounded-full mx-auto mt-4"
                src={Pfp}
                alt=""
              />

              {/* skills */}
              <div className="py-3 pl-5 mt-4">
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
            {/* RIGHT */}
            <div className="h-full w-full text-ex-small">
              {/* blue section */}
              <div className="bg-indigo-400 text-white p-2 pl-4 border-b-2 border-black">
                <h1 className="text-md mt-2">Joyce Byers</h1>
                <p className="text-ex-sm uppercase">Ui/ux desginer</p>

                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* work experience */}
              <div className="pt-3 pl-5">
                <p className="uppercase font-bold mb-1"> work experience</p>

                <div className="text-ex-small mt-3">
                  <p className="flex justify-between items-center pr-4 font-semibold">
                    {" "}
                    Fosterio{" "}
                    <span className="text-ex-small2 text-gray-400 ">
                      2019 - 2021
                    </span>
                  </p>

                  <p className="text-ex-small2 w-9/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="text-ex-small mt-3">
                  <p className="flex justify-between items-center pr-4 font-semibold">
                    {" "}
                    Fosterio{" "}
                    <span className="text-ex-small2 text-gray-400 ">
                      2019 - 2021
                    </span>
                  </p>

                  <p className="text-ex-small2 w-9/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="text-ex-small mt-3">
                  <p className="flex justify-between items-center pr-4 font-semibold">
                    {" "}
                    Fosterio{" "}
                    <span className="text-ex-small2 text-gray-400 ">
                      2019 - 2021
                    </span>
                  </p>

                  <p className="text-ex-small2 w-9/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
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

              {/* projects */}
              <div className="px-5 py-2">
                <p className="uppercase font-bold mb-1">projects</p>

                <div className="flex">
                  <div className="mt-1 gap-1 flex flex-col">
                    <a href="http" className="flex items-center">
                      <span>
                        <FiExternalLink className="inline" /> Project
                      </span>
                    </a>

                    <a href="http" className="flex items-center">
                      <span>
                        <FiExternalLink className="inline" /> Project
                      </span>
                    </a>

                    <a href="http" className="flex items-center">
                      <span>
                        <FiExternalLink className="inline" /> Project
                      </span>
                    </a>

                    <a href="http" className="flex items-center">
                      <span>
                        <FiExternalLink className="inline" /> Project
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* contact */}
          <div className="text-black w-full border-t-2 border-black flex gap-5 p-2 text-ex-small flex-wrap">
            <div className="flex items-center gap-2">
              <FaUser />
              <p>12345 78908</p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineTwitter className="text-sm" />
              <p>@theditiarora</p>
            </div>

            <div className="flex items-center gap-2">
              <HiMail className="text-sm" />
              <p>diti.aromatic@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempTwo;
