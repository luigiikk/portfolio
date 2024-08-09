import Link from "next/link";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center text-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">Prazer, sou&nbsp;
        <span className="font-bold">Luigi</span>
        </h1>
        
        <div className="mb-12">
          <h2 className="mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            sollicitudin in nunc condimentum pretium. Nam varius cursus lectus
            in finibus
          </h2>
          <Link href="" className="p-3 bg-blue-800 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse Comigo!</Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          <li style={{ backgroundColor: "#6497C6", color: "#000000" }} className="w-fit p-2 rounded-md">
            typescript
          </li>
          <li style={{ backgroundColor: "#74AFAF", color: "#000000" }} className="w-fit p-2 rounded-md">
            react
          </li>
          <li style={{ backgroundColor: "#FFF4BC", color: "#000000" }} className="w-fit p-2 rounded-md">
            javascript
          </li>
         
          <li style={{ backgroundColor: "#917EB8", color: "#000000" }} className="w-fit p-2 rounded-md">
            next.js
          </li>
        </ul>
      </div>

      <div className="relative ">
        <Image src={"/image.png"} alt="" width={310} height={310} unoptimized className="rounded-full"/>
        <p className="p-4 w-fit text-base leading-tight bg-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
          <span className="text-2xl">1+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
};
