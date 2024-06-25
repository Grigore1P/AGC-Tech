import React from 'react';

const LearnITComponent = () => {
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

  return (
    <div className="learnit w-full h-fit relative">
      <div className="area w-full h-screen absolute top-0 left-0 -z-10 bg-gradient-to-r from-black to-[#240046]">
        <ul className="circles absolute top-0 left-0 w-full h-[96%] overflow-hidden">
          {circlesArray}
        </ul>
      </div>
      <div className="content text-white font-sans ml-72 relative z-10">
        <h3 className="text-2xl text-[#ffc0eb] font-bold">
          <br /> <br />
          AGC-Tech
        </h3>
        <br />
        <p className="text-gray-400 w-64">
          Suntem doi tineri entuziaști, dedicați pasiunii noastre pentru
          domeniul IT și avem o experiență solidă de peste 5 ani în acest
          domeniu dinamic. <br />
          <br />
          Împărtășim cu bucurie secretele noastre de succes și vă invităm să vă
          alăturați comunității AGC, unde promovăm entuziasmul pentru tehnologie
          și dezvoltare personală în IT.
          <br />
          <br />
          Începeți călătoria dumneavoastră captivantă alături de noi, AGC Tech!
        </p>
        <br />
        <br />
      </div>
      <div className="us w-64 h-[400px] bg-[#57033F] font-sans flex float-right mr-96 mt-[-430px] rounded-xl border-2 border-[#F3D7CA] relative z-10">
        <div className="flex items-center justify-center mt-20">
          <p className="text-white font-bold text-5xl flex items-center justify-center ml-10 mt-[-380px]">
            5+
            <br />
          </p>
          <p className="text-black-800 font-bold flex items-center justify-center ml-[-60px] mt-[-280px]">
            ANI EXPERIENȚĂ
          </p>
          <p className="text-white font-bold text-5xl flex items-center justify-center ml-[-132px] mt-[-140px]">
            SUPORT <br />
          </p>
          <p className="text-black-800 font-bold flex items-center justify-center ml-[-185px] mt-[-40px]">
            24/24 <br />
          </p>
          <p className="text-white font-bold text-5xl flex items-center justify-center ml-[-51px] mt-24">
            100%
          </p>
          <p className="text-black-800 font-bold flex items-center justify-center ml-[-117px] mt-[200px]">
            EFICIENȚĂ & CALITATE
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default LearnITComponent;
