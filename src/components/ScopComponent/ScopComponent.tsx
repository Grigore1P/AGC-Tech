import React from 'react';
import { AiFillBook, AiFillBell, AiFillDashboard, AiFillCodepenSquare } from "react-icons/ai";

const ScopComponent = () => {
    return (
        <div className="grid grid-cols-4 w-full h-[25vh]">
            <div className="bg-gradient-to-r from-[#030637] to-[#57033F] flex flex-col justify-center items-center text-white text-9xl transform transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#57033F]/50 animate-pulse p-4">
                <AiFillBook className="animate-glow" />
                <div className="text-xs font-mono mt-2 animate-fadeIn text-center">Îmbunătățirea abilităților tehnice</div>
            </div>
            <div className="bg-gradient-to-r from-[#3C0753] to-[#910A67] flex flex-col justify-center items-center text-white text-9xl transform transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#57033F]/50 animate-pulse p-4">
                <AiFillBell className="animate-glow" />
                <div className="text-xs font-mono mt-2 animate-fadeIn text-center">Adăugarea unei competențe valoroase la CV</div>
            </div>
            <div className="bg-gradient-to-r from-[#720455] to-[#910A67] flex flex-col justify-center items-center text-white text-9xl transform transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#57033F]/50 animate-pulse p-4">
                <AiFillCodepenSquare className="animate-glow" />
                <div className="text-xs font-mono mt-2 animate-fadeIn text-center">Dezvoltarea proiectelor personale sau antreprenoriale</div>
            </div>
            <div className="bg-gradient-to-r from-[#910A67] to-[#030637] flex flex-col justify-center items-center text-white text-9xl transform transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#57033F]/50 animate-pulse p-4">
                <AiFillDashboard className="animate-glow" />
                <div className="text-xs font-mono mt-2 animate-fadeIn text-center">Pasul către o schimbare de carieră</div>
            </div>
        </div>
    );
}

export default ScopComponent;