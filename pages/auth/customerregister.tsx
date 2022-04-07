import React, { useState } from 'react';
import LeftsideRegister from 'src/layouts/loginLayouts/LeftsideRegister';
import MenuGlobal from 'src/layouts/navMenu/MenuGlobal';
import NavGlobal from 'src/layouts/navMenu/NavGlobal';
import RightsideRegisterCostumer from '../../src/layouts/loginLayouts/CosutmerLoginLayouts/RightsideRegisterCostumer';

const Costumerlogin: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="flex min-h-screen items-stretch bg-gray-900 text-white">
      <NavGlobal active={active} setActive={setActive} />
      <LeftsideRegister />
      <RightsideRegisterCostumer />
      <MenuGlobal active={active} setActive={setActive} />
    </section>
  );
};

export default Costumerlogin;
