import React, { useState } from 'react';
import htmlcss1 from '../CoursesPageComponent/htmlcss1.jpg';
import { useNavigate } from 'react-router-dom';
import { CgAdd } from 'react-icons/cg';
import bg from '../HCPageComponent/bg.png';

interface HCPageComponentProps {
  hasPaid: boolean;
}

const HCPageComponent: React.FC<HCPageComponentProps> = ({ hasPaid }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCategoryCourseClick = (category: string) => {
    navigate('/courses');
  };

  const handleAccessCourseClick = () => {
    if (!hasPaid) {
      navigate('/payment');
    } else {
      navigate('/course-content');
    }
  };

  return (
      <div className="main bg-black h-[1100px] relative w-screen">
        <br />
        <br />
        <div className="categorii ml-40">
          <button
              className="all text-gray-400"
              onClick={() => handleCategoryCourseClick('all')}
          >
            Toate
          </button>
          /<span className="text-gray-400">/</span>/
          <button
              className="frontend text-white"
              onClick={() => handleCategoryClick('front-end')}
          >
            Front-End
          </button>
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
            <h4 className="text-white font-bold text-xl">Curs HTML & CSS</h4>
            <img
                className="w-[55px] h-[55px] ml-[190px] mt-[-35px] rounded-full"
                src={htmlcss1}
                alt=""
            />
            <div className="about mt-[-20px]">
              <h3 className="text-[#891652] font-bold">Coming soon</h3>
              <p className="text-[#C7C8CC] mt-4">
                O introducere in dezvoltarea paginilor web. Cele mai elementare{' '}
                <br />
                concepte în programare. Împreună, HTML și CSS permit
                dezvoltatorilor <br />
                să creeze site-uri web interactive și estetice,
                <br />
                definind atât structura cât și stilul paginii web.
              </p>
            </div>
            <button
                onClick={handleAccessCourseClick}
                className={`w-32 h-12 text-white text-sm rounded-xl mt-4 transition-all ${
                    isHovered
                        ? 'bg-[#57033F] border-2 border-[#D20062]'
                        : 'bg-[#00052D]'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
              Accesează cursul
            </button>
            <br />
            <br />

            <h4 className="text-white">Durata: 0 minute / 0 videouri</h4>

            <img
                className="w-20 mb-10 ml-[700px] mt-[-50px]"
                alt=""
                src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png"
            />
          </div>
        </div>

        <div className="courseplan w-[360px] h-[770px] bg-gray-900 rounded-3xl ml-[1100px] mt-[-490px]">
          <br />
          <h5 className="text-white ml-24 font-bold text-xl">
            Ce conține cursul?
          </h5>
          <div className="chapters text-gray-400 ml-10 mt-10 flex flex-col gap-4">
            <button className="flex items-center">
              <CgAdd className="mr-2" />
              Chapter 1
            </button>
            <button className="flex items-center">
              <CgAdd className="mr-2" />
              Chapter 2
            </button>
            <button className="flex items-center">
              <CgAdd className="mr-2" />
              Chapter 3
            </button>
          </div>
        </div>

        <div className="mentori w-[900px] h-[240px] bg-gray-900 rounded-3xl ml-[160px] mt-[-245px]">
          <br />
          <h5 className="text-white text-xl font-bold ml-10">Mentori</h5>
          <br />
          <div className="mentor1 ml-10">
            <img src={bg} alt="" className="w-12 h-12 rounded-full" />
            <h5 className="text-white font-bold ml-14 mt-[-35px] ">
              Popovici Grigore
            </h5>
          </div>
          <br />
          <div className="mentor2 ml-72 mt-[-60px]">
            <img
                src={bg}
                alt=""
                className="rounded-full bg-gray-white w-12 h-12"
            />
            <h5 className="text-white font-bold ml-14 mt-[-35px] ">
              Toderici Călin-Iustin
            </h5>
          </div>
          <br />
          <p className="text-gray-400 ml-10">
            Programatori Full-Stack. Avem o pasiune pentru învățare și dezvoltare
            continuă, iar dorința noastră este să contribuim la comunitatea de
            programatori prin împărtășirea cunostinățelor și experiențelor
            noastre.
          </p>
        </div>

        {!hasPaid && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4">Please complete your payment</h2>
                <button
                    onClick={() => navigate('/payment')}
                    className="w-32 h-12 bg-blue-500 text-white rounded-lg"
                >
                  Go to Payment
                </button>
              </div>
            </div>
        )}
      </div>
  );
};

export default HCPageComponent;
