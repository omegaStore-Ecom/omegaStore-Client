import React from 'react';
import Image from 'next/image';
import { AiFillDelete } from 'react-icons/ai';
import { RiEditBoxFill } from 'react-icons/ri';


const profile: React.FC = () => {
    return (
      <section className="w-full dark:bg-gray-900">
        <div className="p-16">
          <div className="p-8 bg-white shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p className="text-gray-700 text-xl">22</p>
                  <p className="text-gray-400">products</p>
                </div>
                <div>
                  <p className="ftext-gray-700 text-xl">10-12-2021</p>
                  <p className="text-gray-400">since</p>
                </div>
                <div>
                  <p className="text-gray-700 text-xl">89</p>
                  <p className="text-gray-400">Solded</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <Image
                    src="/monjey.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                    layout='fill'
                    className="rounded-full border-2 border-red-600"
                  />
                </div>
              </div>

              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button className="text-white py-2 px-4 uppercase rounded bg-blue-600 hover:bg-blue-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Add product
                </button>
                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Edit info
                </button>
              </div>
            </div>

            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">
                Jones{' '}
              </h1>
              <p className="font-light text-gray-600 mt-3">
                Romania
              </p>

              <p className="mt-8 text-gray-500">
                email@gmail.com
              </p>
              <p className="mt-2 text-gray-500">
                +212 45678903
              </p>
            </div>

            <section className="w-fulldark:bg-gray-900">
              <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">
                  <div className="mt-6 lg:mt-0 lg:px-2 lg:w-full ">
                    <div className="flex items-center justify-between text-sm tracking-widest">
                      <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                        Collection Name
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
                      <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-4 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
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
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-blue-500">
                              2.39 ETH
                            </span>

                            <div>
                              <button className="px-2 py-1 mr-1 border border-slate-100 text-3xl text-red-600 transition-colors duration-200 shadow-sm rounded-full transform focus:text-red-800 focus:outline-none">
                                <AiFillDelete />
                              </button>
                              <button className="px-2 py-1 border border-slate-100 text-3xl text-green-600 transition-colors duration-200 transform shadow-sm rounded-full focus:text-green-800 focus:outline-none">
                                <RiEditBoxFill />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-4 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
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
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-blue-500">
                              2.39 ETH
                            </span>

                            <div>
                              <button className="px-2 py-1 mr-1 border border-slate-100 text-3xl text-red-600 transition-colors duration-200 shadow-sm rounded-full transform focus:text-red-800 focus:outline-none">
                                <AiFillDelete />
                              </button>
                              <button className="px-2 py-1 border border-slate-100 text-3xl text-green-600 transition-colors duration-200 transform shadow-sm rounded-full focus:text-green-800 focus:outline-none">
                                <RiEditBoxFill />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-4 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
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
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-blue-500">
                              2.39 ETH
                            </span>

                            <div>
                              <button className="px-2 py-1 mr-1 border border-slate-100 text-3xl text-red-600 transition-colors duration-200 shadow-sm rounded-full transform focus:text-red-800 focus:outline-none">
                                <AiFillDelete />
                              </button>
                              <button className="px-2 py-1 border border-slate-100 text-3xl text-green-600 transition-colors duration-200 transform shadow-sm rounded-full focus:text-green-800 focus:outline-none">
                                <RiEditBoxFill />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-4 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
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
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-blue-500">
                              2.39 ETH
                            </span>

                            <div>
                              <button className="px-2 py-1 mr-1 border border-slate-100 text-3xl text-red-600 transition-colors duration-200 shadow-sm rounded-full transform focus:text-red-800 focus:outline-none">
                                <AiFillDelete />
                              </button>
                              <button className="px-2 py-1 border border-slate-100 text-3xl text-green-600 transition-colors duration-200 transform shadow-sm rounded-full focus:text-green-800 focus:outline-none">
                                <RiEditBoxFill />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex h-96 flex-col justify-between max-w-sm px-6 py-4 mx-auto border border-gray-200 shadow-sm rounded-xl w-80">
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
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-blue-500">
                              2.39 ETH
                            </span>

                            <div>
                              <button className="px-2 py-1 mr-1 border border-slate-100 text-3xl text-red-600 transition-colors duration-200 shadow-sm rounded-full transform focus:text-red-800 focus:outline-none">
                                <AiFillDelete />
                              </button>
                              <button className="px-2 py-1 border border-slate-100 text-3xl text-green-600 transition-colors duration-200 transform shadow-sm rounded-full focus:text-green-800 focus:outline-none">
                                <RiEditBoxFill />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
};

export default profile;