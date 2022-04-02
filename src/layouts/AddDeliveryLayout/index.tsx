import DeliveryManTable from "../../components/Table/DeliveryManTable";
import AddDeliveryManForm from "./../../components/Forms/AddDeliveryManForm/index";
const AddDeliveryManLayout = () => {
  return (
    <>
      <section className="bg-gray-100 w-[90%] m-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-4xl font-medium">Add delivery Man</p>

              <div className="mt-8"></div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <AddDeliveryManForm />
            </div>
          </div>
        </div>
      <DeliveryManTable />
      </section>
    </>
  );
};
export default AddDeliveryManLayout;
