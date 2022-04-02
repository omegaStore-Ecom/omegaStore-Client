import React from 'react';
import Image from 'next/image';
import { ImFire } from 'react-icons/im';


const Trending: React.FC = () => {
    return (
      <section className="w-fulldark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full ">
              <div className="flex items-center justify-between text-sm tracking-widest">
                <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                  Trending <span className="ml-3 text-blue-500">NFTs</span>{' '}
                  <ImFire className="ml-2 text-orange-600" />
                </h1>
                <div className="flex justify-between w-1/2">
                  <select className="w-full max-w-xs select select-info rounded-2xl">
                    <option disabled selected>
                      Category
                    </option>
                    <option>Art</option>
                    <option>Animals</option>
                    <option>Toys</option>
                  </select>

                  <select className="w-full max-w-xs select select-error select-bordered rounded-2xl">
                    <option disabled selected>
                      Sort By
                    </option>
                    <option>Price</option>
                    <option>Date</option>
                    <option>Name</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* conteeeeeeeeeeeeeeeeeeeeeeeeeeent */}
                <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-2 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
                  <div className="flex justify-between">
                    <p className="flex justify-between items-center w-1/4">
                      {' '}
                      <span className="bg-orange-300 w-6 h-6 rounded-full"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative w-full h-64 bg-gray-300 bg-center bg-cover shadow-md rounded-lg">
                    <Image
                      src="/te.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="font-bold text-base flex flex-col text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="px-2 py-1 text-xs text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-2 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
                  <div className="flex justify-between">
                    <p className="flex justify-between items-center w-1/4">
                      {' '}
                      <span className="bg-orange-300 w-6 h-6 rounded-full"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative w-full h-64 bg-gray-300 bg-center bg-cover shadow-md rounded-lg">
                    <Image
                      src="/te.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="font-bold text-base flex flex-col text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="px-2 py-1 text-xs text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-2 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
                  <div className="flex justify-between">
                    <p className="flex justify-between items-center w-1/4">
                      {' '}
                      <span className="bg-orange-300 w-6 h-6 rounded-full"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative w-full h-64 bg-gray-300 bg-center bg-cover shadow-md rounded-lg">
                    <Image
                      src="/te.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="font-bold text-base flex flex-col text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="px-2 py-1 text-xs text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-2 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
                  <div className="flex justify-between">
                    <p className="flex justify-between items-center w-1/4">
                      {' '}
                      <span className="bg-orange-300 w-6 h-6 rounded-full"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative w-full h-64 bg-gray-300 bg-center bg-cover shadow-md rounded-lg">
                    <Image
                      src="/te.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="font-bold text-base flex flex-col text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="px-2 py-1 text-xs text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-2 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
                  <div className="flex justify-between">
                    <p className="flex justify-between items-center w-1/4">
                      {' '}
                      <span className="bg-orange-300 w-6 h-6 rounded-full"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative w-full h-64 bg-gray-300 bg-center bg-cover shadow-md rounded-lg">
                    <Image
                      src="/te.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="font-bold text-base flex flex-col text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="px-2 py-1 text-xs text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
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
    );
};

export default Trending;