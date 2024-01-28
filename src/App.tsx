import React from 'react';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Carousel from "./components/CarouselComponent/CarouselComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import StartSectionComponent from "./components/StartSectionComponent/StartSectionComponent";
import LearnITComponent from "./components/LearnITComponent/LearnITComponent";

function App() {
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
    return (
        <div className="AGC">
            <HeaderComponent />
            <StartSectionComponent />
            <LearnITComponent />

            <div className="main w-full h-30 bg-gradient-to-r from-[#00052D] to-[#57033F]">
                <div className="carousel-container mx-auto my-auto w-2/4 border-2 rounded-md ">
                    <Carousel slides={slides} />
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;
