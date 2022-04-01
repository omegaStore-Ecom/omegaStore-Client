import React from 'react';
import BodyLayout from './BodyLayout';
import EndLayout from './EndLayout';
import MainLayout from './MainLayout';


const LandingPage: React.FC = () => {
    return (
      <div>
        <MainLayout />
        <BodyLayout />
        <EndLayout />
      </div>
    );
};

export default LandingPage;