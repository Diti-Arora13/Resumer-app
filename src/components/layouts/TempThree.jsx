import React from "react";
import { useNavigate } from "react-router-dom";
import Pfp from "../../imgs/pfp.png";
//icons
import { FaTwitter, FaUser } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const TempThree = () => {
  let navigate = useNavigate();

  return (
    <>
      <button className="back-btn" onClick={() => navigate("/pick")}> <FiArrowLeft /> </button>
      <div className="flex">
        {/* Styling component */}

        {/* resume */}
        <div className="h-a4h relative flex flex-col w-a4w border-2 border-black">
          {/* header */}
          <div className="h-40 relative">
            <img
              className="absolute h-28 w-28 rounded-full border-white border-4 object-fit top-4 left-6"
              src={Pfp}
              alt=""
            />

            <div className="h-1/2 bg-indigo-400">
              <p className="text-md text-white ml-40 mt-8 absolute font-semibold">
                Max Mayfield
              </p>
            </div>
            <p className="font-semibold uppercase ml-40 mt-2">UI/UX DESIGNER</p>
          </div>

          <div className="flex h-full w-full">
            {/* LEFT STARTS*/}

            <div className="w-2/5 flex flex-col gap-3 border-r border-black">
              {/* about me */}
              <div className="pt-2 pl-6">
                <div className="flex items-center gap-2">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap">
                    About me
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>

                <p className="text-ex-small2 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* hobbies */}
              <div className="pt-2 pl-6">
                <div className="flex items-center gap-2">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap">
                    Hobbies
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>
                <ul className="list-disc pl-3 text-ex-small mt-2">
                  <li>Photography</li>
                  <li>Dancing</li>
                  <li>Singing</li>
                </ul>
              </div>

              {/* achievement */}
              <div className="pt-2 pl-6">
                <div className="flex items-center gap-2">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap">
                    Achievements
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>
                <ul className="list-disc pl-3 pr-2 text-ex-small mt-2">
                  <li>Won XYZ hakathon</li>
                  <li>Participated and won swags in Hacktoberfest</li>
                  <li>Mentor at GSOC</li>
                </ul>
              </div>

              {/* skills */}
              <div className="pt-2 pl-6">
                <div className="flex items-center gap-2">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap">
                    Skills
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>
                <ul className="list-disc pl-3 pr-2 text-ex-small mt-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>ReactJs</li>
                </ul>
              </div>
              {/* LEFT ENDS*/}
            </div>

            {/* RIGHT STARTS*/}
            <div className="w-3/5 h-full">
              {/* work experience */}
              <div className="pt-2 flex flex-col gap-2 ">
                {/* heading */}
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap pl-4">
                    Experience
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>

                {/* content */}
                <div class="flex pl-4 gap-3 text-ex-small2">
                  <div>
                    <p className="text-ex-small">Fosterio</p>
                    <p class="text-xs whitespace-nowrap text-gray-400">
                      2019 - 2020
                    </p>
                  </div>
                  <div class="relative flex flex-col items-center">
                    <div class="h-2 w-2 rounded-full bg-gray-400 relative z-10"></div>
                    <div class="border bg-gray-400 h-full"></div>
                  </div>

                  <p class="pb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore tenetur aliquid a odio modi, nam debitis dolores eius
                    vitae id ab.
                  </p>
                </div>

                {/* content */}
                <div class="flex pl-4 gap-3 text-ex-small2">
                  <div>
                    <p className="text-ex-small">Fosterio</p>
                    <p class="text-xs whitespace-nowrap text-gray-400">
                      2019 - 2020
                    </p>
                  </div>
                  <div class="relative flex flex-col items-center">
                    <div class="h-2 w-2 rounded-full bg-gray-400 relative z-10"></div>
                    <div class="border bg-gray-400 h-full"></div>
                  </div>

                  <p class="pb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore tenetur aliquid a odio modi, nam debitis dolores eius
                    vitae id ab.
                  </p>
                </div>

                {/* content */}
                <div class="flex pl-4 gap-3 text-ex-small2">
                  <div>
                    <p className="text-ex-small">Fosterio</p>
                    <p class="text-xs whitespace-nowrap text-gray-400">
                      2019 - 2020
                    </p>
                  </div>
                  <div class="relative flex flex-col items-center">
                    <div class="h-2 w-2 rounded-full bg-gray-400 relative z-10"></div>
                    <div class="border bg-gray-400 h-full"></div>
                  </div>

                  <p class="pb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore tenetur aliquid a odio modi, nam debitis dolores eius
                    vitae id ab.
                  </p>
                </div>
              </div>

              {/* education */}
              <div className="pt-2 mt-2 flex flex-col gap-1">
                {/* heading */}
                <div className="flex items-center gap-2 ">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap pl-4">
                    EDUCATION
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>

                <div className="flex pr-1 items-center justify-between text-ex-small pl-4 mt-1">
                  <div className="flex gap-1 items-center">
                    <p>University Name</p>
                    <p>-</p>
                    <p>Bachelor’s in Science</p>
                  </div>
                  <p className="text-gray-500 text-ex-small2">2019-2020</p>
                </div>

                <div className="flex pr-1 items-center justify-between text-ex-small pl-4">
                  <div className="flex gap-1 items-center">
                    <p>University Name</p>
                    <p>-</p>
                    <p>Bachelor’s in Science</p>
                  </div>
                  <p className="text-gray-500 text-ex-small2">2019-2020</p>
                </div>
              </div>

              {/* projects */}
              <div className="pt-2 mt-3">
                {/* heading */}
                <div className="flex items-center gap-2 ">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap pl-4">
                    projects
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>

                {/* content */}
                <div className="mt-1 gap-1 flex flex-col text-ex-small mx-4">
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

              {/* contacts */}
              <div className="pt-2 mt-2">
                {/* heading */}
                <div className="flex items-center gap-2 ">
                  <p className="text-indigo-400 font-bold uppercase whitespace-nowrap pl-4">
                    contact
                  </p>
                  <hr className="border-black border-1 w-full" />
                </div>

                {/* contennt */}
                <div className="mt-1 flex flex-col gap-3 text-ex-small mx-4">
                  <a href="http" className="flex items-center">
                    <span>
                      <FaUser className="inline mr-4 text-sm mt-2" /> 12345
                      78946
                    </span>
                  </a>

                  <a href="http" className="flex items-center">
                    <span>
                      <FaTwitter className="inline mr-4 text-sm" />{" "}
                      @theditiarora
                    </span>
                  </a>

                  <a href="http" className="flex items-center">
                    <span>
                      <HiMail className="inline mr-4 text-sm" />{" "}
                      diti.aromatic@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempThree;
