import React, { useState } from 'react';
import CollectionContent from '../src/layouts/collectionsLayout/CollectionContent';
import MenuGlobal from '../src/layouts/navMenu/MenuGlobal';
import NavGlobal from '../src/layouts/navMenu/NavGlobal';


const Collections: React.FC = () => {
  const [active, setActive] = useState(false);
    return (
      <section className="min-h-screen w-full  dark:bg-gray-900">
        <NavGlobal active={active} setActive={setActive} />
        <CollectionContent />
        <MenuGlobal active={active} setActive={setActive} />
      </section>
    );
};

export default Collections;