import React, { useState } from 'react';
import CustomerProfile from '../src/layouts/Seller/customerProfile';
import NavGlobal from '../src/layouts/navMenu/NavGlobal';
import MenuGlobal from '../src/layouts/navMenu/MenuGlobal';
import { NextPage } from 'next';


const CustomerPage: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="h-screen">
      <NavGlobal active={active} setActive={setActive} />
      <CustomerProfile />
      <MenuGlobal active={active} setActive={setActive} />
    </div>
  );
};

export default CustomerPage;