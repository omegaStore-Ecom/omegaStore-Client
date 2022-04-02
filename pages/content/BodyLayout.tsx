import React from 'react';
import Category from '../../src/layouts/Home/Category';
import Newest from '../../src/layouts/Home/Newest';
import Owner from '../../src/layouts/Home/Owner';
import Trending from '../../src/layouts/Home/Trending';


const BodyLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
        <Trending/>
        <Newest/>
        <Owner/>
        <Category/>
    </div>
  );
};

export default BodyLayout;
