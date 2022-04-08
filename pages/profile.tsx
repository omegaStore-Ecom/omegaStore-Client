import React, { useState } from "react";
import { NextPage } from "next";
import PackageSection from "../src/layouts/Seller/PackageSection";
import MenuGlobal from "../src/layouts/navMenu/MenuGlobal";
import NavGlobal from "../src/layouts/navMenu/NavGlobal";

const Profile: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="min-h-screen w-full">
      <NavGlobal active={active} setActive={setActive} />
      <PackageSection />;
      <MenuGlobal active={active} setActive={setActive} />
    </div>
  ); 
};

export default Profile;
 