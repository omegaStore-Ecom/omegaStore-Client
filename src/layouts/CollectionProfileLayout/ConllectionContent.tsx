import React from 'react';
import CollectionInfo from './CollectionInfo';
import CollectionNfts from './CollectionNfts';

const ConllectionContent: React.FC = () => {
    return (
      <section className="bg-blueGray-200 relative py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
            <div className="px-6">

                <CollectionInfo/>
                <CollectionNfts/>
              
            </div>
          </div>
        </div>
      </section>
    );
};

export default ConllectionContent;