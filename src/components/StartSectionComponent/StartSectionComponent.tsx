import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartSectionComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about-us");
  };

  return (
      <div
          className={`w-full h-fit motivation relative mt-[-80px] ${isHovered ? "hovered" : ""}`}
      >
        <div className="video-wrapper absolute inset-0 overflow-hidden rounded">
          <video autoPlay loop muted className="object-cover w-full h-full">
            <source
                src="https://sebastianbotez.ro/videos/hero-video-programming-20.mp4"
                type="video/mp4"
            />
            <source
                src="https://sebastianbotez.ro/videos/hero-video-programming-20.webm"
                type="video/webm"
            />
            <source
                src="https://sebastianbotez.ro/videos/hero-video-programming-20.ogv"
                type="video/ogv"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="content ml-40 mt-20 font-sans relative z-10 text-white">
          <h3 className="text-base font-bold text-purple-800">
            AGC Tech - Tech Beyond Limits
          </h3>
          <h1 className="text-3xl mt-6 font-bold">
            Ești în căutarea unui ajutor specializat pentru a-ți alege
            <br />
            cariera în domeniul IT?
          </h1>
          <h4 className="text-base">
            Începe călătoria în lumea fascinantă a tehnologiei și IT-ului de
            oriunde.
            <br />
            Intră și explorează acum!
          </h4>
          <button
              onClick={handleButtonClick}
              className={`w-32 h-12 text-white rounded-xl mt-10 transition-all relative transform ${
                  isHovered ? "rotate-180 bg-gradient-to-r from-[#DABFFF] to-[#907AD6]" : ""
              } bg-gradient-to-r from-[#00052D] to-[#57033F]`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
          <span
              className={`absolute inset-0 flex items-center justify-center transition-transform ${
                  isHovered ? "transform -rotate-180" : ""
              }`}
          >
            Detalii
          </span>
          </button>
        </div>
      </div>
  );
};

export default StartSectionComponent;
