import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <div className="Header h-20 w-full flex items-center justify-between bg-gradient-to-r from-[#00052D] to-[#57033F] text-white text-xl">

                <div className="Principale flex items-center space-x-4 ml-20">
                    <div className="Header2 hover:underline">HOME</div>
                    <div className="Header2 hover:underline">CONTACT</div>
                    <div className="Header3 hover:underline">HELP</div>
                </div>

                <div className="logo hover:underline mr-6">LOGO</div>
            </div>
        </div>
    );
}

export default HeaderComponent;
