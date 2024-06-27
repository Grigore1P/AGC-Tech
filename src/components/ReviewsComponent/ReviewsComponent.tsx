import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai'; // Assuming you're using react-icons for icons
import review1 from './review1.jpg';
import review2 from './review2.jpg';
import review3 from './review3.jpg';
import review4 from './review4.jpg';
import review5 from './review5.jpg';
import review6 from './review6.jpg';
import {useNavigate} from "react-router-dom";

const ReviewsComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about-us');
  };
  return (
      <div className="main bg-black to-[#240046] w-full h-fit mt-10 relative mb-[-220px]">
        <div className="results flex justify-center text-center">
          <h1 className="text-3xl text-white font-bold font-sans ml-30 mt-10">
            Recenziile studenților noștri
          </h1>
          <h2 className="text-sm text-gray-400 mt-20 ml-[-350px]">
            Peste 2000 de clienți satisfăcuți, angajați actuali ⭐
          </h2>
        </div>
        <div className="reviews grid grid-cols-3 mt-10 ml-[-20px]">

          <div className="Review1 mx-auto flex w-[340px] h-80 max-w-lg items-center justify-center mt-[-30px] transform hover:scale-110 transition-transform duration-300 perspective-1000">
            <div
                className="relative z-10 flex w-[340px] cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
              <div
                  className="animate-rotate absolute inset-0 h-full w-[340px] rounded-full bg-[conic-gradient(#ffc0eb_20deg,transparent_120deg)]"
              ></div>
              <div className="relative z-20 w-[340px] rounded-[0.60rem] bg-slate-900 p-2">
                <img className="w-20 h-20 rounded-3xl" src={review1} alt=""/>
                <p className="text-[#ffc0eb] text-base w-[250px] font-bold font-sans ml-24 mt-[-70px]">
                  Alexandru Păduraru<br/>
                  Middle Front-End Developer
                </p>

                <p className="text-sm mt-[50px] font-sans text-gray-400">
                  ,,Am absolvit cursul de Web Design la AGC Tech acum 2 ani, acesta mi-a
                  oferit o combinație perfectă între teorie și practică, să dezvolt
                  abilități esențiale în dezvoltarea front-end.''
                </p>

                <div className="flex items-center mt-6">
                  {[...Array(4)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <AiFillStar
                            key={i}
                            color={ratingValue <= 5 ? 'white' : 'white'}
                        />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>


          <div className="Review2 mx-auto flex w-[340px] h-96 max-w-lg items-center justify-center mr-16 transform hover:scale-110 transition-transform duration-300 perspective-1000">
            <div
                className="relative z-10 flex w-[340px] cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
              <div
                  className="animate-rotate absolute inset-0 h-full w-[340px] rounded-full bg-[conic-gradient(#ffc0eb_20deg,transparent_120deg)]"
              ></div>
              <div className="relative z-20 w-[340px] rounded-[0.60rem] bg-slate-900 p-2">
                <img className="w-20 h-20 rounded-3xl" src={review4} alt=""/>
                <p className="text-[#ffc0eb] text-base w-[250px] font-bold font-sans ml-24 mt-[-70px]">
                  Rareș Gavril<br/>
                  Junior Back-End Developer
                </p>

                <p className="text-sm mt-[50px] font-sans text-gray-400">
                  ,,Curs bine structurat și acoperă în profunzime aspectele de bază ale
                  gestionării bazelor de date relaționale MySQL.''
                </p>

                <div className="flex items-center mt-6">
                  {[...Array(4)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <AiFillStar
                            key={i}
                            color={ratingValue <= 5 ? 'white' : 'white'}
                        />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="Review3 mx-auto flex w-[340px] h-[244px] max-w-lg items-center justify-center mr-20 transform hover:scale-110 transition-transform duration-300 perspective-1000">
            <div
                className="relative z-10 flex w-[340px] cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
              <div
                  className="animate-rotate absolute inset-0 h-full w-[340px] rounded-full bg-[conic-gradient(#ffc0eb_20deg,transparent_120deg)]"
              ></div>
              <div className="relative z-20 w-[340px] rounded-[0.60rem] bg-slate-900 p-2">
                <img className="w-20 h-20 rounded-3xl" src={review6} alt=""/>
                <p className="text-[#ffc0eb] text-base w-[250px] font-bold font-sans ml-24 mt-[-70px]">
                  Alexa Bordea<br/>
                  Freelancer Video Editor
                </p>

                <p className="text-sm mt-[50px] font-sans text-gray-400">
                  ,,Cu ajutorul acestui curs am reușit să am primii clienți pe FIVERR,
                  după luni de muncă pe cont propriu.''
                </p>

                <div className="flex items-center mt-6">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <AiFillStar
                            key={i}
                            color={ratingValue <= 5 ? 'white' : 'white'}
                        />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
            onClick={handleButtonClick}
            className={`w-32 h-12 text-white ml-[700px] rounded-xl transition-all relative transform ${
                isHovered
                    ? 'rotate-180 bg-gradient-to-r from-[#DABFFF] to-[#907AD6]'
                    : ''
            } bg-gradient-to-r from-[#00052D] to-[#57033F]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          <span
              className={`absolute inset-0 flex items-center justify-center transition-transform ${
                  isHovered ? 'transform -rotate-180' : ''
              }`}
          >
              FEEDBACK
          </span>
        </button>
        <p className="text-gray-400 font-sans text-s mt-4 ml-[670px]">
          Scrie-ne parerea ta
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
  );
};

export default ReviewsComponent;
