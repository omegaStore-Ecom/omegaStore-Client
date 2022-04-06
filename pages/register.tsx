import React, { useState } from 'react';
import LeftsideRegister from '../src/layouts/loginLayouts/LeftsideRegister';
import RightsideRegister from '../src/layouts/loginLayouts/RightsideRegister';
import MenuGlobal from '../src/layouts/navMenu/MenuGlobal';
import NavGlobal from '../src/layouts/navMenu/NavGlobal';



const Register: React.FC = () => {
  const [active, setActive] = useState(false);
    return (
      <section className="flex min-h-screen items-stretch bg-gray-900 text-white">
        <NavGlobal active={active} setActive={setActive} />
        <LeftsideRegister />
        <RightsideRegister />
        <MenuGlobal active={active} setActive={setActive} />
      </section>
    );
};

export default Register;