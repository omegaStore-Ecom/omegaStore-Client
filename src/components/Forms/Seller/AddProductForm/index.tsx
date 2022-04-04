import { Field, Form, Formik } from "formik";
import { Fragment } from "react";
import { ModalProps } from "../../../../../interfaces";

const AddProductsForm: React.FC<ModalProps> = ({ setIsOpen }) => {
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
        console.log(values);
      }}
    >
      <Form className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="firstName">
            ProductName
          </label>
          <Field
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Product Name"
            name="productName"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="lastName">
              Category
            </label>
            <Field
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Select Category"
              name="category"
              type="text"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <Field
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Phone Number"
              name="phone"
              type="number"
            />
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
          >
            <span className="font-medium">Add deliveryMan</span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default AddProductsForm;
