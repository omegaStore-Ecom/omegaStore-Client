import React from 'react';
import CollectionBanner from '../src/layouts/CollectionProfileLayout/CollectionBanner';
import ConllectionContent from '../src/layouts/CollectionProfileLayout/ConllectionContent';



const collectionProfile: React.FC = () => {
    return (
      <main className="min-h-screen w-full">
          <CollectionBanner/>
          <ConllectionContent/>
      </main>
    );
};

export default collectionProfile;