import React, { useState } from 'react';
import Footer from '../layouts/Home/Footer';
import NavBar from '../layouts/Home/NavBar';

const Layout: React.FC = ({ children }) => {

    const [active, setActive] = useState(false)
    return (
      <div className="w-screen bg-fuchsia-600">
        <NavBar active={active} setActive={setActive} />
        {children}
        <Footer />
      </div>
    );
};

export default Layout;