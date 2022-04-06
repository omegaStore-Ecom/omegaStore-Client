import React from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const NavGlobal: React.FC<NavBarProps> = ({ active, setActive }) => {
  return (
    <div className="fixed top-0 left-0 z-10 h-10 w-full bg-white pb-4 shadow-sm">
      <div className="m-auto flex h-full w-full items-center justify-between px-10">
        <div className="flex h-16 items-start">
          <Link href="/" passHref>
            <Image src="/logos.svg" className='cursor-pointer' alt="" width={100} height={80} />
          </Link>
        </div>
        <div
          className={`mb-2 flex h-16 w-16 cursor-pointer items-center justify-center text-2xl`}
        >
          {!active ? (
            <button onClick={() => setActive(!active)}>
              <TiThMenu className="absolute text-gray-900 transition duration-150 ease-in-out" />
            </button>
          ) : (
            <button onClick={() => setActive(!active)}>
              <IoMdClose className="absolute text-gray-900 transition duration-150 ease-in-out " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavGlobal;
