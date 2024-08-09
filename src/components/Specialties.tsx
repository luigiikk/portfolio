export const Specialties = () => {
    return (
      <>
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-4xl uppercase">
            Minhas <span className="text-blue-800">Especialidades.</span>
          </h1>
  
          <div className="flex flex-col items-center xl:flex-row gap-12 xl:gap-56 ">
            <div className="flex flex-col justify-center gap-1 border  rounded-lg w-full h-64 p-6 transition-transform transform hover:scale-105 hover:bg-opacity-75 hover:border-white hover:shadow-lg hover:shadow-white">
              <h2 className="font-bold">Website</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col justify-center gap-1 border rounded-lg w-full h-64 p-6 transition-transform transform hover:scale-105 hover:bg-opacity-75 hover:border-white hover:shadow-lg hover:shadow-white">
              <h2 className="font-bold">Loja Online</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col justify-center gap-1 border rounded-lg w-full h-64 p-6 transition-transform transform hover:scale-105 hover:bg-opacity-75 hover:border-white hover:shadow-lg hover:shadow-white">
              <h2 className="font-bold">Landing Page</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  