import React, { useState } from 'react';
import CollectionBanner from '../src/layouts/CollectionProfileLayout/CollectionBanner';
import ConllectionContent from '../src/layouts/CollectionProfileLayout/ConllectionContent';
import MenuGlobal from '../src/layouts/navMenu/MenuGlobal';
import NavGlobal from '../src/layouts/navMenu/NavGlobal';



const CollectionProfile: React.FC = () => {
    const [active, setActive] = useState(false);
    return (
      <main className="min-h-screen w-full">
        <NavGlobal active={active} setActive={setActive} />
        <CollectionBanner />
        <ConllectionContent />
        <MenuGlobal active={active} setActive={setActive} />
      </main>
    );
};

export default CollectionProfile;