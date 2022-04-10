import React from 'react';
import Image from 'next/image';


const CustomerProfile: React.FC = () => {
    return (
      <section className="w-full">
        <div className="p-16">
          <div className="mt-24 rounded-lg bg-white p-8 shadow">
            <div className="grid grid-cols-1 items-start md:grid-cols-3">
              <div className="text-start order-last mt-20 grid grid-rows-3 gap-5 md:order-first md:mt-0">
                <div>
                  <p className="font-bold text-gray-400">Products meter</p>
                </div>
                <div>
                  <p className="font-bold text-gray-400">joined on</p>
                  <p className="text-xl font-bold text-gray-700">10-12-2021</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-36 w-36 items-center justify-center rounded-full border-[7px] border-white bg-indigo-100 text-indigo-500 shadow-md">
                  <Image
                    src="/wa.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-full border-2 border-red-600"
                  />
                </div>

                <div className="mt-20  text-center">
                  <p className="mt-3 font-light text-gray-600">name</p>

                  <p className="mt-3 text-gray-500">✉️ email@exemple.com</p>
                  <p className="mt-2 text-gray-500">📞 0987654345</p>
                </div>
              </div>

              <div className="grid w-full justify-end gap-4 text-lg">
                <button className="cartBtn inline-block rounded-full border border-gray-800 px-6 py-3 text-xs  uppercase leading-tight text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 ">
                  View Cart
                </button>
                <button className="cartBtn inline-block rounded-full border border-gray-800 px-6 py-3 text-xs uppercase leading-tight text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 ">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full justify-center">
            <ul className="grid w-1/2 grid-flow-col gap-2 rounded-t-lg bg-[#f3fbfe] p-2 text-center text-gray-700">
              <li>
                <a
                  href="#page1"
                  className="flex cursor-pointer justify-center rounded-lg bg-white py-4 shadow focus:bg-slate-200 active:bg-slate-200 "
                >
                  Purchased NFTs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default CustomerProfile;