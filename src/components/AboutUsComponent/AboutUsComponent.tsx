import React from 'react';
import programming1 from './programming1.jpg';
import programming2 from './programming2.jpg';

const AboutUsComponent = () => {
    return (
        <div className="main bg-black h-screen w-screen">
            <div className="noi flex items-center justify-center">
            <h2 className="text-white font-bold font-sans text-2xl mt-[-400px]">Despre Noi</h2>
            <p className="text-gray-400 font-sans text-s mt-[-280px] ml-[-125px]">
                Suntem doi tineri entuziaști, dedicați pasiunii noastre<br />
                pentru domeniul IT și avem o experiență solidă de peste <br />
                5 ani în acest domeniu dinamic.<br />
            </p>
                <img src={programming2} alt="" className="w-[450px] h-[330px] rounded-3xl ml-[-400px] mt-40" />
                <img src={programming1} alt="" className="w-[350px] h-[530px] rounded-3xl ml-[100px] mt-20" />
            </div>
        </div>
    )
}
export default AboutUsComponent;