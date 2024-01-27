import React, { useState } from 'react';

const StartSectionComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const videoUrl = 'https://player.vimeo.com/external/517093227.sd.mp4?s=eb426f7ae67097bf60da3c7386e4e468524166cb&profile_id=164&oauth2_token_id=57447761';

    return (
        <div className={`w-full h-fit motivation relative mt-[-80px] ${isHovered ? 'hovered' : ''}`}>
            <div className="video-wrapper absolute inset-0 overflow-hidden rounded">
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="content ml-40 mt-20 font-sans relative z-10 text-white">
                <h3 className="text-base text-purple-800">AGC Tech - Tech Beyond Limits</h3>
                <h1 className="text-3xl mt-6 font-bold">
                    Ești în căutarea unui ajutor specializat pentru a-ți alege<br />
                    cariera în domeniul IT?
                </h1>
                <h4 className="text-base">
                    Începe călătoria în lumea fascinantă a tehnologiei și IT-ului de oriunde.<br />
                    Intră și explorează acum!
                </h4>
                <button
                    className={`w-32 h-12 text-white rounded-xl mt-10 transition-all ${
                        isHovered
                            ? 'bg-gradient-to-l from-[#00052D] to-[#57033F]'
                            : 'bg-gradient-to-r from-[#00052D] to-[#57033F]'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Detalii
                </button>
            </div>
        </div>
    );
};

export default StartSectionComponent;
