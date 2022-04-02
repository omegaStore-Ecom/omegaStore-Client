import React from 'react';
import Image from 'next/image';
import { ImFire } from 'react-icons/im';


const Owner: React.FC = () => {
    return (
      <section className="w-full h-screen  dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full ">
              <div className="flex items-center justify-between text-sm tracking-widest">
                <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                  Top <span className="ml-3 text-blue-500">Collections</span>{' '}
                  <ImFire className="ml-2 text-orange-600" />
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* conteeeeeeeeeeeeeeeeeeeeeeeeeeent */}
                <a
                  href=""
                  className="relative bg-[url(https://i.pinimg.com/564x/c0/c6/9d/c0c69d57a7e508efc87d3fd842a3a67f.jpg)] block overflow-hidden bg-center bg-no-repeat bg-cover  rounded-xl"
                >
                  <span className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full  right-4 top-4">
                    4.5
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1.5 text-yellow-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>

                  <div className="relative p-8 pt-40 text-white bg-black bg-opacity-40">
                    <h5 className="text-2xl font-bold">Rome</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full ">
              <div className="flex items-center justify-between text-sm tracking-widest">
                <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                  Top <span className="ml-3 text-blue-500">Sellers</span>{' '}
                  <ImFire className="ml-2 text-orange-600" />
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* conteeeeeeeeeeeeeeeeeeeeeeeeeeent */}

                <div className="border rounded-2xl w-72 hover:shadow-none relative flex shadow-xl">
                  <div className="w-1/2 flex py-3 items-center justify-center">
                    <div className="rounded-full w-24 h-24 ring-2 ring-orange-500 ring-offset-4 shadow-lg overflow-hidden flex justify-center items-center">
                      <Image
                        src="/monjey.jpg"
                        alt=""
                        width="100%"
                        height="100%"
                        className="rounded-full border-2 border-red-600"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-around font-bold">
                    <div className="text-2xl font-bold flex flex-col">
                      <h1 className="name break-words">Dexter</h1>
                    </div>
                    <div className="shadow-md border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Owner;