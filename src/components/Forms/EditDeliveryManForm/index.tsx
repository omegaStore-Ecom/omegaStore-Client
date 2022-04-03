import { Field, Form, Formik } from "formik";
import { UpdateProps } from "./../../../../interfaces/index";
import {
  useGetDeliveryMenByIdQuery,
  useGetDeliveryMenQuery,
  useUpdateDeliveryManMutation,
} from "../../../../redux/services/deliveryMan";

const UpdateDeliveryManForm: React.FC<UpdateProps> = ({ setIsOpen, id }) => {
  const { refetch } = useGetDeliveryMenQuery();
  const { data, error, isLoading } = useGetDeliveryMenByIdQuery(id);
  const [update, { isLoading: isUpdating }] = useUpdateDeliveryManMutation();
  return (
    <Formik
      initialValues={{
        phone: data?.phone || "",
        email: data?.email || "",
        firstName: data?.firstName || "",
        lastName: data?.lastName || "",
        type: data?.type || "",
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

        <div className="flex flex-col gap-2" role="group">
          <label className="p-3" htmlFor="type">
            deliveryMan Type
          </label>
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
            <div className="relative">
              <Field
                className="peer sr-only"
                type="radio"
                value="standard"
                name="type"
                id="standard"
              />
              <label
                className="flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 font-medium hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:text-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500 "
                htmlFor="standard"
              >
                Standard
              </label>
            </div>
            <div className="relative">
              <Field
                className="peer sr-only"
                type="radio"
                value="express"
                name="type"
                id="express"
              />
              <label
                className="flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 font-medium hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:text-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500"
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
export default UpdateDeliveryManForm;
