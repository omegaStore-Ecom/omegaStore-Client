import React, { useState } from 'react';
import MenuGlobal from '../src/layouts/navMenu/MenuGlobal';
import NavGlobal from '../src/layouts/navMenu/NavGlobal';
import NftContent from '../src/layouts/singleNft/NftContent';




const SingleNft: React.FC = () => {
  const [active, setActive] = useState(false);
    return (
      <section className="flex h-screen items-center">
        <NavGlobal active={active} setActive={setActive} />
        <NftContent />
        <MenuGlobal active={active} setActive={setActive} />
      </section>
    );
};

export default SingleNft;