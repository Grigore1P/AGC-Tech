import React from "react";
import { AiFillStar } from "react-icons/ai"; // Assuming you're using react-icons for icons
import review1 from "./review1.jpg";
import review2 from "./review2.jpg";
import review3 from "./review3.jpg";
import review4 from "./review4.jpg";
import review5 from "./review5.jpg";
import review6 from "./review6.jpg";

const ReviewsComponent = () => {
  return (
    <div className="main bg-black w-full h-fit relative mb-[-220px]">
      <div className="results flex justify-center text-center">
        <h1 className="text-3xl text-white font-bold font-sans ml-30 mt-10">
          Recenziile studenților noștri
        </h1>
        <h2 className="text-sm text-gray-400 mt-20 ml-[-350px]">
          Peste 2000 de clienți satisfăcuți, angajați actuali ⭐
        </h2>
      </div>
      <div className="reviews grid grid-cols-3 gap-4 mt-10 ml-36">
        <div className="Review1 bg-[#FFFFF9] border-4 border-[#57033F] rounded-xl w-80 h-80 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000">
          <img className="w-28 h-28 rounded-3xl" src={review1} alt="" />
          <p className="text-[#57033F] font-bold font-sans">
            Alexandru Păduraru (32 ani) <br />
            Middle Front-End Developer{" "}
          </p>

          <p className="text-sm mt-2 font-sans text-gray-600">
            Am absolvit cursul de Web Design la AGC Tech acum 2 ani, acesta mi-a
            oferit o combinație perfectă între teorie și practică, să dezvolt
            abilități esențiale în dezvoltarea front-end.
          </p>

          <div className="flex items-center mt-2">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <AiFillStar
                  key={i}
                  color={ratingValue <= 5 ? "#f9a825" : "#e0e0e0"}
                />
              );
            })}
          </div>
        </div>

        <div className="Review2 bg-white border-4 border-[#57033F] rounded-xl w-80 h-80 p-4">
          <img className="w-28 h-28 rounded-3xl" src={review2} alt="" />
          <p className="text-[#57033F] font-bold font-sans">
            Gabriela Stamati (22 ani) <br />
            Video Editor
          </p>

          <p className="text-sm mt-2 font-sans text-gray-600">
            Aș aprecia enorm un curs avansat oferit de AGC Tech, care să acopere
            mai multe efecte speciale, animații complexe, tricks-uri. Recomand
            oricum!
          </p>

          <div className="flex items-center mt-6">
            {[...Array(4)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <AiFillStar
                  key={i}
                  color={ratingValue <= 5 ? "#f9a825" : "#e0e0e0"}
                />
              );
            })}
          </div>
        </div>

        <div className="Review3 bg-[#FFFFF9] border-4 border-[#57033F] rounded-xl w-80 h-80 p-4">
          <img className="w-28 h-28 rounded-3xl" src={review3} alt="" />
          <p className="text-[#57033F] font-bold font-sans">
            Radu Stan (41 ani) <br />
            Senior Front-End Developer{" "}
          </p>

          <p className="text-sm mt-2 font-sans text-gray-600">
            Cu ajutorul acestui curs am reușit să-mi acopăr unele goluri în
            cunoștințele proprii. Bun pentru începători.
          </p>

          <div className="flex items-center mt-10">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <AiFillStar
                  key={i}
                  color={ratingValue <= 5 ? "#f9a825" : "#e0e0e0"}
                />
              );
            })}
          </div>
        </div>
        <div className="Review4 bg-white border-4 border-[#57033F] rounded-xl w-80 h-80 p-4">
          <img className="w-28 h-28 rounded-3xl" src={review4} alt="" />
          <p className="text-[#57033F] font-bold font-sans">
            Rareș Gavril (24 ani) <br />
            Junior Back-End Developer
          </p>

          <p className="text-sm mt-2 font-sans text-gray-600">
            Curs bine structurat și acoperă în profunzime aspectele de bază ale
            gestionării bazelor de date relaționale MySQL.
          </p>

          <div className="flex items-center mt-12">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <AiFillStar
                  key={i}
                  color={ratingValue <= 5 ? "#f9a825" : "#e0e0e0"}
                />
              );
            })}
          </div>
        </div>

        <div className="Review5 bg-[#FFFFF9] border-4 border-[#57033F] rounded-xl w-80 h-80 p-4">
          <img className="w-28 h-28 rounded-3xl" src={review5} alt="" />
          <p className="text-[#57033F] font-bold font-sans">
            Vlad Rusu (19 ani) <br />
            Full-Stack Developer
          </p>

          <p className="text-sm mt-2 font-sans text-gray-600">
            Cea mai bună achiziție pentru a-mi crea o bază in full-stack
            development. Aștept cursul de ReactJS :).
          </p>

          <div className="flex items-center mt-12">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <AiFillStar
                  key={i}
                  color={ratingValue <= 5 ? "#f9a825" : "#e0e0e0"}
                />
              );
            })}
          </div>
        </div>

        <div className="Review6 bg-white border-4 border-[#57033F] rounded-xl w-80 h-80 p-4">
          <img className="w-28 h-28 rounded-3xl" src={review6} alt="" />
          <p className="text-[#57033F] font-bold font-sans">
            Alexa Bordea (17 ani) <br />
            Freelancer Video Editor
          </p>

          <p className="text-sm mt-2 font-sans text-gray-600">
            Cu ajutorul acestui curs am reușit să am primii clienți pe FIVERR,
            după luni de muncă pe cont propriu.
          </p>

          <div className="flex items-center mt-12">
            {[...Array(4)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <AiFillStar
                  key={i}
                  color={ratingValue <= 5 ? "#f9a825" : "#e0e0e0"}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ReviewsComponent;
