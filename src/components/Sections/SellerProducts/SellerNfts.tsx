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
            className="mx-auto flex h-96 w-80 max-w-sm flex-col justify-between rounded-xl border border-gray-200 px-6 py-4 shadow-sm"
          >
            <div className="relative h-64 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md">
              <Image
                src={`http://localhost:4000/upload/product/${product.productImage[0]}`}
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
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-500">
                  {product.productPrice}
                </span>

                <div>
                  <button className="mr-1 transform rounded-full border border-slate-100 px-2 py-1 text-3xl text-red-600 shadow-sm transition-colors duration-200 focus:text-red-800 focus:outline-none">
                    <AiFillDelete />
                  </button>
                  <button className="transform rounded-full border border-slate-100 px-2 py-1 text-3xl text-green-600 shadow-sm transition-colors duration-200 focus:text-green-800 focus:outline-none">
                    <RiEditBoxFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SellerNfts;
