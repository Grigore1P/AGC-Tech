import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className="Header h-20 w-full bg-gradient-to-r from-[#00052D] to-[#57003F] text-white text-2xl ">
            <ul className="flex items-center justify-center space-x-20 relative">
                <li className="group Header1 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link to="/" className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2">HOME</Link>
                </li>
                <li className="group Header2 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link to="/courses" className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2">COURSES</Link>
                </li>
                <li className="group Header3 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link to="/logo" className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2">LOGO</Link>
                </li>
                <li className="group Header4 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link to="/about-us" className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2">ABOUT US</Link>
                </li>
                <li className="group Header5 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link to="/login" className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2">LOG IN</Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderComponent;
