import { useRegisterSellerMutation } from "redux/services/seller";
import { Field, Form, Formik } from "formik";
//@ts-ignore
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";
import {clearData, currentUser} from "redux/features/authSlice";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";


// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const SellerRegisterForm = () => {
    const [files, setFiles] = useState<File[]>([]);
    const dispatch = useAppDispatch();

    const [sellerRegister] = useRegisterSellerMutation()
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        file: "",
        password: "",
        email: "",
      }}
      // validationSchema={}
      onSubmit={async (values) => {

        let data: any = new FormData();
        data.append("firstName", values.firstName);
        data.append("lastName", values.lastName);
        data.append("email", values.email);
        data.append("phone", values.phone);
        data.append("password", values.password);
        data.append("file", files[0].file);

        await sellerRegister(data);
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

          <div className="pb-2 pt-4">
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={3}
              name="productImage"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
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
export default SellerRegisterForm;
