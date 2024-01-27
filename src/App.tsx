import React from 'react';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import StartSectionComponent from "./components/StartSectionComponent/StartSectionComponent";
import LearnITComponent from "./components/LearnITComponent/LearnITComponent";


function App() {
  return (
      <div className="AGC">
          <HeaderComponent />
          <StartSectionComponent />
          <LearnITComponent />

          <FooterComponent/>

      </div>
  );
}

export default App;
