import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiHome2Fill } from 'react-icons/ri';
import { AiFillShopping } from 'react-icons/ai';
import { HiCollection } from 'react-icons/hi';
import { MdLiveHelp, MdAccountBox } from 'react-icons/md';

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const Menu: React.FC<NavBarProps> = ({ active, setActive }) => {
  return (
    <ul
      className={`menu w-1/4 h-screen flex items-start justify-center flex-col text-slate-300 font-semibold ${
        active ? 'active' : ''
      }`}
    >
      <li className="list flex text-4xl relative transition duration-150 ease-in-out hover:pl-10">
        <RiHome2Fill className="mr-3" /> <Link href="/">Home</Link>
      </li>
      <li className="list flex text-4xl relative transition duration-150 ease-in-out hover:pl-10">
        <AiFillShopping className="mr-3" /> <Link href="/">Products</Link>
      </li>
      <li className="list flex text-4xl relative transition duration-150 ease-in-out hover:pl-10">
        <HiCollection className="mr-3" />
        <Link href="/">Collections</Link>
      </li>
      <li className="list flex text-4xl relative transition duration-150 ease-in-out hover:pl-10">
        <MdLiveHelp className="mr-3" /> <Link href="/contact">Contact</Link>
      </li>
      <li className="list flex text-4xl relative transition duration-150 ease-in-out hover:pl-10">
        <MdAccountBox className="mr-3" /> <Link href="/account">Account</Link>
      </li>
    </ul>
  );
};

export default Menu;