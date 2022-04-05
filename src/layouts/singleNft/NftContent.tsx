import React from 'react';
import NftImages from './NftImages';
import NftInfo from './NftInfo';



const NftContent: React.FC = () => {
    return (
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 h-4/5">
          <NftImages/>
          <NftInfo/>
        </div>
      </div>
    );
};

export default NftContent;