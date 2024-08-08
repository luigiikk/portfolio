import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const NavBar = ({ children }: LayoutProps) => {
  return (
    <header className="">
        <div className="text-sm flex justify-between px-5 py-3 items-center sticky top-0 z-20">
        <Link href="/">
          <Image src="/image1.png" alt="Dev Image" width={135} height={76} />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-md">
          <Link href="/">Sobre Mim</Link>
          <Link href="/contatos">Entre em contato</Link>
        </nav>
      </div>
     
      {children}
    </header>
  );
};
