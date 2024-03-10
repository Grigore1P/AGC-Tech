import React from 'react';
import { AiFillBook } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";

const ScopComponent = () => {
    return (
        <div style={{ height: '25vh' }} className="grid grid-cols-4">
            <div className="bg-[#030637] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl"><AiFillBook /></div>
            <div className="bg-[#3C0753] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl"><AiFillBell /></div>
            <div className="bg-[#720455] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl"><AiFillCodepenSquare /></div>
            <div className="bg-[#910A67] flex justify-center items-center border border-white border-solid border-opacity-50 text-white text-9xl"><AiFillDashboard /></div>
        </div>
    );
}

export default ScopComponent;
