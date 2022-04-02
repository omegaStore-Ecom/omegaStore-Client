import React from 'react';
import Image from 'next/image';


const HeroSection: React.FC = () => {
    return (
      <div className="h-4/5 w-full overflow-hidden">
        <div className="main-container w-full h-full">
          <div className="main w-full h-full bg-[#e21339]">
            <div className="min-h-screen relative w-full h-full">
              <div className="flex justify-center items-center w-full h-full top-0 left-0 absolute">
                <div className="-mr-32 ml-32">
                  <Image
                    src="/img2.png"
                    layout="raw"
                    alt=""
                    width={543}
                    height={516}
                    className="img w-4/5 -z-10"
                  />
                  <span className="shadow1"></span>
                </div>
                <div className="-ml-32">
                  <Image
                    src="/img1.png"
                    layout="raw"
                    alt=""
                    width={648}
                    height={848}
                    className="img w-4/5 z-10 left-1/2"
                  />
                  {/* <span className="shadow2"></span> */}
                </div>
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center  relative z-20">
                <h1 className="text-8xl text-center font-semibold text-white mb-20 shadowDieTwice">
                  Sell anything, everywhere
                </h1>
                <p className="text-3xl font-semibold text-white mb-10 shadowDieTwice">
                  Easier, faster, and all from one place.
                </p>
                <div className="flex justify-between w-1/4 mt-10">
                  <button className="btn">Become a seller</button>
                  <button className="btn">Explor Products</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;