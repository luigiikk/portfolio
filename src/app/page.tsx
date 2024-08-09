import { AboutMe } from "@/components/AboutMe";
import { Specialties } from "@/components/Specialties";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
      <AboutMe/>
      <Specialties/>
    </div>
      
    </>
  );
}
