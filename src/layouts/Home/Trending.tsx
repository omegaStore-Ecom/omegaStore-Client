import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImFire } from 'react-icons/im';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { useGetProductQuery } from '../../../redux/services/products';

const Trending: React.FC = () => {
  const { data } = useGetProductQuery();
    const [sort, setSort] = useState('default');
    const [category, setCategory] = useState('defaultC');
    return (
      <section className="trending min-h-screen w-full bg-[#f3fbfe]">
        <div className="container mx-auto px-6 py-8">
          <div className="lg:-mx-2 lg:flex">
            <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
              <div className="flex items-center justify-between text-sm tracking-widest">
                <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                  Trending <span className="ml-3 text-blue-500">NFTs</span>{' '}
                  <ImFire className="ml-2 text-orange-600" />
                </h1>
                <div className="flex w-1/2 justify-end gap-4">
                  <select
                    defaultValue={'defaultC'}
                    onChange={(e) => setCategory(e.target.value)}
                    className="items-center rounded-lg bg-gray-800 px-3 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:px-14 md:py-2.5"
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
                    className="items-center rounded-lg bg-gray-800 px-4 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:px-14 md:py-2.5"
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
                {data &&
                  [...data].slice(0,8).map((product, index) => (
                    <div
                      key={index}
                      className="nft mx-auto flex h-80 w-64 max-w-sm flex-col justify-between rounded-xl border border-slate-200 px-6 py-2 shadow-sm"
                    >
                      <div className="flex justify-between">
                        <p className="flex w-1/2 items-center">
                          {' '}
                          <span className="mr-2 h-4 w-4 rounded-full bg-orange-300"/>{' '}
                          seller
                        </p>
                        <p className="w-1/2 text-right">collection</p>
                      </div>
                      <div className="relative h-48 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
                        <Image
                          src={product.productImage}
                          alt=""
                          width="100%"
                          height="100%"
                          layout="fill"
                          className="rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-end justify-between">
                          <h2 className="flex flex-col justify-between text-sm font-bold text-gray-800">
                            {product.productName}
                          </h2>
                          <span className="text-sm font-bold text-blue-500">
                            {product.productPrice} ETH
                          </span>
                        </div>
                        <button className="cartBtn mt-3 flex items-center justify-center rounded-lg border border-slate-200 py-1">
                          <BsFillBagPlusFill />
                          <span className="ml-2 text-xs">Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Trending;