import { useState } from "react";
import DeliveryManTable from "src/components/Table/DeliveryManTable";
import ModalWrapper from "src/shared/ModalWrapper/index";
import SellerTable from './../../../components/Table/SellerTable/index';
const SellerLayout = () => {
  return (
    <>
      <section className="m-auto w-[90%] bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between ">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-4xl font-medium">Manage Seller</p>
            </div>
            <div className="">
          
            </div>
          </div>
        </div>
        <SellerTable />
      </section>
    </>
  );
};
export default SellerLayout;
