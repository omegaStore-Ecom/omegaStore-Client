import React, {useEffect} from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import { GiShoppingBag } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface NavBarProps {
  active: boolean;
  setActive: (arg0: boolean) => void;
}
const NavGlobal: React.FC<NavBarProps> = ({ active, setActive }) => {

  useEffect(() => {
    gsap.to('.navblur', {
      /*opacity: 0.2,*/
      /*filter: 'blur(5px)',*/
      backgroundColor: '#ffffff87',
      duration: 5,
      stagger: 1,
      ease: 'slow(0.7, 0.7, false)',
      scrollTrigger: {
        trigger: 'navblur',
        /*markers: true,*/
        start: 'top top',
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="fixed top-0 left-0 z-30 h-14 w-full bg-white pb-4 shadow-sm navblur">
      <div className="m-auto flex h-full w-full items-center justify-between px-10">
        <div className="flex h-16 items-start">
          <Link href="/" passHref>
            <Image src="/logos.svg" className='cursor-pointer' alt="" width={100} height={80} />
          </Link>
        </div>
        <div className={`mb-2 flex h-full w-20 justify-evenly items-center cursor-pointer text-2xl`}>
          <Link href="/cart" passHref>
            <GiShoppingBag className="mt-5  text-2xl text-gray-900"/>
          </Link>

          {!active ? (
            <button onClick={() => setActive(!active)}>
              <TiThMenu className="absolute text-2xl text-gray-900 transition duration-150 ease-in-out" />
            </button>
          ) : (
            <button onClick={() => setActive(!active)}>
              <IoMdClose className="absolute text-2xl text-gray-900 transition duration-150 ease-in-out " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavGlobal;
