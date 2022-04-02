
import LandingPage from './content/LandingPage';
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addLineItem, resetCartState } from "../redux/features/cartSlice";
import { LineItemType } from "../interfaces";
import AdminLoginLayout from "../src/layouts/AdminLoginLayout";
import { clearData } from "../redux/features/authSlice";


const Home: NextPage = () => {
  const product = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.currentUser);
 
  const dispatch = useAppDispatch();

  const cart: LineItemType = {
    product_id: "2323",
    productName: "",
    productDescription: "",
    productPrice: 0,
    productImage: "",
    productCategory: "",
    productQuantity: 0,
    productSeller: "",
    productStatus: "",
    productBrand: "",
  };
  const add = () => {
    dispatch(addLineItem(cart));
  };
  const reset = () => {
    dispatch(resetCartState());
  };
  const logout = () => {
    dispatch(clearData());
  };
  return (
    <div>

      <LandingPage />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="./auth/AdminLogin">admin login</Link>
      <Link href="./dashboards/ManageDeliveryMan">Manage deliveryMan</Link>

      <h1>current user : {user?.email} </h1>


      <button
        className="rounded-md bg-blue-500 px-12 py-3 font-bold text-white"
        onClick={() => add()}
      >
        add to cart
      </button>

      <button
        className="rounded-md bg-red-500 px-12 py-3 font-bold text-white"
        onClick={() => reset()}
      >
        reset
      </button>

      <button
        className="rounded-md bg-amber-500 px-12 py-3 font-bold text-white"
        onClick={() => logout()}
      >
        logout
      </button>

      <AdminLoginLayout />
    </div>
  );
};

export default Home;
