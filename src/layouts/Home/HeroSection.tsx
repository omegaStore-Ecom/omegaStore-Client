import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {useAppSelector} from "../../../redux/hooks";
gsap.registerPlugin(ScrollTrigger);


interface NavBarProps {
  active: boolean;
}

const HeroSection: React.FC<NavBarProps> = ({active}) => {

  const user = useAppSelector(state => state.currentUser.role);
      useEffect(() => {
        gsap.to('.effect', {
          duration: 1,
          // opacity: 0,
          // filter: 'blur(5px)',
          filter: 'brightness(0.2)',
          
          backgroundColor: 'rgba(0,0,0,0.2)',
          // stagger: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: 'effect',
            /*endTrigger:"boxBody.current",*/
            // markers: true,
            start: 'bottom 92%',
            end: 'bottom 80%',
            scrub: true,
            /*pin: boxMain.current,*/
            toggleClass: '.hero',
            toggleActions: 'restart complete reverse reset',
            //options: play, pause, resume, reset, restart, complete, reverse,none
          },
        });
      }, []);
  return (
    <div className="h-4/5 w-full overflow-hidden">
      <div
        className={`main-container h-full w-full md:block  ${
          active ? 'hidden' : ''
        }`}
      >
        <div className="main effect h-full w-full bg-gradient-to-b from-[#ff5043] via-[#f87066] to-[#f8c2c2d6]">
          <div className="relative h-full min-h-screen w-full">
            <div
              data-aos="fade-down"
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
            >
              <div className="-mr-32 ml-32">
                <Image
                  src="/img2.png"
                  layout="raw"
                  alt=""
                  width={543}
                  height={516}
                  className="img -z-10 w-4/5"
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
                  className="img left-1/2 z-10 w-4/5"
                />
                {/* <span className="shadow2"></span> */}
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="relative z-20 flex h-full w-full flex-col  items-center justify-center"
            >
              <h1 className="shadowDieTwice mb-20 text-center text-6xl font-semibold text-white md:text-8xl">
                Sell anything, everywhere
              </h1>
              <p className="shadowDieTwice mb-10 text-2xl font-semibold text-white md:text-3xl">
                Easier, faster, and all from one place.
              </p>
              <div className="mt-10 flex justify-between md:w-96">
                <Link href="/auth/sellerregister" passHref>
                  <button className="btn">Become a seller</button>
                </Link>
                <Link href="/explore" passHref>
                  <button className="btn">Explore Products</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;