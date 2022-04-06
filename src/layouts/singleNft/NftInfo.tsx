import React from 'react';
import Image from 'next/image';


const NftInfo: React.FC = () => {
    return (
      <div className="sticky top-0">
        <div className="mt-8 flex justify-between">
          <div className="max-w-[35ch]">
            <h1 className="text-2xl font-bold">
              Fun Product That Does Something Cool
            </h1>

            <p className="mt-0.5 text-sm">
              category <span className="text-blue-500">name</span>
            </p>
          </div>

          <p className="text-lg font-bold">9 ETH</p>
        </div>

        <details className="group relative mt-4">
          <summary className="block">
            <div>
              <div className="prose max-w-none group-open:hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
                </p>
              </div>

              <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                Read More
              </span>
            </div>
          </summary>

          <div className="prose max-w-none pb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              veniam dicta beatae eos ex error culpa delectus rem tenetur,
              architecto quam nesciunt, dolor veritatis nisi minus inventore,
              rerum at recusandae?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nam sapiente nobis ea veritatis error consequatur nisi
              exercitationem iure laudantium culpa, animi temporibus non! Maxime
              et quisquam amet. A, deserunt!
            </p>
          </div>
        </details>

        <div className="mt-8 h-28 w-4/5">
            <div className="mt-8 flex items-center justify-between">
                <div className="w-1/2">
                <h4 className="font-semibold">Owner By:</h4>
                <div className="flex h-28 w-full items-center">
                    <div className="h-12 w-12">
                    <Image
                        src="/monjey.jpg"
                        alt=""
                        width="100%"
                        height="100%"
                        layout="raw"
                        className="h-full w-full rounded-full object-cover"
                    />
                    </div>
                    <span className="ml-4"> Seller Name</span>
                </div>
                </div>

                <div className="w-1/2">
                <h4 className="font-semibold">Collection:</h4>
                <div className="flex h-28 w-full items-center">
                    <div className="h-12 w-12">
                    <Image
                        src="/monjey.jpg"
                        alt=""
                        width="100%"
                        height="100%"
                        layout="raw"
                        className="h-full w-full rounded-full object-cover"
                    />
                    </div>
                    <span className="ml-4"> collection name </span>
                </div>
                </div>
            </div>
            <div className="mt-8 flex">
                <button
                type="submit"
                className="ml-3 block rounded bg-gray-700 px-5 py-3 text-xs font-medium text-white hover:bg-gray-800"
                >
                Add to Cart
                </button>

                <button
                type="submit"
                className="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-800"
                >
                Collect
                </button>
            </div>
        </div>
      </div>
    );
};

export default NftInfo;