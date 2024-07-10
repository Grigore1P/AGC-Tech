import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterComponent = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCategoryCourseClick = (path) => {
    navigate(path);
  };

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
      <div className="main bg-[#EEF8F] relative flex flex-col">
        <footer className="w-full bg-gradient-to-r from-[#00052D] to-[#57033F] text-white py-12">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center px-6">
            <div className="flex flex-col items-start">
              <div className="AGC ml-[70px]">
                <h3 className="text-2xl font-bold mb-4 text-white">AGC Tech</h3>
                <div className="flex flex-col items-start lg:items-center mt-8 lg:mt-0 lg:ml-8">
                  <p className="mb-4 ml-[-940px] text-pink-200">Intră pentru a primi cele mai recente anunțuri despre cursurile
                    noastre,<br/>
                    noutăți speciale și oferte exclusive!.</p>
                  <div className="">
                    <input
                        type="email"
                        className="w-[300px] p-2 border bg-[#00052D] border-[#ffc0eb] text-white rounded-xl mb-4 mt-2 ml-[-718px] focus:border-[#ffc0eb] focus:outline-none"
                        placeholder="Your e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className="w-[150px] h-[43px] bg-[#ffc0eb] ml-[-53px] hover:bg-pink-400 text-[#00052D] font-semibold py-2 px-4 rounded-full transition duration-300">
                      Subscribe Now!
                    </button>
                  </div>
                  <div
                      className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
                    <div className="contact flex-basis-25 p-4 mt-[-180px] ml-[500px] text-pink-200">
                      <h3 className="mb-10 relative font-bold text-white">
                        Contact Us
                        <div className="underline">
                          <span></span>
                        </div>
                      </h3>
                      <p>Chisinau, Republic of Moldova</p>
                      <p>Customer Service 24/24</p>
                      <p>Fast Delivery & Money Back Guarantee</p>
                      <p className="email-id mt-4">popovicigrigore777@gmail.com</p>
                      <h4 className="mt-4">+373 - 0123456789</h4>
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-lg font-semibold ml-[80px] mt-[-210px] w-[180px]">Corporate Training</h3>
                      <ul className="mt-2 space-y-1 ml-[82px]">
                        <button onClick={() => handleCategoryCourseClick('/about-us')}>
                          <a href="#" className="text-pink-200 hover:text-pink-500">
                            About Us
                          </a>
                        </button> <br />
                        <button onClick={() => handleCategoryCourseClick('/courses')}>
                          <a href="#" className="text-pink-200 hover:text-pink-500">
                            Courses
                          </a>
                        </button>
                      </ul>
                    </div>
                    <div className="links flex-basis-25 p-4 ">
                      <div className="align">
                        <h3 className="relative font-bold ml-[150px] mt-[-210px] w-[100px]">
                          Quick Links
                          <div className="underline">
                            <span></span>
                          </div>
                        </h3>
                      </div>
                      <ul className="mt-8 ml-[150px] ">
                        <li>
                          <button onClick={() => handleCategoryCourseClick('/')}>
                            <a href="#" className="text-pink-200 hover:text-pink-500">
                              Home
                            </a>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleCategoryCourseClick('/login')}>
                            <a href="#" className="text-pink-200 hover:text-pink-500">
                              Log In
                            </a>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleCategoryCourseClick('/register')}>
                            <a href="#" className="text-pink-200 hover:text-pink-500">
                              Register
                            </a>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
              className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 mt-12 border-t border-pink-200 pt-6">
            <p className="text-sm ml-[70px] text-pink-200">&copy; 2023 AGC Tech - All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                  <a
                      key={icon}
                      href="#"
                      className={`w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xl relative group ${
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
          </div>
        </footer>
      </div>
  );
};

export default FooterComponent;
