/* eslint-disable react/display-name */
import React from 'react';
import Category from 'src/layouts/Home/Category';
import Newest from 'src/layouts/Home/Newest';
import Owner from 'src/layouts/Home/Owner';
import Trending from 'src/layouts/Home/Trending';
import EndLayout from "./EndLayout";


const BodyLayout = React.forwardRef<HTMLDivElement | null, unknown>((prop, ref) => {
  return (
    <div className="min-h-screen w-full " ref={ref}>
      <Trending />
      <Newest />
      <Owner />
      <Category />
      <EndLayout/>
    </div>
  );
});

export default BodyLayout;
