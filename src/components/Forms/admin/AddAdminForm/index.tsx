import {Field, Form, Formik} from "formik";
import {ModalProps} from "interfaces";
import {useAddDeliveryManMutation, useGetDeliveryMenQuery} from "redux/services/deliveryMan";
import React from "react";
import {useGetAllAdminsQuery, useRegisterAdminMutation} from "../../../../../redux/services/admin";

const AddAdminForm: React.FC<ModalProps> = ({setIsOpen}) => {
    const [addAdmin] = useRegisterAdminMutation()
    // @ts-ignore
    const {refetch} = useGetAllAdminsQuery();
    return (
        <Formik
            initialValues={{

                email: "",
                firstName: "",
                lastName: "",

            }}
            onSubmit={(values) => {
                // @ts-ignore
                addAdmin(values).unwrap().then(() => setIsOpen(false)).then(() => refetch());
            }}
        >
            <Form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="sr-only" htmlFor="firstName">
                            FirstName
                        </label>
                        <Field
                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                            placeholder="firstName"
                            name="firstName"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="lastName">
                            LastName
                        </label>
                        <Field
                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                            placeholder="lastName"
                            name="lastName"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="email">
                            Email
                        </label>
                        <Field
                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                            placeholder="Email "
                            name="email"
                            type="email"
                        />
                    </div>


                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-blue-500 rounded-lg sm:w-auto"
                    >
                        <span className="font-medium">Add Admin</span>
                    </button>
                </div>
            </Form>
        </Formik>
    );
};
export default AddAdminForm;
