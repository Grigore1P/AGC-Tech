import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import htmlcss1 from './htmlcss1.jpg';
import javascript from './javascript.png';
import mysql1 from './mysql1.jpg';
import premiere from './premiere.png';
import iconcoding from './iconcoding.png';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);

    const handleButtonClick = () => {
        navigate('/about-us');
    };
    const circlesArray = [...Array(15)].map((_, i) => {
        const size = Math.random() * 80 + 10;
        const delay = Math.random() * 15 + 's';
        const duration = Math.random() * 20 + 15 + 's';
        const left = Math.random() * 80 + '%';

        return (
            <li
                key={i}
                className="absolute block list-none bg-gradient-to-r from-gray-200 to-pink-400 bg-opacity-100 animate-animate bottom-[-150px]"
                style={{
                    width: size,
                    height: size,
                    animationDelay: delay,
                    animationDuration: duration,
                    left: left,
                }}
            ></li>
        );
    });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/hcpage');
  };

  const renderCourses = () => {
    switch (selectedCategory) {
      case 'front-end':
        return (
          <>
            <div className="Course1 bg-[#31363F]  rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
              <h2 className="text-white font-bold font-sans">HTML & CSS</h2>
              <img
                className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
                src={htmlcss1}
                alt=""
              />
              <div className="about mt-[-30px]">
                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                <p className="text-[#C7C8CC] mt-4">
                  O introducere in dezvoltarea paginilor web. Cele mai
                  elementare concepte în programare. Împreună, HTML și CSS
                  permit dezvoltatorilor să creeze site-uri web interactive și
                  estetice, definind atât structura cât și stilul paginii web.
                </p>
              </div>
              <button
                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
                onClick={handleCourseClick}
              >
                Vizualizează cursul
              </button>
            </div>

            <div className="Course2 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
              <h2 className="text-white font-bold font-sans">JavaScript</h2>
              <img
                className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
                src={javascript}
                alt=""
              />
              <div className="about mt-[-30px]">
                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                <p className="text-[#C7C8CC] mt-4">
                  Cel mai popular limbaj de programare. Pe lângă HTML și CSS,
                  JavaScript completează triada fundamentală a dezvoltării web
                  front-end, acesta mai este folosit pentru a crea jocuri,
                  aplicații web complexe și alte tipuri de interactivitate pe
                  web.
                </p>
              </div>
              <button
                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
                onClick={handleCourseClick}
              >
                Vizualizează cursul
              </button>
            </div>
          </>
        );
      case 'back-end':
        return (
          <div className="Course3 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
            <h2 className="text-white font-bold font-sans">MySQL</h2>
            <img
              className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
              src={mysql1}
              alt=""
            />
            <div className="about mt-[-30px]">
              <h3 className="text-[#891652] font-bold">Coming soon</h3>
              <p className="text-[#C7C8CC] mt-4">
                Introducere in bazele de date. Utilizare acestuia pentru
                stocarea și gestionarea datelor într-un mod structurat,
                permițând accesul rapid și eficient la informații.
              </p>
            </div>
            <button
              className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
              onClick={handleCourseClick}
            >
              Vizualizează cursul
            </button>
          </div>
        );
      case 'video-editing':
        return (
          <div className="Course4 bg-[#31363F] rounded-md mt-10 w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
            <h2 className="text-white font-bold font-sans">
              Adobe Premiere Pro
            </h2>
            <img
              className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
              src={premiere}
              alt=""
            />
            <div className="about mt-[-30px]">
              <h3 className="text-[#891652] font-bold">Coming soon</h3>
              <p className="text-[#C7C8CC] mt-4">
                Bazele editării video. Instrumente și funcții pentru editarea
                video, inclusiv montaj non-liniar, ajustarea culorilor, efecte
                vizuale, titluri și multe altele.
              </p>
            </div>
            <button
              className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
              onClick={handleCourseClick}
            >
              Vizualizează cursul
            </button>
          </div>
        );
      default:
        return (
          <>
            <div className="Course1 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
              <h2 className="text-white font-bold font-sans">HTML & CSS</h2>
              <img
                className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
                src={htmlcss1}
                alt=""
              />
              <div className="about mt-[-30px]">
                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                <p className="text-[#C7C8CC] mt-4">
                  O introducere in dezvoltarea paginilor web. Cele mai
                  elementare concepte în programare. Împreună, HTML și CSS
                  permit dezvoltatorilor să creeze site-uri web interactive și
                  estetice, definind atât structura cât și stilul paginii web.
                </p>
              </div>
              <button
                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
                onClick={handleCourseClick}
              >
                Vizualizează cursul
              </button>
            </div>

            <div className="Course2 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
              <h2 className="text-white font-bold font-sans">JavaScript</h2>
              <img
                className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
                src={javascript}
                alt=""
              />
              <div className="about mt-[-30px]">
                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                <p className="text-[#C7C8CC] mt-4">
                  Cel mai popular limbaj de programare. Pe lângă HTML și CSS,
                  JavaScript completează triada fundamentală a dezvoltării web
                  front-end, acesta mai este folosit pentru a crea jocuri,
                  aplicații web complexe și alte tipuri de interactivitate pe
                  web.
                </p>
              </div>
              <button
                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
                onClick={handleCourseClick}
              >
                Vizualizează cursul
              </button>
            </div>

            <div className="Course3 bg-[#31363F] rounded-md w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
              <h2 className="text-white font-bold font-sans">MySQL</h2>
              <img
                className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
                src={mysql1}
                alt=""
              />
              <div className="about mt-[-30px]">
                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                <p className="text-[#C7C8CC] mt-4">
                  Introducere in bazele de date. Utilizare acestuia pentru
                  stocarea și gestionarea datelor într-un mod structurat,
                  permițând accesul rapid și eficient la informații.
                </p>
              </div>
              <button
                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
                onClick={handleCourseClick}
              >
                Vizualizează cursul
              </button>
            </div>

            <div className="Course4 bg-[#31363F] rounded-md mt-10 w-80 h-72 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
              <h2 className="text-white font-bold font-sans">
                Adobe Premiere Pro
              </h2>
              <img
                className="w-[55px] h-[55px] ml-[230px] mt-[-30px] rounded-full"
                src={premiere}
                alt=""
              />
              <div className="about mt-[-30px]">
                <h3 className="text-[#891652] font-bold">Coming soon</h3>
                <p className="text-[#C7C8CC] mt-4">
                  Bazele editării video. Instrumente și funcții pentru editarea
                  video, inclusiv montaj non-liniar, ajustarea culorilor, efecte
                  vizuale, titluri și multe altele.
                </p>
              </div>
              <button
                className="border-1 border-white text-[#891652] font-sans hover:text-[#FC819E] transition-all mt-4"
                onClick={handleCourseClick}
              >
                Vizualizează cursul
              </button>
            </div>
          </>
        );
    }
  };

  return (
      <div className="main h-[1300px] relative w-screen bg-gradient-to-r from-black to-[#ffc0eb] via-[#57033F] animate-gradient-x">
          <ul className="circles absolute top-0 left-0 w-full h-[96%] overflow-hidden">
              {circlesArray}
          </ul>
          <div className="relative">
              <br/>
              <br/>
              <h1 className="text-white text-3xl font-bold ml-[580px] mt-[20px]">
                  Explorează cursurile noastre
              </h1>
              <img
                  className="w-[55px] h-[55px] ml-[230px] mt-[-45px] ml-[998px] rounded-full"
                  src={iconcoding}
                  alt=""
              />
              <div className="Noi grid grid-cols-4 mt-20 drop-shadow-xl">
                  <div className="w-[150px] h-[80px] bg-[#F27BBD] border-2 border-[#57033F] rounded-3xl ml-[350px] transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="text-white font-sans flex justify-center items-center mt-6">
                          2000+ studenți
                      </h3>
                  </div>

                  <div
                      className="4courses w-[150px] h-[80px] bg-[#F27BBD] border-2 border-[#57033F] rounded-3xl ml-48 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="text-white font-sans flex justify-center items-center mt-6">
                          4 cursuri legitime
                      </h3>
                  </div>

                  <div
                      className="w-[150px] h-[80px] bg-[#F27BBD] border-2 border-[#57033F] rounded-3xl ml-8 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="text-white font-sans flex justify-center items-center mt-6">
                          3 lectori
                      </h3>
                  </div>

                  <div
                      className="w-[150px] h-[80px] bg-[#F27BBD] border-2 border-[#57033F] rounded-3xl ml-[-127px] transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="text-white font-sans flex justify-center items-center mt-6">
                          captivitate & calitate{' '}
                      </h3>
                  </div>
              </div>


              <div className="categorii ml-40 mt-10 z-1">
                  {/* Category buttons */}
                  <button
                      className={`text-gray-400 ${
                          selectedCategory === 'all' ? 'text-white' : 'text-gray'
                      }`}
                      onClick={() => handleCategoryClick('all')}
                  >
                      Toate
                  </button>
                  {/* / */}<span className="text-gray-400 ml-1">/</span>
                  <button
                      className={`text-gray-400 ml-1 ${
                          selectedCategory === 'front-end' ? 'text-white' : ''
                      }`}
                      onClick={() => handleCategoryClick('front-end')}
                  >
                      Front-End
                  </button>
                  {/* / */}<span className="text-gray-400 ml-1">/</span>
                  <button
                      className={`text-gray-400 ml-1 ${
                          selectedCategory === 'back-end' ? 'text-white' : ''
                      }`}
                      onClick={() => handleCategoryClick('back-end')}
                  >
                      Back-End
                  </button>
                  {/* / */}<span className="text-gray-400 ml-1">/</span>
                  <button
                      className={`text-gray-400 ml-1 ${
                          selectedCategory === 'video-editing' ? 'text-white' : ''
                      }`}
                      onClick={() => handleCategoryClick('video-editing')}
                  >
                      Video-Editing
                  </button>
              </div>

              <div className="courses grid grid-cols-3 ml-40 mt-20 z-1">
                  {/* Render courses based on selectedCategory */}
                  {renderCourses()}
              </div>

              <img
                  className="w-20 mb-10 ml-[1000px] mt-[-200px]"
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png"
                  alt="Logo"
              />

              <div className="mt-[100px]">
                  <button
                      onClick={handleButtonClick}
                      className={`w-36 h-20 text-white rounded-3xl mt-10  ml-[700px] transition-all relative transform ${
                          isHovered
                              ? 'rotate-180 bg-gradient-to-r from-[#DABFFF] to-[#907AD6]'
                              : ''
                      } bg-gradient-to-r from-[#00052D] to-[#57033F]`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                  >
          <span
              className={`absolute inset-0 text-l flex items-center justify-center transition-transform ${
                  isHovered ? 'transform -rotate-180' : ''
              }`}
          >
            Despre noi
          </span>
                  </button>
                  <p className="text-white font-sans text-s flex text-center mt-4 ml-[620px]">
                      Citește mai multe despre noi sau înscrie-te <br/>
                      la o ședință gratuită.
                  </p>
              </div>
          </div>
      </div>
  );
};

export default CoursesPage;
