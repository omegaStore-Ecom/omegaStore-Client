/* eslint-disable react/display-name */
import React, {useEffect, useState} from 'react';
import HeroSection from 'src/layouts/Home/HeroSection';
import Menu from 'src/layouts/Home/Menu';
import NavBar from 'src/layouts/Home/NavBar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const MainLayout = React.forwardRef<HTMLDivElement | null, unknown>((prop, ref) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        gsap.to(".wrapper", {
            duration: 3,
            opacity: 0,
            stagger: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: "wrapper",
                /*endTrigger:"boxBody.current",*/
                /*markers: true,*/
                start: 'bottom 92%',
                end: 'bottom 50%',
                scrub: 4,
                /*pin: boxMain.current,*/
                toggleClass: ".hero",
                toggleActions: 'restart complete reverse reset',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    },[]);
    return (
      <div className={`wrapper ${active ? 'active' : ''}`}>
        <NavBar active={active} setActive={setActive} />
        <HeroSection active={active} />
        <Menu active={active} setActive={setActive} />
      </div>
    );
});

export default MainLayout;