import React from 'react';
import { Field, Form, Formik } from 'formik';
import {useRegisterCustomerMutation} from "../../../../../redux/services/customer";


const CostumerRegisterForm: React.FC = () => {
    const [customerRegister] = useRegisterCustomerMutation()
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        email: '',
      }}
      // validationSchema={}
      onSubmit={async (values : any) => {
          await customerRegister(values)
            .unwrap()
            .then(async (payload) => {

            });

      }}
    >
      {({}) => (
        <Form className="mx-auto w-full px-4 sm:w-2/3 lg:px-0">
          <div className="pb-2 pt-4">
            <Field
              className="block w-full rounded-full bg-black p-4 text-lg"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>

          <div className="pb-2 pt-4">
            <Field
              className="block w-full rounded-full bg-black p-4 text-lg"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>

          <div className="pb-2 pt-4">
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="block w-full rounded-full bg-black p-4 text-lg"
            />
          </div>

          <div className="pb-2 pt-4">
            <Field
              className="block w-full rounded-full bg-black p-4 text-lg"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="pb-2 pt-4">
            <Field
              className="block w-full rounded-full bg-black p-4 text-lg"
              type="number"
              name="phone"
              placeholder="Phone"
            />
          </div>
          <div className="text-right text-gray-400 hover:text-gray-100 hover:underline">
            <a href="#">Forgot your password?</a>
          </div>
          <div className="px-4 pb-2 pt-4">
            <button
              type="submit"
              className="block w-full rounded-full bg-indigo-600 p-4 text-lg uppercase hover:bg-indigo-700 focus:outline-none"
            >
              sign Up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CostumerRegisterForm;