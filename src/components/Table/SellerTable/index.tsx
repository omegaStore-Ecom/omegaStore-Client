import { useState } from "react";
// import { ModalProps } from "../../../../interfaces";


import ModalWrapper from 'src/shared/ModalWrapper/index';
import {useDisableSellerMutation, useGetSellersQuery, useUpdateSellerMutation} from "../../../../redux/services/seller";


const SellerTable = () => {
    const { data , refetch } = useGetSellersQuery()
    const [disableSeller] = useUpdateSellerMutation()
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
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product limit
                        </th>
                    <th scope="col" className="px-6 py-3">
                        status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        tier
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {data &&
                    data.map((seller) => (
                        <tr className="border-b bg-white" key={seller._id}>
                            <th
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                            >
                                {seller.firstName} {seller.lastName}
                            </th>
                            <td className="px-6 py-4">{seller.email}</td>
                            <td className="px-6 py-4">{seller.phone}</td>
                            <td className="px-6 py-4">{seller.productLimit}</td>
                            <td className="px-6 py-4">{seller.status ? 'Activated' : 'not Activated'}</td>
                            <td className="px-6 py-4">{seller.type}</td>
                            <td className="space-x-2 px-6 py-4 text-right">
                                <button
                                    onClick={() => {
                                       disableSeller({
                                            id: seller._id,
                                              status : !seller.status
                                       
                                        }).unwrap().then(() => refetch())
                                    }}

                                    className={`w-20 rounded border border-indigo-600 ${!seller.status ? 'bg-indigo-600' : 'bg-gray-500'}  py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500`}
                                >
                                   {!seller.status ? 'verify' : 'disable'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default SellerTable;
