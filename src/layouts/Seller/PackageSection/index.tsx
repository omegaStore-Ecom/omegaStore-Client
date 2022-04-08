import { useState } from "react";
import Image from "next/image";
import SellerProducts from "src/components/Sections/SellerProducts";
import SellerCollection from "src/components/Sections/SellerCollection";
import ModalWrapper from "src/shared/ModalWrapper";
import AddProductsForm from "src/components/Forms/Products/AddProductForm";

const PackageSection = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto mt-36 bg-white p-8 px-6 py-8 shadow">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="order-last mt-20 grid grid-cols-3 text-center md:order-first md:mt-0">
            <div>
              <p className="text-xl text-gray-700">22</p>
              <p className="text-gray-400">products</p>
            </div>
            <div>
              <p className="text-xl text-gray-700">10-12-2021</p>
              <p className="text-gray-400">since</p>
            </div>
            <div>
              <p className="text-xl text-gray-700">89</p>
              <p className="text-gray-400">Solded</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-48 w-48 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-2xl">
              <Image
                src="/monjey.jpg"
                alt=""
                width="100%"
                height="100%"
                layout="fill"
                className="rounded-full border-2 border-red-600"
              />
            </div>
          </div>

          <div className="mt-32 flex justify-between space-x-8 md:mt-0 md:justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transform rounded bg-blue-600 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >
              Add product
            </button>
            <button className="flex transform items-center rounded bg-slate-500 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-lg">
              <Image
                src="/metamask.svg"
                alt=""
                width="30%"
                height="30%"
                layout="raw"
                className="mr-2"
              />{' '}
              <span>Metamask</span>
            </button>
          </div>
        </div>

        <div className="mt-20 border-b text-center">
          <h1 className="text-4xl font-medium text-gray-700">Jones </h1>
          <p className="mt-3 font-light text-gray-600">Romania</p>

          <p className="mt-3 text-gray-500">email@gmail.com</p>
          <p className="mt-2 text-gray-500">+212 45678903</p>
          <button className="transform rounded bg-gray-800 px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
            Edit profile
          </button>
          <div className="mt-6 flex w-full justify-center">
            <ul className="grid w-1/2 grid-flow-col gap-2 rounded-t-lg bg-[#f3fbfe] p-2 text-center text-gray-700">
              <li>
                <a
                  href="#page1"
                  onClick={() => setShow(true)}
                  className="flex cursor-pointer justify-center rounded-lg bg-white py-4 shadow focus:bg-slate-200 active:bg-slate-200 "
                >
                  Items
                </a>
              </li>
              <li>
                <a
                  href="#page2"
                  onClick={() => setShow(false)}
                  className="flex cursor-pointer justify-center rounded-lg bg-white py-4 text-indigo-900 shadow focus:bg-slate-200 active:bg-slate-200"
                >
                  Collections
                </a>
              </li>
            </ul>
          </div>
        </div>

        {show ? <SellerProducts /> : <SellerCollection />}
      </div>
      <ModalWrapper
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        component={<AddProductsForm setIsOpen={setIsOpen} />}
        title="Add Product"
      />
    </>
  );
};
export default PackageSection;
