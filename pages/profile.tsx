import React, { useState } from "react";
import { NextPage } from "next";
import SellerProfile from "../src/layouts/Seller/SellerProfile";
import NavGlobal from "../src/layouts/navMenu/NavGlobal";
import MenuGlobal from "../src/layouts/navMenu/MenuGlobal";

const Profile: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <NavGlobal active={active} setActive={setActive} />
      <SellerProfile />;
      <MenuGlobal active={active} setActive={setActive} />
    </>
  ); 
};

export default Profile;
 