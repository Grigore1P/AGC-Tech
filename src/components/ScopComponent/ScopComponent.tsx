import React from 'react';
import { AiFillBook } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";

const ScopComponent = () => {
    return (
        <div style={{ height: '25vh' }} className="grid grid-cols-4">
            <div className="bg-[#030637] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl flex-col"><AiFillBook />
            <div className="text-xs font-mono">Îmbunătățirea abilităților tehnice</div>
            </div>
            <div
                className="bg-[#3C0753] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl flex-col">
                <AiFillBell/>
                <div className="text-xs font-mono">Adăugarea unei competențe valoroase la CV:</div>
            </div>
            <div
                className="bg-[#720455] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl flex-col">
                <AiFillCodepenSquare/>
                <div className="text-xs font-mono">Dezvoltarea proiectelor personale sau antreprenoriale</div>
            </div>
            <div
                className="bg-[#910A67] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl flex-col">
                <AiFillDashboard/>
                <div className="text-xs font-mono">Pasul către o schimbare de carieră</div>
            </div>
        </div>
    );
}

export default ScopComponent;
