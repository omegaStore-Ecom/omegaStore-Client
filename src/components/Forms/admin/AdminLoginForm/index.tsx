import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { useLoginAdminMutation } from "redux/services/admin";
import At from "src/assets/svg/at";
import Eye from "src/assets/svg/eye";
import InputError from "src/components/Error/InputError";
import { useAppDispatch } from "redux/hooks";
import { currentUser } from "redux/features/authSlice";
import { AdminLoginSchema } from "src/validation/LoginSchemas";

const AdminLoginForm = () => {
  const [adminLogin] = useLoginAdminMutation();
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={AdminLoginSchema}
      onSubmit={async (values) => {
        await adminLogin(values)
          .unwrap()
          .then(async (payload) => {
           dispatch(currentUser({
                token: payload.token,
                role: payload.Admin.role,
                email: payload.Admin.email,
              })
            );
          });
      }}
    >
      {({}) => (
        <Form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <div>
            <label className="sr-only">Email</label>

            <div className="relative">
              <Field
                type="email"
                name="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
              />
              <At />
            </div>

            <InputError input="email" />
          </div>

          <div>
            <label className="sr-only">Password</label>
            <div className="relative">
              <Field
                type="password"
                name="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
              />
              <Eye />
            </div>
            <InputError input="password" />
          </div>

          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-sm font-medium text-indigo-500">
                Forgot your password?
              </a>
            </Link>

            <button
              type="submit"
              className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Sign in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AdminLoginForm;
