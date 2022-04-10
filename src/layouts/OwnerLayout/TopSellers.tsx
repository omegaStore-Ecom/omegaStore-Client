import React from 'react';
import Image from 'next/image';
import { ImFire } from 'react-icons/im';
import { useGetSellersQuery } from '../../../redux/services/seller';



const TopSellers: React.FC = () => {
  const { data } = useGetSellersQuery();
    return (
      <div className="container mx-auto h-1/2 px-6 py-8">
        <div className="lg:-mx-2 lg:flex">
          <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
            <div className="flex items-center justify-between text-sm tracking-widest">
              <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                Top <span className="ml-3 text-blue-500">Sellers</span>{' '}
                <ImFire className="ml-2 text-orange-600" />
              </h1>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data &&
                [...data].slice(0, 8).map((seller, index) => (
                  <div
                    key={index}
                    className="relative flex w-72 rounded-2xl border shadow-xl hover:shadow-none"
                  >
                    <div className="flex w-1/2 items-center justify-center py-3">
                      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full shadow-lg ring-2 ring-orange-500 ring-offset-4">
                        <Image
                          src="/ca.webp"
                          alt=""
                          width="100%"
                          height="100%"
                          className="rounded-full border-2 border-red-600"
                        />
                      </div>
                    </div>
                    <div className="flex h-full w-1/2 flex-col justify-around font-bold">
                      <div className="flex flex-col text-2xl font-bold">
                        <h1 className="name break-words">{seller.firstName}</h1>
                      </div>
                      <button className="cursor-pointer rounded-l-2xl rounded-r-sm border border-gray-300 p-1 px-4 shadow-md hover:bg-gray-700 hover:text-white">
                        View
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopSellers;