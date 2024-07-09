import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import collage from './collage.jpeg'; // Update the path to your image

const FooterComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleCategoryCourseClick = (path: string) => {
    navigate(path);
  };

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (iconName: string) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
      <div className="main bg-[#EEF8F] relative flex flex-col">
        <footer className="w-full bg-gradient-to-r from-[#00052D] to-[#57033F] text-white p-10">
          <div className="row w-full mx-auto flex flex-wrap items-start justify-between">
            <div className="collage flex-shrink-0">
              <img src={collage} alt="" className="w-[350px] h-[400px] object-cover mt-[-80px] ml-[170px]"/>
            </div>
            <div className="flex flex-grow justify-end space-x-20">
              <div className="flex-basis-25 p-4 sm:flex-basis-15 mt-10 mr-[100px]">
              <img
                    className="w-20 mb-10"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png"
                    alt="Logo"
                />
              </div>
              <div className="contact flex-basis-25 p-4 mt-11 mr-[120px]">
                <h3 className="mb-10 relative font-bold">
                  Contact Us
                  <div className="underline w-[120px] h-[5px] bg-primary rounded-xl absolute top-[25px] left-0">
                  <span
                      className="block w-[15px] h-full bg-[#ffc0eb] rounded-xl absolute top-0 left-[10px] animate-moving"
                  ></span>
                  </div>
                </h3>
                <p>Chisinau, Republic of Moldova</p>
                <p>Customer Service 24/24</p>
                <p>Fast Delivery & Money Back Guarantee</p>
                <p className="email-id mt-4">popovicigrigore777@gmail.com</p>
                <h4 className="mt-4">+373 - 0123456789</h4>
              </div>
              <div className="links flex-basis-25 p-4 mt-11 mr-[250px] ml-[-80px]">
                <h3 className="relative font-bold">
                  Links
                  <div className="underline w-full h-[5px] bg-primary rounded-xl absolute top-[25px] left-0">
                  <span
                      className="block w-[15px] h-full bg-[#ffc0eb] rounded-xl absolute top-0 left-[10px] animate-moving"
                  ></span>
                  </div>
                </h3>
                <ul className="mt-8 flex flex-col space-y-2">
                  {['home', 'courses', 'about-us', 'login', 'register'].map((link) => (
                      <li key={link}>
                        <button onClick={() => handleCategoryCourseClick(`/${link}`)}>
                          <a href="#" className="text-white capitalize hover:text-customPink">
                            {link.replace('-', ' ')}
                          </a>
                        </button>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-[800px] border-0 border-b border-gray-300 mx-auto my-10 ml-[630px]" />
          <p className="text-center mb-20 ml-[120px]">
            AGC Tech © 2023 - All Rights Reserved
          </p>
          <div className="flex justify-center space-x-4 ml-[1200px] mt-[-110px]">
            {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                <a
                    key={icon}
                    href="#"
                    className={`w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-2xl relative group ${
                        hoveredIcon === icon ? 'z-50' : ''
                    }`}
                    onMouseEnter={() => handleMouseEnter(icon)}
                    onMouseLeave={handleMouseLeave}
                >
                  <i className={`fab fa-${icon}`}></i>
                  <span
                      className={`absolute inset-0 rounded-full transition duration-300 ease-in-out ${
                          hoveredIcon === icon
                              ? 'bg-gradient-to-r from-primary-light via-primary-lighter to-primary-lightest bg-clip-text text-transparent shadow-[0_0_20px_10px_#EE85B5]'
                              : ''
                      }`}
                  ></span>
                </a>
            ))}
          </div>
        </footer>
      </div>
  );
};

export default FooterComponent;
