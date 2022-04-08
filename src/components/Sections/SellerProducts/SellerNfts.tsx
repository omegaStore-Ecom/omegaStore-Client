import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { RiEditBoxFill } from 'react-icons/ri';
import Image from 'next/image';
import {useGetProductQuery} from "../../../../redux/services/products";



const SellerNfts: React.FC = () => {
  const { data } = useGetProductQuery();
  const serverBaseURI = 'http://localhost:4000 {`${serverBaseURI}/product/${product.productImage[0]}`}'
    return (
      <div className="mt-16 py-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
            data.map((product, index) => (
                <div key={index} className="nft mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-2 shadow-sm">
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
                      {product.productName}
                    </h2>
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-bold text-blue-500">
                        {product.productPrice} ETH
                      </span>

                      <button className="transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
          ))
        }


      </div>
    );
};

export default SellerNfts;