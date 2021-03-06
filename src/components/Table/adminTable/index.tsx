import { useState } from "react";
// import { ModalProps } from "../../../../interfaces";
import { useGetDeliveryMenQuery } from "redux/services/deliveryMan";
import DeleteDeliveryMan from "src/components/Forms/DeliveryMan/DeleteDeliveryMan";
import UpdateDeliveryManForm from "src/components/Forms/DeliveryMan/EditDeliveryManForm";

import ModalWrapper from 'src/shared/ModalWrapper/index';
import {useGetAdminQuery, useGetAllAdminsQuery} from "../../../../redux/services/admin";
import UpdateAdminForm from "../../Forms/admin/EditAdminForm";
import DeleteAdmin from "../../Forms/admin/DeleteAdmin";


const AdminTable = () => {
    const { data } = useGetAllAdminsQuery();
    const [isOpen, setIsOpen] = useState(false);
    const [OpenDelete, setOpenDelete] = useState(false);
    const [idUpdate , setIdUpdate] = useState<string | Number>();
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 ">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        FullName
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {data &&
                    data.map((admin) => (
                        <tr className="border-b bg-white" key={admin._id}>
                            <th
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                            >
                                {admin.firstName} {admin.lastName}
                            </th>
                            <td className="px-6 py-4">{admin.email}</td>
                            <td className="space-x-2 px-6 py-4 text-right">
                                <button
                                    onClick={() => {
                                        setIsOpen(!isOpen)
                                        setIdUpdate(admin._id)
                                    }}

                                    className="w-20 rounded border border-indigo-600 bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() =>{
                                        setOpenDelete(!OpenDelete)
                                        setIdUpdate(admin._id)
                                    }}
                                    className="w-20 rounded border border-red-600 bg-red-600 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalWrapper
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title="Edit Admin"
                component={<UpdateAdminForm id={idUpdate} setIsOpen={setIsOpen} />}
            />
            <ModalWrapper
                isOpen={OpenDelete}
                setIsOpen={setOpenDelete}
                title="delete Admin"
                component={<DeleteAdmin id={idUpdate} setIsOpen={setOpenDelete}/>}
            />


        </div>
    );
};
export default AdminTable;
