import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiEditBoxFill } from "react-icons/ri";
import Image from "next/image";
import { useGetProductQuery } from "redux/services/products";

const SellerNfts: React.FC = () => {
  const { data } = useGetProductQuery();
  const [isOpen , setIsOpen] = useState(false)
  
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data &&
        data.map((product, index) => (
          <div
            key={index}
            className="mx-auto flex h-80 w-64 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-4 shadow-sm"
          >
            <div className="flex justify-between">
              <p className="flex w-1/2 items-center">
                {' '}
                <span className="mr-2 h-4 w-4 rounded-full bg-orange-300"></span>{' '}
                seller
              </p>
              <p className="w-1/2 text-right">collection</p>
            </div>
            <div className="relative h-48 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
              <Image
                src={`http://localhost:4000/upload/product/${product.productImage[0]}`}
                alt=""
                width="100%"
                height="100%"
                layout="fill"
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h2 className="flex flex-col text-base font-bold text-gray-800">
                  {product.productName}
                </h2>
                <span className="text-sm font-bold text-blue-500">
                  {product.productPrice} ETH
                </span>
              </div>

              <div className="flex w-full mt-3">
                <button className="cartBtn flex w-1/2 cursor-pointer justify-center rounded-l-2xl p-1 rounded-r-sm border border-gray-300">
                  <AiFillDelete />
                  <span className="text-xs ml-1">Delete</span>
                </button>
                <button className="cartBtn flex w-1/2 cursor-pointer justify-center rounded-r-2xl p-1 rounded-l-sm border border-gray-300 px-1">
                  <RiEditBoxFill /> <span className="text-xs ml-1">Edit</span>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SellerNfts;
