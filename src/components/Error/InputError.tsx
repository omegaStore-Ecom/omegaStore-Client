import { ErrorMessage } from "formik";

const InputError = ({ input }: any) => {
  return (
    <ErrorMessage name={input}>
      {(msg) => (
        <div className="text-red-500 text-[12px] p-2 font-medium">{msg}</div>
      )}
    </ErrorMessage>
  );
};
export default InputError;
