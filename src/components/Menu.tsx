import Image from "next/image";
import Link from "next/link";
import { MenuCloseIcon } from "./icons/MenuCloseIcon";

interface MenuProps {
    isVisible:boolean
    onClose: () => void
}


export const Menu = ({isVisible, onClose}: MenuProps) => {
  return (
    <div className={`${isVisible ? 'flex' : 'hidden'} fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`} onClick={onClose}>
      <div className="w-full bg-black h-96 shadow-md py-4 px-5">
        <div className="flex justify-between mb-5">
          <Link href="/">
            <Image src="/image1.png" alt="Dev Image" width={135} height={76} />
          </Link>
          <button onClick={onClose}>
            <MenuCloseIcon className="fill-white w-10 h-10"/>
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-xl p-5 items-center">
          <Link href="/">Sobre Mim</Link>
          <Link href="/contatos">Entre em contato</Link>
        </nav>
      </div>
    </div>
  );
};
