import React from "react";
import AdminLoginForm from "src/components/Forms/admin/AdminLoginForm";
import login from "public/team-1.jpeg";
import Image from "next/image";
const AdminLoginLayout = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
        </div>
        <AdminLoginForm />
      </div>

      <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
        <Image
          layout="fill"
          className="absolute inset-0 object-cover w-full h-full"
          src={login}
        
          alt=""
        />
      </div>
    </section>
  );
};

export default AdminLoginLayout;
