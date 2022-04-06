import React from 'react';


const LeftsideRegister: React.FC = () => {
    return (
      <div className="relative hidden w-1/2 items-center bg-gray-500 bg-[url(/register.jpg)] bg-cover bg-center bg-no-repeat lg:flex">
        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
        <div className="z-10 w-full px-24">
          <h1 className="text-left text-5xl font-bold tracking-wide">
            Register
          </h1>
          <p className="my-4 text-3xl">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
      </div>
    );
};

export default LeftsideRegister;