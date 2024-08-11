import { CgWebsite } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { MdOutlineMonitor } from "react-icons/md";

export const Specialties = () => {
    return (
      <>
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-4xl uppercase">
            Minhas <span className="text-blue-800">Especialidades.</span>
          </h1>
  
          <div className="flex flex-col items-center xl:flex-row gap-12 xl:gap-56 ">
            <div className="flex flex-col justify-center gap-2 rounded-lg w-full h-64 p-6 transition-transform transform hover:scale-105 hover:bg-opacity-75 hover:border-white hover:shadow-sm hover:shadow-white">
            <CgWebsite className="text-blue-500 w-20 h-20 " />
              <h2 className="font-bold text-2xl">Website</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col justify-center gap-2 rounded-lg w-full h-64 p-6 transition-transform transform hover:scale-105 hover:bg-opacity-75 hover:border-white hover:shadow-sm hover:shadow-white">
              <CiShop className="text-blue-500 w-20 h-20 "/>
              <h2 className="font-bold text-2xl">Loja Online</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col justify-center gap-2 rounded-lg w-full h-64 p-6 transition-transform transform hover:scale-105 hover:bg-opacity-75 hover:border-white hover:shadow-sm hover:shadow-white">
              <MdOutlineMonitor className="text-blue-500 w-20 h-20 " />
              <h2 className="font-bold text-2xl">Landing Page</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  