import React from "react";

const CoursesPage = () => {
  return (
    <div className="main bg-black h-[4000px] relative w-screen ">
      <br />
      <br />
      <h1 className="text-white text-xl font-bold ml-[645px]">
        Exploreaza cursurile noastre
      </h1>
      <div className="courses grid grid-cols-3 ml-40 mt-20">
        <div className="Review1 bg-[#FFFFF9] border-4 border-[#57033F] rounded-xl w-80 h-80 p-4 transform hover:scale-105 transition-transform duration-300 perspective-1000"></div>

        <div className="Review2 bg-white border-4 border-[#57033F] rounded-xl w-80 h-80 p-4"></div>

        <div className="Review3 bg-[#FFFFF9] border-4 border-[#57033F] rounded-xl w-80 h-80 p-4"></div>
      </div>
    </div>
  );
};
export default CoursesPage;
