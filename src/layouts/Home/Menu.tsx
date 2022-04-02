import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiHome2Fill, RiEnglishInput } from 'react-icons/ri';
import { AiFillShopping } from 'react-icons/ai';
import { HiCollection } from 'react-icons/hi';
import { MdLiveHelp, MdAccountBox } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
import { IoLogoUsd } from 'react-icons/io';

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const Menu: React.FC<NavBarProps> = ({ active, setActive }) => {
  return (
    <ul
      className={`menu w-full md:w-1/4 h-screen flex items-center md:items-start justify-center flex-col text-slate-300 font-semibold ${
        active ? 'active' : ''
      }`}
    >
      <div>
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
      </div>

      <hr className="h-px my-6 w-60 bg-gray-300 text-slate-200" />

      <div className="w-64 h-32">
        <div className="flex justify-between">
          <button className="btn3 bg-gray-800 text-bgray-800">Sign in</button>
          <button className="btn2 bg-slate-200 text-black">Sign up</button>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex">
            <div className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="EN"
                name="type"
                id="EN"
              />
              <label
                className="flex px-1 bg-white border text-base text-gray-800 border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-gray-800  peer-checked:border-transparent peer-checked:text-slate-200 font-medium mr-3"
                htmlFor="EN"
              >
                En
              </label>
            </div>
            <div className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="FR"
                name="type"
                id="FR"
              />
              <label
                className="flex px-2 bg-white border text-base text-gray-800 border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-gray-800  peer-checked:border-transparent peer-checked:text-slate-200 font-medium"
                htmlFor="FR"
              >
                Fr
              </label>
            </div>
          </div>
          <div className="flex">
            <div className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="USD"
                name="type"
                id="USD"
              />
              <label
                className="flex p-1 bg-white text-gray-800 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-gray-800  peer-checked:border-transparent peer-checked:text-slate-200 font-medium mr-3"
                htmlFor="USD"
              >
                <IoLogoUsd />
              </label>
            </div>
            <div className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="ETH"
                name="type"
                id="ETH"
              />
              <label
                className="flex p-1 bg-white text-gray-800 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-gray-800  peer-checked:border-transparent peer-checked:text-slate-200 font-medium"
                htmlFor="ETH"
              >
                <FaEthereum />
              </label>
            </div>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default Menu;