import React from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const login: React.FC = () => {
    return (
      <section className="min-h-screen flex items-stretch text-white bg-gray-900">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover bg-center relative items-center bg-[url(/login.png)]">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Sign In
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div className="w-full py-6 z-20">
            <h1 className="">
              <Image
                src="/logo.svg"
                alt=""
                width="200%"
                height="50%"
                className="rounded-lg"
              />
            </h1>
            <div className="py-6 space-x-2">
              <button className="w-10 h-10 bg-white text-blue-700 shadow-sm shadow-white items-center justify-center inline-flex rounded-full font-bold text-lg hover:text-xl focus:shadow-md focus:shadow-white focus:p-1">
                <FaFacebookF />
              </button>
              <button className="w-10 h-10 bg-white shadow-sm shadow-white items-center justify-center inline-flex rounded-full font-bold text-lg hover:text-xl focus:shadow-md focus:shadow-white focus:p-1">
                <FcGoogle />
              </button>
            </div>
            <p className="text-gray-100">or use email your account</p>
            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-full bg-black"
                />
              </div>

              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-full bg-black"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="px-4 pb-2 pt-4">
                <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                  sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default login;