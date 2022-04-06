import { useState } from "react";
import DeliveryManTable from "src/components/Table/DeliveryManTable";
import AddDeliveryManForm from "src/components/Forms/DeliveryMan/AddDeliveryManForm/index";
import ModalWrapper from "src/shared/ModalWrapper/index";
const AddDeliveryManLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="m-auto w-[90%] bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between ">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-4xl font-medium">Add delivery Man</p>
            </div>
            <div className="">
              <button className="w-40 rounded border border-green-600 bg-green-600 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500" onClick={() => setIsOpen(!isOpen)}>+</button>
            </div>
          </div>
        </div>
        <DeliveryManTable />
      </section>

      <ModalWrapper
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={""}
        component={<AddDeliveryManForm setIsOpen={setIsOpen} />}
      />
    </>
  );
};
export default AddDeliveryManLayout;
