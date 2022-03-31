import React from 'react';
import { TiThMenu,  } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const NavBar: React.FC<NavBarProps> = ({ active, setActive }) => {
  return (
    <div className="fixed top-0 left-0 z-10 h-10 w-full">
      <div className="w-full h-full m-auto px-10 flex items-center justify-between">
        <div className="flex items-start h-16">
          <Image src="/logo.svg" alt="" width={100} height={80} />
        </div>
        <div
          className={`h-16 w-16 flex items-center justify-center text-2xl cursor-pointer`}
        >
          {!active ? (
            <button onClick={() => setActive(!active)}>
              <TiThMenu className="text-white transition absolute duration-150 ease-in-out" />
            </button>
          ) : (
            <button onClick={() => setActive(!active)}>
              <IoMdClose className="text-white transition absolute duration-150 ease-in-out " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;



