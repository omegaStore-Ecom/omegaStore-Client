import React, { useState } from 'react';
import BottomBar from '../../src/layouts/Home/BottomBar';
import HeroSection from '../../src/layouts/Home/HeroSection';
import Menu from '../../src/layouts/Home/Menu';
import NavBar from '../../src/layouts/Home/NavBar';


const MainLayout: React.FC = () => {
    const [active, setActive] = useState(false);
    return (
      <div className={`wrapper ${active ? 'active' : ''}`}>
        <NavBar active={active} setActive={setActive} />
        <HeroSection />
        <Menu active={active} setActive={setActive} />
        <BottomBar />
      </div>
    );
};

export default MainLayout;