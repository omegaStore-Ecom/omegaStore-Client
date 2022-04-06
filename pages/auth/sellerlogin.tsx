import React, { useState } from 'react';
import LeftsideLogin from 'src/layouts/loginLayouts/LeftsideLogin';
import MenuGlobal from 'src/layouts/navMenu/MenuGlobal';
import NavGlobal from 'src/layouts/navMenu/NavGlobal';
import RightsideLogin from 'src/layouts/loginLayouts/SellerLoginLayouts/RightsideLogin';

const Login: React.FC = () => {
    const [active, setActive] = useState(false);
    return (
      <section className="flex min-h-screen bg-gray-900 text-white">
        <NavGlobal active={active} setActive={setActive} />
        <LeftsideLogin />
        <RightsideLogin />
        <MenuGlobal active={active} setActive={setActive} />
      </section>
    );
};

export default Login;