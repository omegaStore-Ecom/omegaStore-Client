import React from 'react';


const BottomBar: React.FC = () => {
    return (
      <div className="relative z-30 flex justify-between px-10 mb-2">
        <div className="flex">
          <button className="bg-[#161616] px-2 rounded-lg text-[#e21339] font-semibold text-sm">
            EN
          </button>
          <button className="bg-[#161616] px-2 ml-2 rounded-lg text-[#e21339] font-semibold text-sm">
            FR
          </button>
        </div>
        <div className="flex">
          <button className="bg-[#161616] px-3 rounded-lg text-[#e21339] font-semibold text-sm">
            $
          </button>
          <button className="bg-[#161616] px-3 ml-2 rounded-lg text-[#e21339] font-semibold text-sm">
            £
          </button>
        </div>
      </div>
    );
};

export default BottomBar;