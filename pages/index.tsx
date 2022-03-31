import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {addLineItem, resetCartState} from "../redux/features/cartSlice";
import { LineItemType } from "../interfaces";
import { Fragment } from "react";
import AdminLoginLayout from "../src/layouts/AdminLoginLayout";
import {clearData} from "../redux/features/authSlice";

const Home: NextPage = () => {
    const product = useAppSelector((state) => state.cart)
    const user = useAppSelector((state) => state.user)

    const dispatch = useAppDispatch()

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
        productBrand: ""

    }
    const add = () => {
        dispatch(addLineItem(cart))
    }
    const reset = () => {
        dispatch(resetCartState())
    }
    const logout = () => {
        dispatch(clearData())
    }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="./auth/AdminLogin">admin login</Link>


        <h1>current user : {user.email} </h1>

        <button className="px-12 py-3 bg-blue-500 text-white font-bold rounded-md" onClick={() => add()}>add to cart</button>

        <button className="px-12 py-3 bg-red-500 text-white font-bold rounded-md" onClick={() => reset()}>reset</button>

        <button className="px-12 py-3 bg-amber-500 text-white font-bold rounded-md" onClick={() => logout()}>logout</button>

        <AdminLoginLayout/>

    </div>
  );
};

export default Home;
