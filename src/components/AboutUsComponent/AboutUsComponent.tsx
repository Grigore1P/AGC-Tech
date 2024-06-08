import React, { useState } from "react";
import programming1 from "./programming1.jpg";
import programming2 from "./programming2.jpg";
import codingmeet from "./codingmeet.jpg";
import programmer from "./programmer.jpg";

const AboutUsComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="main bg-black h-fit relative w-screen">
      <div className="noi flex items-center justify-center">
        <h2 className="text-white font-bold font-sans text-2xl mt-[-400px]">
          Despre Noi
        </h2>
        <p className="text-gray-400 font-sans text-s mt-[-280px] ml-[-125px]">
          Suntem doi tineri entuziaști, dedicați pasiunii noastre
          <br />
          pentru domeniul IT și avem o experiență solidă de peste <br />
          5 ani în acest domeniu dinamic.
          <br />
        </p>
        <img
          src={programming2}
          alt=""
          className="w-[450px] h-[330px] rounded-3xl ml-[-400px] mt-40"
        />
        <img
          src={programming1}
          alt=""
          className="w-[350px] h-[530px] rounded-3xl ml-[100px] mt-20"
        />
      </div>

      <button
        className={`flex items-center justify-center ml-[650px] w-[200px] h-[80px] text-white rounded-3xl mt-10  transition-all ${
          isHovered
            ? "bg-gradient-to-l from-[#00052D] to-[#57033F]"
            : "bg-gradient-to-r from-[#00052D] to-[#57033F]"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Cursurile noastre
      </button>

      <p className="text-gray-400 font-sans text-s ml-40 mt-10">
        Oferim cursuri de înaltă calitate pentru a pregăti studenții pentru
        provocările tehnologice ale viitorului. Ne dedicăm să oferim tot ce e
        mai bun în cunoștințe și resurse,
        <br />
        de aceea locurile pentru mentoratul nostru sunt limitate. Încurajăm
        excelența și inovația într-un mediu prietenos și stimulant, în care
        fiecare student poate să-și dezvolte potențialul la maxim. <br />
      </p>

      <h2 className="cui text-white font-bold font-sans text-2xl ml-[320px] mt-20">
        Cui se adresează cursurile AGC?
      </h2>
      <ol className="text-gray-400 font-sans text-s ml-[320px] mt-4 list-disc text-white">
        <li>
          Elevilor sau studenților, angajaților din orice domeniu cu 0
          experiență în domeniul IT
        </li>
        <li>
          Copiilor pasionați de programare ce doresc să învețe arta
          dezvoltărilor aplicațiilor WEB
        </li>
        <li>
          Oamenilor care au început deja să învețe programare, dar nu se
          descurcă să creeze singuri <br />
          aplicații sau să obțină un job în domeniu;
        </li>
        <li>
          Persoanelor cu experiență deja în programare și care vor să-și
          dezvolte abilitățile.
        </li>
      </ol>
      <img
        src={codingmeet}
        alt=""
        className="w-[670px] h-[445px] rounded-3xl ml-[60px] mt-36"
      />
      <img
        src={programmer}
        alt=""
        className="w-[670px] h-[500px] rounded-3xl ml-[780px] mt-[-500px]"
      />

      <button
        className={`flex items-center justify-center ml-[650px] w-[200px] h-[80px] text-white text-s font-sans rounded-3xl mt-10  transition-all ${
          isHovered2
            ? "bg-gradient-to-l from-[#00052D] to-[#57033F]"
            : "bg-gradient-to-r from-[#00052D] to-[#57033F]"
        }`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        Programează-te pentru o consultare gratuită
      </button>

      <p className="text-gray-400 font-sans text-s mt-10 ml-[400px]">
        Profită de o ședință de aproximativ 15-20 minute alături unul din
        membrii personalului AGC pentru alte întrebări, detalii
      </p>
      <br />
      <br />
      <br />
    </div>
  );
};
export default AboutUsComponent;
