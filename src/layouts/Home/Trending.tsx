import React from 'react';
import Image from 'next/image';
import { ImFire } from 'react-icons/im';
import { useEffect } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Trending: React.FC = () => {
  useEffect(() => {
/*    gsap.from('.nft', {
      opacity: 0,
      y: '100',
      scrollTrigger: {
        trigger: '.trending',
        /!*markers: true,*!/
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
      },
    });*/
  }, []);
    return (
      <section className="w-full bg-[#f3fbfe] trending">
        <div className="container mx-auto px-6 py-8">
          <div className="lg:-mx-2 lg:flex">
            <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
              <div className="flex items-center justify-between text-sm tracking-widest">
                <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                  Trending <span className="ml-3 text-blue-500">NFTs</span>{' '}
                  <ImFire className="ml-2 text-orange-600" />
                </h1>
                <div className="flex w-1/2 justify-between">
                  <select
                    defaultValue={'default'}
                    className="select select-info w-full max-w-xs rounded-2xl"
                  >
                    <option value="default" disabled selected>
                      Category
                    </option>
                    <option>Art</option>
                    <option>Animals</option>
                    <option>Toys</option>
                  </select>

                  <select
                    defaultValue={'default'}
                    className="select select-error select-bordered w-full max-w-xs rounded-2xl"
                  >
                    <option value="default" disabled selected>
                      Sort By
                    </option>
                    <option>Price</option>
                    <option>Date</option>
                    <option>Name</option>
                  </select>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* conteeeeeeeeeeeeeeeeeeeeeeeeeeent */}
                <div className="nft mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
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
                      src="/te.webp"
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

                <div className="nft mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
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
                      src="/te.webp"
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

                <div className="nft mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
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
                      src="/te.webp"
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

                <div className="nft mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
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
                      src="/te.webp"
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

                <div className="nft mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
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
                      src="/te.webp"
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

export default Trending;