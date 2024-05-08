import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import htmlcss1 from './htmlcss1.jpg';
import javascript from './javascript.png';
import mysql1 from './mysql1.jpg';
import premiere from './premiere.png';


const CoursesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate('/hcpage');
    };

    const renderCourses = () => {
        switch (selectedCategory) {
            case "front-end":
                return (
                    <>
                        <div className="Course1 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                            <h2 className="text-white font-bold font-sans">HTML & CSS</h2>
                            <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={htmlcss1}
                                 alt=""/>
                            <div className="about mt-[-30px]">
                                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                                <p className="text-[#C7C8CC] mt-4">O introducere in dezvoltarea paginilor web. Cele mai
                                    elementare concepte în programare.
                                    Împreună, HTML și CSS permit dezvoltatorilor să creeze site-uri web interactive și
                                    estetice,
                                    definind atât structura cât și stilul paginii web.
                                </p>
                            </div>
                            <button
                                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                                cursul
                            </button>
                        </div>

                        <div
                            className="Course2 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                            <h2 className="text-white font-bold font-sans">JavaScript</h2>
                            <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={javascript}
                                 alt=""/>
                            <div className="about mt-[-30px]">
                                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                                <p className="text-[#C7C8CC] mt-4">Cel mai popular limbaj de programare. Pe lângă HTML
                                    și CSS,
                                    JavaScript completează triada fundamentală a dezvoltării web front-end, acesta mai
                                    este
                                    folosit pentru a crea jocuri, aplicații web complexe și alte tipuri de
                                    interactivitate pe
                                    web.
                                </p>
                            </div>
                            <button
                                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                                cursul
                            </button>
                        </div>
                    </>
                );
            case "back-end":
                return <div className="Course3 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                    <h2 className="text-white font-bold font-sans">MySQL</h2>
                    <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={mysql1} alt=""/>
                    <div className="about mt-[-30px]">
                        <h3 className="text-[#891652] font-bold">Coming soon</h3>
                        <p className="text-[#C7C8CC] mt-4">Introducere in bazele de date. Utilizare acestuia pentru
                            stocarea și gestionarea datelor
                            într-un mod structurat, permițând accesul rapid și eficient la informații.
                        </p>
                    </div>
                    <button
                        className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                        cursul
                    </button>
                </div>
            case "video-editing":
                return <div className="Course4 bg-[#31363F] rounded-md mt-10 w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                    <h2 className="text-white font-bold font-sans">Adobe Premiere Pro</h2>
                    <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={premiere} alt=""/>
                    <div className="about mt-[-30px]">
                        <h3 className="text-[#891652] font-bold">Coming soon</h3>
                        <p className="text-[#C7C8CC] mt-4">Bazele editării video. Instrumente și funcții pentru editarea
                            video,
                            inclusiv montaj non-liniar, ajustarea culorilor, efecte vizuale, titluri și multe altele.
                        </p>
                    </div>
                    <button
                        className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                        cursul
                    </button>
                </div>
            default:
                return (
                    <>
                        <div className="Course1 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                            <h2 className="text-white font-bold font-sans">HTML & CSS</h2>
                            <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={htmlcss1}
                                 alt=""/>
                            <div className="about mt-[-30px]">
                                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                                <p className="text-[#C7C8CC] mt-4">O introducere in dezvoltarea paginilor web. Cele mai
                                    elementare concepte în programare.
                                    Împreună, HTML și CSS permit dezvoltatorilor să creeze site-uri web interactive și
                                    estetice,
                                    definind atât structura cât și stilul paginii web.
                                </p>
                            </div>
                            <button
                                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                                cursul
                            </button>
                        </div>

                        <div className="Course2 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                            <h2 className="text-white font-bold font-sans">JavaScript</h2>
                            <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={javascript}
                                 alt=""/>
                            <div className="about mt-[-30px]">
                                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                                <p className="text-[#C7C8CC] mt-4">Cel mai popular limbaj de programare. Pe lângă HTML
                                    și CSS,
                                    JavaScript completează triada fundamentală a dezvoltării web front-end, acesta mai
                                    este
                                    folosit pentru a crea jocuri, aplicații web complexe și alte tipuri de
                                    interactivitate pe
                                    web.
                                </p>
                            </div>
                            <button
                                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                                cursul
                            </button>
                        </div>

                        <div className="Course3 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                            <h2 className="text-white font-bold font-sans">MySQL</h2>
                            <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={mysql1} alt=""/>
                            <div className="about mt-[-30px]">
                                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                                <p className="text-[#C7C8CC] mt-4">Introducere in bazele de date. Utilizare acestuia
                                    pentru
                                    stocarea și gestionarea datelor
                                    într-un mod structurat, permițând accesul rapid și eficient la informații.
                                </p>
                            </div>
                            <button
                                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                                cursul
                            </button>
                        </div>

                        <div
                            className="Course4 bg-[#31363F] rounded-md mt-10 w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
                            <h2 className="text-white font-bold font-sans">Adobe Premiere Pro</h2>
                            <img className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full" src={premiere}
                                 alt=""/>
                            <div className="about mt-[-30px]">
                                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                                <p className="text-[#C7C8CC] mt-4">Bazele editării video. Instrumente și funcții pentru
                                    editarea
                                    video,
                                    inclusiv montaj non-liniar, ajustarea culorilor, efecte vizuale, titluri și multe
                                    altele.
                                </p>
                            </div>
                            <button className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4" onClick={handleCourseClick}>Vizualizează
                                cursul
                            </button>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="main bg-black h-[1100px] relative w-screen ">
            <br/>
            <br/>
            <h1 className="text-white text-3xl font-bold ml-[600px]">Exploreaza cursurile noastre</h1>
            <div className="Noi grid grid-cols-4 mt-20 drop-shadow-xl">
                <div className="w-[150px] h-[80px] bg-[#F27BBD] rounded-3xl ml-[350px]">
                    <h3 className="text-white font-sans flex justify-center items-center mt-6">2000+ studenți</h3>
                </div>

                <div className="w-[150px] h-[80px] bg-[#F27BBD] rounded-3xl ml-48">
                    <h3 className="text-white font-sans flex justify-center items-center mt-6">4 cursuri legitime</h3>
                </div>

                <div className="w-[150px] h-[80px] bg-[#F27BBD] rounded-3xl ml-8">
                    <h3 className="text-white font-sans flex justify-center items-center mt-6">3 lectori</h3>
                </div>

                <div className="w-[150px] h-[80px] bg-[#F27BBD] rounded-3xl ml-[-127px]">
                    <h3 className="text-white font-sans flex justify-center items-center mt-6">captivitate &
                        calitate </h3>
                </div>
            </div>

            <div className="categorii ml-40 mt-10">
                <button
                    className={`text-gray-400 ${selectedCategory === 'all' ? 'text-white' : 'text-gray'}`}
                    onClick={() => handleCategoryClick("all")}
                >
                    Toate
                </button>
                /
                <span className="text-gray-400">/</span>
                /
                <button
                    className={`text-gray-400 ${selectedCategory === 'front-end' ? 'text-white' : ''}`}
                    onClick={() => handleCategoryClick("front-end")}
                >
                    Front-End
                </button>
                /
                <span className="text-gray-400">/</span>
                /
                <button className={`text-gray-400 ${selectedCategory === 'back-end' ? 'text-white' : ''}`}
                        onClick={() => handleCategoryClick("back-end")}
                >
                    Back-End
                </button>
                /
                <span className="text-gray-400">/</span>
                /
                <button className={`text-gray-400 ${selectedCategory === 'video-editing' ? 'text-white' : ''}`}
                    onClick={() => handleCategoryClick("video-editing")}
                >
                    Video-Editing
                </button>

            </div>
            <div className="courses grid grid-cols-3 ml-40 mt-20">
                {renderCourses()}
            </div>
        </div>
)
}
export default CoursesPage