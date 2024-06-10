import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import bg from '../HCPageComponent/bg.png';
import premiere1 from '../PremierePageComponent/premiere1.png';

const PremierePageComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const handleCategoryCourseClick = (category: string) => {
        navigate('/courses');
    };

    return (
        <div className="main bg-black h-[1100px] relative w-screen">
            <br />
            <br />
            <div className="categorii ml-40">
                <button className="all text-gray-400" onClick={() => handleCategoryCourseClick("all")}>Toate</button>
                /
                <span className="text-gray-400">/</span>
                /
                <button className="frontend text-white" onClick={() => handleCategoryClick("video-editing")}>Video-Editing</button>
            </div>
            <div className="progress-bar mt-4 ml-40 h-2">
                <div className="progress bg-[#F27BBD] w-[900px] h-[30px] rounded-3xl">
                    <h3 className="text-black ml-4">Progress 0%</h3>
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className="w-[900px] h-[400px] bg-gradient-to-l from-[#00052D] to-[#57003F] ml-40 rounded-3xl">
                <br />
                <br />
                <div className="curs ml-10">
                    <h4 className="text-white font-bold text-xl">Curs Premiere Pro</h4>
                    <img className="w-[55px] h-[55px] ml-[190px] mt-[-35px] rounded-full" src={premiere1} alt="" />
                    <div className="about mt-[-20px]">
                        <h3 className="text-[#891652] font-bold">Coming soon</h3>
                        <p className="text-[#C7C8CC] mt-4">Adobe Premiere Pro este unul dintre cele mai populare și puternice
                            programe <br /> de editare video disponibile pe piață. Acesta oferă un set complet de instrumente <br />și funcții
                            pentru editarea video, inclusiv montaj non-liniar, ajustarea culorilor, efecte vizuale, <br /> titluri și multe
                            altele.
                        </p>
                    </div>
                    <button
                        className={`w-32 h-12 text-white text-sm rounded-xl mt-4 transition-all ${
                            isHovered
                                ? "bg-[#57033F] border-2 border-[#D20062]"
                                : "bg-[#00052D]"
                        }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Curând disponibil
                    </button>
                    <br />
                    <br />

                    <h4 className="text-white">Durata: 0 minute / 0 videouri</h4>

                    <img className="w-20 mb-10 ml-[700px] mt-[-50px]" alt="" src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" />

                </div>
            </div>

            <div className="courseplan w-[360px] h-[770px] bg-gray-900 rounded-3xl ml-[1100px] mt-[-490px]">
                <br />
                <h5 className="text-white ml-24 font-bold text-xl">Ce conține cursul?</h5>
                <div className="chapters text-gray-400 ml-10 mt-10 flex flex-col gap-4">
                    <button className="flex items-center">
                        <CgAdd className="mr-2"/>
                        Chapter 1
                    </button>
                    <button className="flex items-center">
                        <CgAdd className="mr-2"/>
                        Chapter 2
                    </button>
                    <button className="flex items-center">
                        <CgAdd className="mr-2"/>
                        Chapter 3
                    </button>
                    <button className="flex items-center">
                        <CgAdd className="mr-2"/>
                        Chapter 4
                    </button>
                    <button className="flex items-center">
                        <CgAdd className="mr-2"/>
                        Chapter 5
                    </button>
                    <button className="flex items-center">
                        <CgAdd className="mr-2"/>
                        Chapter 6
                    </button>
                </div>
            </div>

            <div className="mentori w-[900px] h-[240px] bg-gray-900 rounded-3xl ml-[160px] mt-[-245px]">
                <br/>
                <h5 className="text-white text-xl font-bold ml-10">Mentor</h5>
                <br />
                <div className="mentor1 ml-10">
                    <img src={bg} alt="" className="w-12 h-12 rounded-full"/>
                    <h5 className="text-white font-bold ml-14 mt-[-35px] ">Ciobanu Ion</h5>
                </div>
                <br />

            </div>
        </div>
    );
};
export default PremierePageComponent;
