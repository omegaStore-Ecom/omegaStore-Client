import React, { useState } from "react";
import Image from "next/image";
import { useGetProductQuery } from "redux/services/products";
import category from "../../../layouts/Home/Category";
import { BsFillBagPlusFill } from 'react-icons/bs';

import {useAppDispatch} from "../../../../redux/hooks";
import {addLineItem} from "../../../../redux/features/cartSlice";

interface Props {
  sortBy: string;
  category: string
}
const AllNft: React.FC<Props> = ({ sortBy , category}) => {
  const { data } = useGetProductQuery();
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false);

  // sort array by given criteria
  const sortTypes: any = {
    price: {
      fn: (a: { productPrice: number; }, b: { productPrice: number; }) => a.productPrice - b.productPrice,
    },
    date: {
      fn: (a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    name: {
      fn: (a: { productName: string; }, b: { productName: any; }) => a.productName.localeCompare(b.productName),
    },
    default: {
      fn: (a: any, b: any) => a,
    },
  };

  // filter array by given criteria
  const filterType: any = {
    defaultC: {
      fn: (a: { productCategory: string; }) => a.productCategory === a.productCategory,
    },
    Art: {
      fn: (a: { productCategory: string; }) => a.productCategory === "Art",
    },
  };

  return (
    // @ts-ignore
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data &&
        [...data]
          .filter(filterType[category].fn)
          .sort(sortTypes[sortBy].fn)
          .map((product, index) => (
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

                <button onClick={() => dispatch(addLineItem(product))} className="cartBtn mt-3 flex items-center justify-center rounded-lg border border-slate-200 py-1">

                  <BsFillBagPlusFill />
                  <span className="ml-2 text-xs">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default AllNft;
