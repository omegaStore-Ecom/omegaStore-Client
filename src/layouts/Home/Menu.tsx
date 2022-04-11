import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiHome2Fill, RiEnglishInput } from 'react-icons/ri';
import { AiFillShopping } from 'react-icons/ai';
import { HiCollection } from 'react-icons/hi';
import { FaEthereum } from 'react-icons/fa';
import { IoLogoUsd } from 'react-icons/io';
import { MdAccountBox } from 'react-icons/md';
import {useAppSelector} from "../../../redux/hooks";

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const Menu: React.FC<NavBarProps> = ({ active, setActive }) => {
  const user = useAppSelector(state => state.currentUser.role);
  return (
    <ul
      className={`menu flex h-screen w-full flex-col items-center justify-center font-semibold text-slate-300 md:w-1/4 md:items-start ${
        active ? 'active' : ''
      }`}
    >
      <div>
        <li className="list relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <RiHome2Fill className="mr-3" /> <Link href="/">Home</Link>
        </li>
        <li className="list relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <AiFillShopping className="mr-3" />{' '}
          <Link href="/explore">Products</Link>
        </li>
        <li className="list relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <HiCollection className="mr-3" />
          <Link href="/collections">Collections</Link>
        </li>

        {user === 'seller' ?
        <li className="list relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <MdAccountBox className="mr-3" /> <Link href="/profile">Account</Link>
        </li>
        : user === 'customer' ?
        <li className="list relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <MdAccountBox className="mr-3" /> <Link href="/profilecustomer">Account</Link>
        </li>
          :
          null
        }
      </div>

      <hr className="my-6 h-px w-60 bg-gray-300 text-slate-200" />

      <div className="h-32 w-64">
        <div className="flex justify-between">
          <Link href="/auth/customerlogin" passHref>
            <button className="btn3 text-bgray-800 bg-gray-800">Sign in</button>
          </Link>
          <Link href="/auth/customerregister" passHref>
            <button className="btn2 bg-slate-200 text-black">Sign up</button>
          </Link>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="flex">
            <div className="relative">
              <input
                className="peer sr-only"
                type="radio"
                value="EN"
                name="lunguage"
                id="EN"
              />
              <label
                className="mr-3 flex cursor-pointer rounded-lg border border-gray-300 bg-white px-1 text-base font-medium text-gray-800 hover:bg-gray-50  focus:outline-none peer-checked:border-transparent peer-checked:bg-gray-800 peer-checked:text-slate-200"
                htmlFor="EN"
              >
                En
              </label>
            </div>
            <div className="relative">
              <input
                className="peer sr-only"
                type="radio"
                value="FR"
                name="lunguage"
                id="FR"
              />
              <label
                className="flex cursor-pointer rounded-lg border border-gray-300 bg-white px-2 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none  peer-checked:border-transparent peer-checked:bg-gray-800 peer-checked:text-slate-200"
                htmlFor="FR"
              >
                Fr
              </label>
            </div>
          </div>
          <div className="flex">
            <div className="relative">
              <input
                className="peer sr-only"
                type="radio"
                value="USD"
                name="devise"
                id="USD"
              />
              <label
                className="mr-3 flex cursor-pointer rounded-lg border border-gray-300 bg-white p-1 font-medium text-gray-800 hover:bg-gray-50  focus:outline-none peer-checked:border-transparent peer-checked:bg-gray-800 peer-checked:text-slate-200"
                htmlFor="USD"
              >
                <IoLogoUsd />
              </label>
            </div>
            <div className="relative">
              <input
                className="peer sr-only"
                type="radio"
                value="ETH"
                name="devise"
                id="ETH"
              />
              <label
                className="flex cursor-pointer rounded-lg border border-gray-300 bg-white p-1 font-medium text-gray-800 hover:bg-gray-50 focus:outline-none  peer-checked:border-transparent peer-checked:bg-gray-800 peer-checked:text-slate-200"
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