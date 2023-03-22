"use client";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import Wrapper from "../shared/Wrapper";
import { BiAlignRight } from 'react-icons/bi'

const Header = () => {
  return (
    <header className="flex justify-between py-6 md:px-[30px] px-[15px] w-[95%] m-[30px] fixed top-0 shadow-3xl bg-white justify-items-center rounded-2xl">
      <div>
        <Image src={logo} alt="Panaverse-logo" width={90} height={90} />
      </div>
      <ul className="hidden md:flex space-x-10 font-semibold">
        <li>
          <Link href="/">
            <button className="bg-transparent hover:bg-slate-500 text-slate-800 text-xl font-bold hover:text-white py-2 px-6 border-solid border-slate-800 hover:border-transparent rounded-full">
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button className="bg-transparent hover:bg-slate-500 text-slate-800 text-xl font-bold hover:text-white py-2 px-6 border-solid border-slate-800 hover:border-transparent rounded-full">
              About
            </button>
          </Link>
        </li>
        <li>
          <Link href="/cources">
            <button className="bg-transparent hover:bg-slate-500 text-slate-800 text-xl font-bold hover:text-white py-2 px-6 border-solid border-slate-800 hover:border-transparent rounded-full">
              Syllabus
            </button>
          </Link>
        </li>
        <li>
          <Link as={NextLink} href="https://github.com/panaverse" isExternal>
            <button className="bg-transparent hover:bg-slate-500 text-slate-800 text-xl font-bold hover:text-white py-2 px-6 border-solid border-slate-800 hover:border-transparent rounded-full">
              GitHib
            </button>
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex space-x-6 font-semibold">
        <Link
          as={NextLink}
          href="https://portal.piaic.org/signup"
          isExternal
        >
          <button className="bg-transparent hover:bg-green-600 text-green-600 text-xl font-bold hover:text-white py-2 px-8 border-solid border-slate-800 hover:border-transparent rounded-full">
            Apply
          </button>
        </Link>
      </div>
      <div className="static md:hidden text-3xl"><BiAlignRight /></div>
    </header>
  );
};

export default Header;
