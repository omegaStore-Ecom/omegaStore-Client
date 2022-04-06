import { UpdateProps } from 'interfaces/index';
import {
useDeleteDeliveryManMutation,
  useGetDeliveryMenQuery,
} from "redux/services/deliveryMan";

const DeleteDeliveryMan: React.FC<UpdateProps> = ({ id, setIsOpen }) => {
  const { refetch } = useGetDeliveryMenQuery();
  const [deleteDD] = useDeleteDeliveryManMutation();
  const deleteDeliveryMan = async () => {
    deleteDD(id)
      .unwrap()
      .then(() => setIsOpen(false))
      .then(() => refetch());
  };

  return (
    <div className="p-6 pt-0 text-center">
      <svg
        className="mx-auto my-5 h-14 w-14 text-red-400 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to delete DeliveryMan?
      </h3>
      <button
        onClick={() => deleteDeliveryMan()}
        type="button"
        className="mr-2 inline-flex items-center rounded-md bg-red-600 px-8 py-4 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300"
      >
        Yes, Im sure
      </button>
      <button
        onClick={() => setIsOpen(false)}
        type="button"
        className="rounded-lg border border-gray-200 bg-gray-400 px-8 py-4 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-300 "
      >
        No, cancel
      </button>
    </div>
  );
};
export default DeleteDeliveryMan;
