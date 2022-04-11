import React from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import CostumerRegisterForm from 'src/components/Forms/Costumer/CostumerRegisterForm';
import Link from "next/link";


const RightsideRegisterCostumer: React.FC = () => {
    return (
      <div className="z-0 flex w-full items-center justify-center px-0 text-center md:px-16 lg:w-1/2">
        <div className="z-20 w-full py-6">
          <h1 className="">
            <Image
              src="/logo.svg"
              alt=""
              width="200%"
              height="50%"
              className="rounded-lg"
            />
          </h1>
          <div className="space-x-2 py-6">
              <Link href="/auth/customerlogin" passHref>
                  <span className="text-sm text-blue-400 cursor-pointer">Already Registred ? click to Sign In</span>
              </Link>
              <p className="text-lg text-gray-100 mt-4 mb-2 font-bold">Rgister</p>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-blue-700 shadow-sm shadow-white hover:text-xl focus:p-1 focus:shadow-md focus:shadow-white">
              <FaFacebookF />
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold shadow-sm shadow-white hover:text-xl focus:p-1 focus:shadow-md focus:shadow-white">
              <FcGoogle />
            </button>
          </div>
          <CostumerRegisterForm />
        </div>
      </div>
    );
};

export default RightsideRegisterCostumer;