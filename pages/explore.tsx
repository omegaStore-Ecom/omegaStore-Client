import React, { useEffect, useState } from "react";
import NavGlobal from "../src/layouts/navMenu/NavGlobal";
import MenuGlobal from "../src/layouts/navMenu/MenuGlobal";
import SellerNfts from "../src/components/Sections/SellerProducts/SellerNfts";
import AllNft from "src/components/Sections/AllNft";

const Explore: React.FC = () => {
  const [active, setActive] = useState(false);
  const [sort, setSort] = useState("default");
  const [category , setCategory] = useState("defaultC")
  return (
    <section className="min-h-screen w-full">
      <NavGlobal active={active} setActive={setActive} />
      <div className="container mx-auto mt-20 px-6 py-8">
        <div className="lg:-mx-2 lg:flex">
          <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
            <div className="flex items-center justify-between text-sm tracking-widest">
              <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                Explore All <span className="ml-3 text-blue-500">NFTs</span>{" "}
              </h1>
              <div className="flex w-1/2 justify-end gap-4">
                <select
                  defaultValue={"defaultC"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="text-white hover:bg-gray-700 bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center items-center"
                >
                  <option value="defaultC" selected>
                    Category
                  </option>
                  <option value="Art">Art</option>
                  <option>Animals</option>
                  <option>Toys</option>
                </select>

                <select
                  defaultValue={"default"}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-white hover:bg-gray-700 bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center items-center"
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
            <AllNft sortBy={sort} category={category}/>
          </div>
        </div>
      </div>
      <MenuGlobal active={active} setActive={setActive} />
    </section>
  );
};

export default Explore;
