import React from 'react';
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {removeLineItem} from "../../../redux/features/cartSlice";


// @ts-ignore
const CartProduct = ({product}) => {
const dispatch = useAppDispatch()
    return (
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50 ">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
                <Image
                    src={`http://localhost:4000/upload/product/${product.productImage[0]}`}
                    alt=""
                    width="100%"
                    height="100%"
                    className="rounded-lg"/>
            </div>
            <div className="md:pl-3 md:w-6/12 2xl:w-3/5 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full pb-3">
                    <p className="text-base font-black leading-none text-gray-800 ">
                        {product.productName}
                    </p>
                </div>
                <p className="text-xs leading-3 text-gray-600  pt-2">SellerId: {product.productSeller}</p>
                <p className="text-xs leading-3 text-gray-600  py-4">Collection: {product.productCollection}</p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">Category: {product.productCategory}</p>

            </div>
            <div className="flex w-72 items-center">
                <div className="flex h-full w-full flex-col items-center">
                    <div className="flex-1">
                        <button
                            className="transform rounded-md bg-green-700 py-2 px-2 font-medium text-base text-white shadow transition hover:translate-y-0.5 hover:bg-gray-900 hover:shadow-lg">
                            Collect
                        </button>
                        <button
                            onClick={() => dispatch(removeLineItem(product))}
                            className="transform ml-2 rounded-md bg-red-700 py-2 px-2 font-medium text-base text-white shadow transition hover:translate-y-0.5 hover:bg-gray-900 hover:shadow-lg">Remove
                        </button>
                    </div>
                    <p className="text-base leading-none text-gray-800">
                        Price:  <span className="font-semibold">{product.productPrice} ETH</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
