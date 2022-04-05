import React from 'react';


const CollectionInfo: React.FC = () => {
    return (
      <>
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right">
            <div className="mt-32 py-6 px-3 sm:mt-0">
              <button
                className="mb-1 rounded bg-blue-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-blue-700 hover:shadow-md focus:outline-none active:bg-pink-600 sm:mr-2"
                type="button"
              >
                Follow
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:order-1 lg:w-4/12">
            <div className="flex justify-center py-4 pt-8 lg:pt-4">
              <div className="mr-4 p-3 text-center">
                <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                  22
                </span>
                <span className="text-blueGray-400 text-sm">Friends</span>
              </div>
              <div className="mr-4 p-3 text-center">
                <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                  10
                </span>
                <span className="text-blueGray-400 text-sm">Photos</span>
              </div>
              <div className="p-3 text-center lg:mr-4">
                <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                  89
                </span>
                <span className="text-blueGray-400 text-sm">Comments</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-blueGray-700 mb-2 text-4xl font-semibold leading-normal">
            Collection Name
          </h3>
          <div className="text-blueGray-400 mt-0 mb-2 text-sm font-bold uppercase leading-normal">
            Collection Owner
          </div>
          <div className="text-blueGray-600 mb-2 mt-8">
            Collection Description
          </div>
        </div>
      </>
    );
};

export default CollectionInfo;