import React from 'react';
import Image from 'next/image';

const BodyLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex w-full">
      <div className="w-32 bg-red-800 flex items-center justify-start">
        <h1 className="text-white tracking-widest font-semibold text-2xl transform -rotate-90 uppercase">
          Trending
        </h1>
      </div>
      <section className="bg-white dark:bg-gray-900 w-full">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full ">
              <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                <select className="select select-info w-full max-w-xs rounded-2xl">
                  <option disabled selected>
                    Category
                  </option>
                  <option>Art</option>
                  <option>Animals</option>
                  <option>Toys</option>
                </select>

                <select className="select select-error select-bordered w-full max-w-xs rounded-2xl">
                  <option disabled selected>
                    Filter
                  </option>
                  <option>Price</option>
                  <option>Date</option>
                  <option>Name</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* conteeeeeeeeeeeeeeeeeeeeeeeeeeent */}
                <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                  <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                    <Image
                      src="/monjey.jpg"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="w-56 -mt-10 relative z-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      Nike Revolt
                    </h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        2.39 ETH
                      </span>
                      <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                  <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                    <Image
                      src="/monjey.jpg"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="w-56 -mt-10 relative z-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      Nike Revolt
                    </h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        2.39 ETH
                      </span>
                      <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                  <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                    <Image
                      src="/monjey.jpg"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="w-56 -mt-10 relative z-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      Nike Revolt
                    </h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        2.39 ETH
                      </span>
                      <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                  <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                    <Image
                      src="/monjey.jpg"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="w-56 -mt-10 relative z-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      Nike Revolt
                    </h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        2.39 ETH
                      </span>
                      <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex w-80 flex-col items-center justify-center max-w-sm mx-auto">
                  <div className="w-full relative h-64 bg-gray-300 bg-center bg-cover rounded-xl shadow-md">
                    <Image
                      src="/monjey.jpg"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="w-56 -mt-10 relative z-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      Nike Revolt
                    </h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        2.39 ETH
                      </span>
                      <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodyLayout;
