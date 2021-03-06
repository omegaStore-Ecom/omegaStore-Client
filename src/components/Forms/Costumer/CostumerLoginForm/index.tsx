import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useLoginCustomerMutation } from 'redux/services/customer';
import {useAppDispatch} from "redux/hooks";
import {currentUser} from "redux/features/authSlice";

const CostumerLoginForm: React.FC = () => {
  const [customerLogin] = useLoginCustomerMutation()
    const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      // validationSchema={}
      onSubmit={async (values : any) => {
          await customerLogin(values)
            .unwrap()
            .then(async (payload) => {
             dispatch(currentUser({
                  token: payload.token,
                  role: payload.Customer.role,
                  email: payload.Customer.email,
                })
              );
            });

      }}
    >
      {({}) => (
        <Form className="mx-auto w-full px-4 sm:w-2/3 lg:px-0">
          <div className="pb-2 pt-4">
            <Field
              className="block w-full rounded-full bg-black p-4 text-lg"
              type="email"
              name="email"
              placeholder="Email"
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

          <div className="text-right text-gray-400 hover:text-gray-100 hover:underline">
            <a href="#">Forgot your password?</a>
          </div>
          <div className="px-4 pb-2 pt-4">
            <button
              type="submit"
              className="block w-full rounded-full bg-indigo-600 p-4 text-lg uppercase hover:bg-indigo-700 focus:outline-none"
            >
              sign in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default CostumerLoginForm;
