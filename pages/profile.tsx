import React, { useState } from "react";
import { NextPage } from "next";
import PackageSection from "../src/layouts/Seller/PackageSection";
import NavGlobal from "../src/layouts/navMenu/NavGlobal";
import MenuGlobal from "../src/layouts/navMenu/MenuGlobal";

const Profile: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <NavGlobal active={active} setActive={setActive} />
      <PackageSection />;
      <MenuGlobal active={active} setActive={setActive} />
    </>
  ); 
};

export default Profile;
 