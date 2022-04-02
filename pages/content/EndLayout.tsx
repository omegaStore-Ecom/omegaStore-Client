import React from 'react';
import Contact from '../../src/layouts/Home/Contact';
import Footer from '../../src/layouts/Home/Footer';



const EndLayout: React.FC = () => {
    return (
      <div className="w-full h-screen relative">
        <Contact />
        <Footer />
      </div>
    );
};

export default EndLayout;