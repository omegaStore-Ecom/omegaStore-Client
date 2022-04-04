/* eslint-disable react/display-name */
import React, { useState } from 'react';
import HeroSection from '../../src/layouts/Home/HeroSection';
import Menu from '../../src/layouts/Home/Menu';
import NavBar from '../../src/layouts/Home/NavBar';


const MainLayout = React.forwardRef<HTMLDivElement | null, unknown>((prop, ref) => {
    const [active, setActive] = useState(false);
    return (
      <div className={`wrapper ${active ? 'active' : ''}`}>
        <NavBar active={active} setActive={setActive} />
        <HeroSection active={active} />
        <Menu active={active} setActive={setActive} />
      </div>
    );
});

export default MainLayout;