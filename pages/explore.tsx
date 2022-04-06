import React, { useState } from 'react';
import NavGlobal from '../src/layouts/navMenu/NavGlobal';
import MenuGlobal from '../src/layouts/navMenu/MenuGlobal';
import SellerNfts from '../src/components/Sections/SellerProducts/SellerNfts';

const Explore: React.FC = () => {
  const [active, setActive] = useState(false);
    return (
      <section className="w-full min-h-screen">
        <NavGlobal active={active} setActive={setActive} />
        <div className="container mx-auto mt-20 px-6 py-8">
          <div className="lg:-mx-2 lg:flex">
            <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
              <div className="flex items-center justify-between text-sm tracking-widest">
                <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                  Explore All <span className="ml-3 text-blue-500">NFTs</span>{' '}
                </h1>
                <div className="flex w-1/2 justify-between">
                  <select className="select select-info w-full max-w-xs rounded-2xl">
                    <option disabled selected>
                      Category
                    </option>
                    <option>Art</option>
                    <option>Animals</option>
                    <option>Toys</option>
                  </select>

                  <select className="select select-error select-bordered w-full max-w-xs rounded-2xl">
                    <option disabled selected>
                      Sort By
                    </option>
                    <option>Price</option>
                    <option>Date</option>
                    <option>Name</option>
                  </select>
                </div>
              </div>
              <SellerNfts />
            </div>
          </div>
        </div>
        <MenuGlobal active={active} setActive={setActive} />
      </section>
    );
};

export default Explore;