import { Field, Form, Formik } from "formik";
import { Fragment } from "react";
import { ModalProps } from "../../../../interfaces";
import { useAddDeliveryManMutation, useGetDeliveryMenQuery } from "../../../../redux/services/deliveryMan";

const AddDeliveryManForm: React.FC<ModalProps> = ({setIsOpen}) => {
  const [addDeliveryMan] = useAddDeliveryManMutation()
  const { refetch } = useGetDeliveryMenQuery();
  return (
    <Formik
      initialValues={{
        phone: "",
        email: "",
        firstName: "",
        lastName: "",
        type: "",
      }}
      onSubmit={(values) => {
        addDeliveryMan(values).unwrap().then(() => setIsOpen(false)).then(() => refetch());
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
              placeholder="Email address"
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
              placeholder="Email address"
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
              placeholder="Email address"
              name="email"
              type="email"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <Field
              className="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Phone Number"
              name="phone"
              type="number"
            />
          </div>
        </div>

        <div
          className="flex flex-col gap-2"
          role="group"
        >
          <label className="p-3" htmlFor="type">deliveryMan Type</label>
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
          <div className="relative">
            <Field
              className="sr-only peer"
              type="radio"
              value="standard"
              name="type"
              id="standard"
            />
            <label
              className="flex p-4 font-medium bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent peer-checked:text-blue-500 "
              htmlFor="standard"
            >
              Standard
            </label>
          </div>
          <div className="relative">
            <Field
              className="sr-only peer"
              type="radio"
              value="express"
              name="type"
              id="express"
            />
            <label
              className="flex p-4 font-medium bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent peer-checked:text-blue-500"
              htmlFor="express"
            >
              Express
            </label>
          </div>
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-blue-500 rounded-lg sm:w-auto"
          >
            <span className="font-medium">Add deliveryMan</span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default AddDeliveryManForm;
