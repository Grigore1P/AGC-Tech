import React, { useState } from 'react';
import htmlcss1 from "../CoursesPageComponent/htmlcss1.jpg";
import { AiFillStar } from 'react-icons/ai';

const HCPageComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="main bg-black h-[1100px] relative w-screen">
            <br />
            <br />
            <div className="categorii ml-40">
                <button className="all text-gray-400" onClick={() => handleCategoryClick("all")}>Toate</button>
                /
                <span className="text-gray-400">/</span>
                /
                <button className="frontend text-gray-400" onClick={() => handleCategoryClick("front-end")}>Front-End</button>
                /
                <span className="text-gray-400">/</span>
                /
                <button className="backend text-gray-400" onClick={() => handleCategoryClick("back-end")}>Back-End</button>
                /
                <span className="text-gray-400">/</span>
                /
                <button className="backend text-gray-400" onClick={() => handleCategoryClick("video-editing")}>Video-Editing</button>
            </div>
            <div className="progress-bar mt-4 ml-40 h-2">
                <div className="progress bg-[#F27BBD] w-[900px] h-[30px] rounded-3xl">
                    <h3 className="text-black ml-4">Progress 0%</h3>
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className="w-[900px] h-[400px] bg-gradient-to-l from-[#00052D] to-[#57033F] ml-40 rounded-3xl">
                <br/>
                <br/>
                <div className="curs ml-10">
                    <h4 className="text-white font-bold text-xl">Curs HTML & CSS</h4>
                    <img className="w-[55px] h-[55px] ml-[190px] mt-[-35px] rounded-full" src={htmlcss1}
                         alt=""/>
                    <div className="about mt-[-20px]">
                        <h3 className="text-[#891652] font-bold">Coming soon</h3>
                        <p className="text-[#C7C8CC] mt-4">O introducere in dezvoltarea paginilor web. Cele mai
                            elementare <br/>
                            concepte în programare.
                            Împreună, HTML și CSS permit dezvoltatorilor <br/>
                            să creeze site-uri web interactive și
                            estetice,<br/>
                            definind atât structura cât și stilul paginii web.
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
                    <br/>
                    <br/>

                    <h4 className="text-white">Durata: 0 minute / 0 videouri</h4>

                    <img className="w-20 mb-10 ml-[700px] mt-[-50px]" alt=""
                         src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png"/>

                    <div className="Noi grid grid-cols-4 mt-20 drop-shadow-xl">
                        <div className="w-[150px] h-[80px] bg-[#F27BBD] rounded-3xl ml-[350px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HCPageComponent;
