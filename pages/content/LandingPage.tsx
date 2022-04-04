import React, { useEffect, useRef } from 'react';
import BodyLayout from './BodyLayout';
import EndLayout from './EndLayout';
import MainLayout from './MainLayout';
import { gsap } from 'gsap';
import AOS from 'aos';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC = () => {
  const boxMain = useRef(null);
  const boxBody = useRef(null);
  const boxEnd = useRef(null);
  useEffect(() => {
    gsap.from(boxBody.current, {
      duration: 3,
      y: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: boxBody.current,
        // markers: true,
        start: 'top 90%',
        end: 'bottom 60%',
        // scrub: true,
        // pin: boxMain.current,
        // toggleClass: 'active',
        // toggleActions: 'restart complete reverse reset',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  },[]);
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  return (
    <>
      <MainLayout ref={boxMain} />
      <BodyLayout ref={boxBody} />
      <EndLayout ref={boxEnd} />
    </>
  );
};

export default LandingPage;
