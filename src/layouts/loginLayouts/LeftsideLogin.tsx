import React from 'react';


const LeftsideLogin: React.FC = () => {
    return (
      <div className="relative hidden w-1/2 items-center bg-gray-500 bg-[url(/login.png)] bg-cover bg-center bg-no-repeat lg:flex">
        <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
        <div className="w-full px-24 relative z-20">
          <h1 className="text-left text-5xl font-bold tracking-wide">
            Sign In
          </h1>
          <p className="my-4 text-3xl">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
      </div>
    );
};

export default LeftsideLogin;