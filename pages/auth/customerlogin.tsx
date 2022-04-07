import React, { useState } from 'react';
import MenuGlobal from 'src/layouts/navMenu/MenuGlobal';
import NavGlobal from 'src/layouts/navMenu/NavGlobal';
import RightsideLoginCostumer from 'src/layouts/loginLayouts/CosutmerLoginLayouts/RightsideLoginCostumer';
import LeftsideLogin from 'src/layouts/loginLayouts/LeftsideLogin';

const Customerlogin: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="flex min-h-screen items-stretch bg-gray-900 text-white">
      <NavGlobal active={active} setActive={setActive} />
      <LeftsideLogin />
      <RightsideLoginCostumer />
      <MenuGlobal active={active} setActive={setActive} />
    </section>
  );
};

export default Customerlogin;
