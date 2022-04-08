import React from 'react';
import TopCollection from '../OwnerLayout/TopCollection';
import TopSellers from '../OwnerLayout/TopSellers';


const Owner: React.FC = () => {
    return (
      <section className="w-full min-h-screen bg-[#f3fbfe]">
        <TopCollection/>
        <TopSellers/>
      </section>
    );
};

export default Owner;