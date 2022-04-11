import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiHome2Fill, RiEnglishInput } from 'react-icons/ri';
import { AiFillShopping } from 'react-icons/ai';
import { HiCollection } from 'react-icons/hi';
import { MdAccountBox } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
import { IoLogoUsd } from 'react-icons/io';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import {useAppSelector} from "../../../redux/hooks";

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const MenuGlobal: React.FC<NavBarProps> = ({ active, setActive }) => {
  const user = useAppSelector(state => state.currentUser);
  return (
    <ul
      className={`menu2 flex h-screen flex-col justify-center font-semibold text-gray-700 shadow-md md:w-1/4 md:items-start ${
        active ? 'active' : ''
      }`}
    >
      <div className="w-96">
        <li className="listG relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <RiHome2Fill className="mr-3" /> <Link href="/">Home</Link>
        </li>
        <li className="listG relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <RiShoppingBag2Fill className="mr-3" />{' '}
          <Link href="/explore">Products</Link>
        </li>
        <li className="listG relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
          <HiCollection className="mr-3" />
          <Link href="/collections">Collections</Link>
        </li>
        {user?.role === 'seller' ?
            <li className="list relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
              <MdAccountBox className="mr-3" /> <Link href="/profile">Account</Link>
            </li>
            : user?.role === 'customer' ?
                <li className="list relative flex text-4xl transition duration-150 ease-in-out hover:pl-10">
                  <MdAccountBox className="mr-3" /> <Link href="/profilecustomer">Account</Link>
                </li>
                :
                null
        }
      </div>

      <hr className="my-6 h-px w-96 bg-gray-300 text-gray-600" />

      <div className="h-32 w-96">
        <div className="flex">
          {user &&
              <>
            <Link href="/auth/sellerlogin" passHref>
            <button className="btn3 bg-gray-800 text-slate-200">Sign in</button>
            </Link><Link href="/auth/customerregister" passHref>
            <button className="btn2 ml-32 bg-slate-200 text-black">
            Sign up
            </button>
            </Link></>

          }
        </div>
        <div className="mt-10 flex">
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
          <div className="ml-36 flex">
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

export default MenuGlobal;
