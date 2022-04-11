import { Field, Form, Formik } from "formik";
import { UpdateProps } from "interfaces/index";
import {
  useGetDeliveryMenByIdQuery,
  useGetDeliveryMenQuery,
  useUpdateDeliveryManMutation,
} from "redux/services/deliveryMan";
import {useGetAdminQuery, useGetAllAdminsQuery, useUpdateAdminMutation} from "../../../../../redux/services/admin";

const UpdateAdminForm: React.FC<UpdateProps> = ({ setIsOpen, id }) => {
  const { refetch } = useGetAllAdminsQuery();
  const { data, error, isLoading } = useGetAdminQuery(id);
  const [update, { isLoading: isUpdating }] = useUpdateAdminMutation();
  return (
    <Formik
      initialValues={{

        email: data?.email || "",
        firstName: data?.firstName || "",
        lastName: data?.lastName || "",

      }}
      enableReinitialize
      onSubmit={async (values) => {
        update({ id, ...values })
          .unwrap()
          .then(() => setIsOpen(false))
          .then(() => refetch());
      }}
    >
      <Form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="firstName">
              FirstName {id}
            </label>
            <Field
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Email address"
              name="email"
              type="email"
            />
          </div>


        </div>


        <div className="pt-6">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
          >
            <span className="font-medium">
              {isUpdating ? "updating..." : "update deliveryMan"}
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default UpdateAdminForm;
