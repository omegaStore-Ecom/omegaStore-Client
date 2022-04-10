import { useState } from "react";
import Image from "next/image";
import SellerProducts from "src/components/Sections/SellerProducts";
import SellerCollection from "src/components/Sections/SellerCollection";
import ModalWrapper from "src/shared/ModalWrapper";
import AddProductsForm from "src/components/Forms/Products/AddProductForm";
import {useAppSelector} from "../../../../redux/hooks";
import {useGetSellerByIdQuery} from "../../../../redux/services/seller";

const SellerProfile = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const seller = useAppSelector((state) => state.currentUser)
  // @ts-ignore
  const { data , refetch } = useGetSellerByIdQuery( seller.id )
  return (
    <>
      <section className="w-full">
        <div className="p-16">
          <div className="mt-24 rounded-lg bg-white p-8 shadow">
            <div className="grid grid-cols-1 items-start md:grid-cols-3">
              <div className="text-start order-last mt-20 grid grid-rows-3 gap-5 md:order-first md:mt-0">
                <div>
                  <p className="font-bold text-gray-400">Products meter</p>
                  <p className="text-xl font-bold text-gray-700">
                    {data?.productLimit}/
                    {seller.type == 'Starter'
                      ? '10'
                      : seller.type == 'Pro'
                      ? '20'
                      : seller.type == 'Expert'
                      ? '♾️'
                      : null}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-400">joined on</p>
                  <p className="text-xl font-bold text-gray-700">10-12-2021</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-36 w-36 items-center justify-center rounded-full border-[7px] border-white bg-indigo-100 text-indigo-500 shadow-md">
                  <Image
                    src="/ca.webp"
                    alt=""
                    width="100%"
                    height="100%"
                    layout="fill"
                    className="rounded-full border-2 border-red-600"
                  />
                </div>

                <div className="mt-20  text-center">
                  <p className="mt-3 font-light text-gray-600">
                    👤 {seller.firstName} {seller.lastName}
                  </p>

                  <p className="mt-3 text-gray-500">✉️ {seller.email}</p>
                  <p className="mt-2 text-gray-500">📞 {seller.phone}</p>
                </div>
              </div>

              <div className="grid w-full justify-end gap-4 text-lg">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cartBtn inline-block rounded-full border border-gray-800 px-6 py-3 text-xs font-semibold uppercase leading-tight text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 "
                >
                  Add product
                </button>
                <button className="cartBtn rounded-full border border-gray-800 px-6 py-3 text-xs font-semibold uppercase leading-tight text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 ">
                  <span>🦊 Metamask</span>
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cartBtn inline-block rounded-full border border-gray-800 px-6 py-3 text-xs font-semibold uppercase leading-tight text-gray-800 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 "
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

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
      </section>
      <ModalWrapper
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        component={<AddProductsForm setIsOpen={setIsOpen} refetch={refetch} />}
        title="Add Product"
      />
    </>
  );
};
export default SellerProfile;
