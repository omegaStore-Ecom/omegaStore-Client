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
    gsap.to(boxBody.current, {
      duration: 5,
      /*y: '100',*/
      /*opacity: 0,*/
      transform: "translateY(-100vh)",
      stagger: 1,
      ease: 'slow(0.7, 0.7, false)',
      scrollTrigger: {
        trigger: ".wrapper",
        /*endTrigger:"boxBody.current",*/
        /*markers: true,*/
        start: 'bottom 100%',
/*        end: 'bottom -=100vh',*/
        scrub: true,
        /*pin: true,
        pinSpacing: false,*/
          snap: 1 /("wrapper".length-1)
        /*toggleClass: '.gsap',*/
        // toggleActions: 'restart complete reverse reset',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });

/*    gsap.to(".wrapper", {
    scrollTrigger: {
      trigger:boxBody.current,
          markers: true,
          start: 'top 30%',
      scrub: true,
          pin: true,
          pinSpacing: false,
    },
  });*/

  },[]);
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  return (
    <>
      <MainLayout ref={boxMain} />
      <BodyLayout ref={boxBody} />
      {/*<EndLayout ref={boxEnd} />*/}
    </>
  );
};

export default LandingPage;
