import { useState } from "react";
import AddDeliveryManForm from "src/components/Forms/DeliveryMan/AddDeliveryManForm/index";
import ModalWrapper from "src/shared/ModalWrapper/index";
import AdminTable from "../../components/Table/adminTable";
import AddAdminForm from "../../components/Forms/admin/AddAdminForm";
const AddAdminLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="m-auto w-[90%] bg-gray-100">
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-2">
                    <div className="flex items-center justify-between ">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-4xl font-medium">Add Admin</p>
                        </div>
                        <div className="">
                            <button className="w-40 rounded border border-green-600 bg-green-600 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500" onClick={() => setIsOpen(!isOpen)}>+</button>
                        </div>
                    </div>
                </div>
                <AdminTable />
            </section>

            <ModalWrapper
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={""}
                component={<AddAdminForm setIsOpen={setIsOpen} />}
            />
        </>
    );
};
export default AddAdminLayout;
