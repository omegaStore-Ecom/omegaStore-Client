import React, { useState } from "react";
import SellerNfts from "./SellerNfts";

const SellerProducts = () => {
  const [sort, setSort] = useState("default");
  const [category , setCategory] = useState("defaultC");

  return (
    <section className="w-full">
      <div className="container mx-auto border-gray-100 px-6 py-8">
        <div className="lg:-mx-2 lg:flex">
          <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
            <div className="flex items-center justify-between text-sm tracking-widest">
              <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                Collection Name
              </h1>
              <div className="flex w-1/2 justify-end gap-4">
                <select
                  defaultValue={'defaultC'}
                  onChange={(e) => setCategory(e.target.value)}
                  className="items-center rounded-lg bg-gray-800 px-4 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:px-14 md:py-2.5"
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
            <SellerNfts />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SellerProducts;
