import React from 'react';
import Image from 'next/image';
import { ImFire } from 'react-icons/im';

const Category: React.FC = () => {
  return (
    <section className="w-full min-h-screen end bg-[#f3fbfe]">
      <div className="container px-6 py-8 mx-auto">
        <div className="lg:flex lg:-mx-2">
          <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full ">
            <div className="flex items-center justify-between text-sm tracking-widest">
              <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                Browse by{' '}
                <span className="ml-3 text-blue-500">Categories</span>{' '}
                <ImFire className="ml-2 text-orange-600" />
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* conteeeeeeeeeeeeeeeeeeeeeeeeeeent */}
              <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                  <Image
                    src="/go.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>

                <div className="w-full -mt-10 relative z-10 overflow-hidden bg-white rounded-b-lg shadow-lg  dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    Nike Revolt
                  </h3>
                </div>
              </div>

              <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                  <Image
                    src="/go.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>

                <div className="w-full -mt-10 relative z-10 overflow-hidden bg-white rounded-b-lg shadow-lg  dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    Nike Revolt
                  </h3>
                </div>
              </div>

              <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                  <Image
                    src="/go.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>

                <div className="w-full -mt-10 relative z-10 overflow-hidden bg-white rounded-b-lg shadow-lg  dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    Nike Revolt
                  </h3>
                </div>
              </div>

              <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                  <Image
                    src="/go.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>

                <div className="w-full -mt-10 relative z-10 overflow-hidden bg-white rounded-b-lg shadow-lg  dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    Nike Revolt
                  </h3>
                </div>
              </div>

              <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                  <Image
                    src="/go.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>

                <div className="w-full -mt-10 relative z-10 overflow-hidden bg-white rounded-b-lg shadow-lg  dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    Nike Revolt
                  </h3>
                </div>
              </div>

              <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                  <Image
                    src="/go.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>

                <div className="w-full -mt-10 relative z-10 overflow-hidden bg-white rounded-b-lg shadow-lg  dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    Nike Revolt
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
