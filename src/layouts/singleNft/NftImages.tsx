import React, { useState } from 'react';
import ImageSlide from '../../helpers/ImageSlide';


const NftImages: React.FC = () => {

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            <ImageSlide/>
      </div>
    );
};

export default NftImages;