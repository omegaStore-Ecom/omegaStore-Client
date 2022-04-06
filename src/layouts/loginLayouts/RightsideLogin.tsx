import React from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';


const RightsideLogin: React.FC = () => {
    return (
      <div className="z-0 flex w-full items-center justify-center px-0 text-center md:px-16 lg:w-1/2">
        <div className="z-20 w-full py-6">
          <h1 className="">
            <Image
              src="/logo.svg"
              alt=""
              width="200%"
              height="50%"
              className="rounded-lg"
            />
          </h1>
          <div className="space-x-2 py-6">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-blue-700 shadow-sm shadow-white hover:text-xl focus:p-1 focus:shadow-md focus:shadow-white">
              <FaFacebookF />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold shadow-sm shadow-white hover:text-xl focus:p-1 focus:shadow-md focus:shadow-white">
              <FcGoogle />
            </button>
          </div>
          <p className="text-gray-100">or use email your account</p>
          <form action="" className="mx-auto w-full px-4 sm:w-2/3 lg:px-0">
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full rounded-full bg-black p-4 text-lg"
              />
            </div>

            <div className="pb-2 pt-4">
              <input
                className="block w-full rounded-full bg-black p-4 text-lg"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="text-right text-gray-400 hover:text-gray-100 hover:underline">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button className="block w-full rounded-full bg-indigo-600 p-4 text-lg uppercase hover:bg-indigo-700 focus:outline-none">
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default RightsideLogin;