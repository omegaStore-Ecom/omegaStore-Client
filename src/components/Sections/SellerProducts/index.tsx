import { useEffect, useState } from "react";
import SellerNfts from "./SellerNfts";

const SellerProducts = () => {


  return (
    <section className="w-ful">
      <div className="container mx-auto border-gray-100 px-6 py-8">
        <div className="lg:-mx-2 lg:flex">
          <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
            <div className="flex items-center justify-between text-sm tracking-widest">
              <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                Collection Name
              </h1>
              <div className="flex w-1/2 justify-between">
                <select
                  defaultValue={"default"}
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
                  className="select select-error select-bordered w-full max-w-xs rounded-2xl"
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
            <SellerNfts />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SellerProducts;
