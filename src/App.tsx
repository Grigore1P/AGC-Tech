import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Carousel from "./components/CarouselComponent/CarouselComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import StartSectionComponent from "./components/StartSectionComponent/StartSectionComponent";
import LearnITComponent from "./components/LearnITComponent/LearnITComponent";
import ScopComponent from "./components/ScopComponent/ScopComponent";
import ReviewsComponent from "./components/ReviewsComponent/ReviewsComponent";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";


function App() {
    const [showAboutUs, setShowAboutUs] = useState(false);

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];

    return (
        <Router>
            <div className="AGC">
                <HeaderComponent />
                <Routes>
                    <Route path="/about-us" element={<AboutUsComponent />}/>
                    <Route path="/login" element={<LoginComponent />}/>
                    <Route path="/" element={
                        <div>
                        <StartSectionComponent />
                        <LearnITComponent />
                        <div className="main w-full h-30 bg-gradient-to-r from-[#00052D] to-[#57033F]">
                            <div className="carousel-container mx-auto my-auto w-2/4 border-2 rounded-md ">
                                <Carousel slides={slides} />
                            </div>
                        </div>
                        <ScopComponent/>
                        <ReviewsComponent />
                        </div>
                    } />
                        </Routes>
                <FooterComponent/>
            </div>
        </Router>
    );
}

export default App;
