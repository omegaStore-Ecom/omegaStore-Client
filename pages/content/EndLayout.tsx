/* eslint-disable react/display-name */
import React from 'react';
import Contact from '../../src/layouts/Home/Contact';
import Footer from '../../src/layouts/Home/Footer';



const EndLayout = React.forwardRef<HTMLDivElement | null, unknown>((prop, ref) => {
    return (
      <div className="w-full h-screen md:min-h-screen relative" ref={ref}>
        <Contact />
        <Footer />
      </div>
    );
});

export default EndLayout;