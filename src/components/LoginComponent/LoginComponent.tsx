import React from 'react';

const LoginComponent = () => {
    return (
        <div className="flex justify-center items-center mb-0 bg-gradient-to-r from-[#00052D] to-[#57033F] h-full w-screen relative">
            <div className="h-[400px] w-[350px] bg-[#57033F] rounded-2xl flex justify-center items-center flex-col justify-around">
                <input type="text" className="w-48 h-8 mb-2 px-2 rounded border border-gray-400" placeholder="Username" />
                <input type="email" className="w-48 h-8 mb-2 px-2 rounded border border-gray-400" placeholder="Email" />
                <input type="password" className="w-48 h-8 mb-2 px-2 rounded border border-gray-400" placeholder="Password" />
                <div className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    <span className="text-white">Remember me</span>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
