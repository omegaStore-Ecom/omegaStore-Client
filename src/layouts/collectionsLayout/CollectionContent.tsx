import React from 'react';
import { useGetCollectionQuery } from 'redux/services/collection';

const CollectionContent: React.FC = () => {
    const { data } = useGetCollectionQuery();
    return (
      <div className="container mx-auto mt-20 px-6 py-8">
        <div className="lg:-mx-2 lg:flex">
          <div className="mt-6 lg:mt-0 lg:w-full lg:px-2 ">
            <div className="flex items-center justify-between text-sm tracking-widest">
              <h1 className="flex w-1/2 text-xl font-bold xl:text-4xl">
                Explore All{' '}
                <span className="ml-3 text-blue-500">Collections</span>{' '}
              </h1>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data &&
                [...data].slice(0, 8).map((collection, index) => (
                  <a
                    key={index}
                    href=""
                    className="relative block overflow-hidden rounded-xl bg-[url(https://i.pinimg.com/564x/c0/c6/9d/c0c69d57a7e508efc87d3fd842a3a67f.jpg)] bg-cover bg-center  bg-no-repeat"
                  >
                    <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs  font-semibold text-white">
                      4.5
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1.5 h-4 w-4 text-yellow-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>

                    <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
                      <h5 className="text-2xl font-bold">
                        {collection.collectionName}
                      </h5>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default CollectionContent;