import React, { useState } from 'react';
import Image from 'next/image';
import { ImFire } from 'react-icons/im';



const Newest: React.FC = () => {

    const [sort, setSort] = useState('default');
    const [category, setCategory] = useState('defaultC');
    return (
      <section className="min-h-screen w-full bg-[#f3fbfe]">
        <div className="container mx-auto px-6 py-8">
          <div className="lg:-mx-2 lg:flex">
            <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
              <div className="flex items-center justify-between text-sm tracking-widest ">
                <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                  Newest <span className="ml-3 text-blue-500">NFTs</span>{' '}
                  <ImFire className="ml-2 text-orange-600" />
                </h1>
                <div className="flex w-1/2 justify-end gap-4">
                  <select
                    defaultValue={'defaultC'}
                    onChange={(e) => setCategory(e.target.value)}
                    className="max-w-xs items-center rounded-lg mt-24 md:mt-0 bg-gray-800 px-14 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <option value="defaultC" selected>
                      Category
                    </option>
                    <option value="Art">Art</option>
                    <option>Animals</option>
                    <option>Toys</option>
                  </select>

                  <select
                    defaultValue={'default'}
                    onChange={(e) => setSort(e.target.value)}
                    className="items-center rounded-lg bg-gray-800 mt-24 md:mt-0 px-14 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <option value="default" disabled selected>
                      Sort By
                    </option>
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* conteeeeeeeeeeeeeeeeeeeeeeeeeeent */}
                <div className="mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
                  <div className="flex justify-between">
                    <p className="flex w-1/4 items-center justify-between">
                      {' '}
                      <span className="h-6 w-6 rounded-full bg-orange-300"></span>
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative h-64 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
                    <Image
                      src="/ca.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="flex flex-col text-base font-bold text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
                  <div className="flex justify-between">
                    <p className="flex w-1/4 items-center justify-between">
                      {' '}
                      <span className="h-6 w-6 rounded-full bg-orange-300"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative h-64 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
                    <Image
                      src="/ca.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="flex flex-col text-base font-bold text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
                  <div className="flex justify-between">
                    <p className="flex w-1/4 items-center justify-between">
                      {' '}
                      <span className="h-6 w-6 rounded-full bg-orange-300"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative h-64 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
                    <Image
                      src="/ca.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="flex flex-col text-base font-bold text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
                  <div className="flex justify-between">
                    <p className="flex w-1/4 items-center justify-between">
                      {' '}
                      <span className="h-6 w-6 rounded-full bg-orange-300"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative h-64 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
                    <Image
                      src="/ca.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="flex flex-col text-base font-bold text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
                  <div className="flex justify-between">
                    <p className="flex w-1/4 items-center justify-between">
                      {' '}
                      <span className="h-6 w-6 rounded-full bg-orange-300"></span>{' '}
                      seller
                    </p>
                    <p>collection</p>
                  </div>
                  <div className="relative h-64 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
                    <Image
                      src="/ca.webp"
                      alt=""
                      width="100%"
                      height="100%"
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2">
                    <h2 className="flex flex-col text-base font-bold text-gray-800">
                      Monkey de luffy
                    </h2>
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-bold text-blue-500">
                        2.39 ETH
                      </span>

                      <button className="transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
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

export default Newest;