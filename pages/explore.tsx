import React, { useEffect, useState } from "react";
import NavGlobal from "../src/layouts/navMenu/NavGlobal";
import MenuGlobal from "../src/layouts/navMenu/MenuGlobal";
import SellerNfts from "../src/components/Sections/SellerProducts/SellerNfts";
import AllNft from "src/components/Sections/AllNft";

const Explore: React.FC = () => {
  const [active, setActive] = useState(false);
  const [sort, setSort] = useState("default");
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
                  defaultValue={"default"}
                  onChange={(e) => setSort(e.target.value)}
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
            <AllNft sortBy={sort} />
          </div>
        </div>
      </div>
      <MenuGlobal active={active} setActive={setActive} />
    </section>
  );
};

export default Explore;
