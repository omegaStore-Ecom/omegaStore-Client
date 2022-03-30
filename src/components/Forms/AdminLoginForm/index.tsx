import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { useLoginAdminMutation } from "../../../../redux/services/admin";
import At from "../../../assets/svg/at";
import Eye from "../../../assets/svg/eye";
import InputError from "../../Error/InputError";
import { AdminLogin } from "./../../../validation/LoginSchemas";
import { useAppDispatch } from "./../../../../redux/hooks";
import { CurrentUser } from "./../../../../interfaces/index";
import { currentUser } from "../../../../redux/features/authSlice";

const AdminLoginForm = () => {
  const [adminLogin] = useLoginAdminMutation();
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={AdminLogin}
      onSubmit={async (values) => {
        await adminLogin(values)
      }}
    >
      {({ errors, touched }) => (
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
