import React from 'react';
import { TiThMenu,  } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import {GiShoppingBag} from "react-icons/gi";

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const NavBar: React.FC<NavBarProps> = ({ active, setActive }) => {
  return (
    <div className="fixed top-0 left-0 z-10 h-10 w-full">
      <div className="m-auto flex h-full w-full items-center justify-between px-10">
        <div className="flex h-16 items-start">
          <Link href="/" passHref>
            <Image
              src="/logo.svg"
              className="cursor-pointer"
              alt=""
              width={100}
              height={80}
            />
          </Link>
        </div>
        <div
          className={`mb-2 flex h-full w-20 justify-evenly items-center cursor-pointer items-center justify-center text-2xl`}
        >
          <Link href="/cart" passHref>
            <GiShoppingBag className="mt-5  text-2xl text-white"/>
          </Link>
          {!active ? (
            <button onClick={() => setActive(!active)}>
              <TiThMenu className="absolute text-white transition duration-150 ease-in-out" />
            </button>
          ) : (
            <button onClick={() => setActive(!active)}>
              <IoMdClose className="absolute text-white transition duration-150 ease-in-out " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;



