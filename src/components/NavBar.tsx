"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useCallback, useState } from "react";
import { Menu } from "./Menu";
import { MenuIcon } from "./icons/MenuIcon";

interface LayoutProps {
  children: ReactNode;
}

export const NavBar = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="">
      <div className="text-sm flex justify-between px-5 py-3 items-center sticky top-0 z-20 bg-black">
        <Link href="/">
          <Image src="/image1.png" alt="Dev Image" width={135} height={76} />
        </Link>
        <button className="p-1 md:hidden" onClick={openMenu}>
          <MenuIcon className="fill-white w-10 h-10"/>
        </button>
        <nav className="hidden md:flex items-center gap-10 text-md">
          <Link href="/">Sobre Mim</Link>
          <Link href="/contatos">Entre em contato</Link>
        </nav>
        <Menu isVisible={isMenuOpen} onClose={closeMenu}/>
      </div>

      {children}
    </header>
  );
};
