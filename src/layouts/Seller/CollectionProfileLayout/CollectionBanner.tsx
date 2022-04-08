import React from 'react';


const CollectionBanner: React.FC = () => {
    return (
      <section className="relative block h-96 makeblur">
        <div className="h-full w-full bg-[url(https://static.vecteezy.com/system/resources/previews/005/347/600/non_2x/virtual-reality-headset-and-controllers-for-gaming-vr-helmet-metaverse-technology-concept-vector.jpg)] bg-cover bg-center">
          <span id="blackOverlay" className="absolute h-full w-full bg-black opacity-30"/>
        </div>
      </section>
    );
};

export default CollectionBanner;