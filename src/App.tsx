import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Carousel from "./components/CarouselComponent/CarouselComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import StartSectionComponent from "./components/StartSectionComponent/StartSectionComponent";
import LearnITComponent from "./components/LearnITComponent/LearnITComponent";
import ScopComponent from "./components/ScopComponent/ScopComponent";
import ReviewsComponent from "./components/ReviewsComponent/ReviewsComponent";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent";
import CoursesPage from "./components/CoursesPageComponent/CoursesPage";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import HCPageComponent from "./components/HCPageComponent/HCPageComponent";
import JSPageComponent from "./components/JSPageComponent/JSPageComponent";
import SQLPageComponent from "./components/SQLPageComponent/SQLPageComponent";
import PremierePageComponent from "./components/PremierePageComponent/PremierePageComponent";
import RegisterComponent from "./components/RegistrationComponent/RegistrationComponent"; // Import the Register Component
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig"; // Adjust the path if needed

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <Router>
      <div className="App">
        <HeaderComponent user={null} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="about-us" element={<AboutUsComponent /> } />
          <Route path="/login" element={<LoginComponent setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/register" element={<HCPageComponent />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses" element={<AboutUsComponent />} />
          <Route path="hcpage" element={<HCPageComponent /> } />
          <Route path="jspage" element={<JSPageComponent />} />
          <Route path="sqlpage" element={<SQLPageComponent /> } />
          <Route path="premierepage" element={<PremierePageComponent /> } />
          <Route path="contactus" element={<PremierePageComponent />} />
          <Route
            path="/"
            element={
              <div>
                <StartSectionComponent />
                <LearnITComponent />
                <div className="main w-full h-30 bg-gradient-to-r from-[#00052D] to-[#57033F]">
                  <div className="carousel-container mx-auto my-auto w-2/4 border-2 rounded-md">
                    <Carousel slides={slides} />
                  </div>
                </div>
                <ScopComponent />
                <ReviewsComponent />
              </div>
            }
          />
          <Route path="/login" element={<LoginComponent setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterComponent />} />{" "}
          {/* Add the register route */}
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
