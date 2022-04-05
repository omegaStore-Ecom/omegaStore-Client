import React from 'react';
import Image from 'next/image';


const NftImages: React.FC = () => {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/ta.webp"
            alt=""
            width="100%"
            height="100%"
            layout="raw"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    );
};

export default NftImages;