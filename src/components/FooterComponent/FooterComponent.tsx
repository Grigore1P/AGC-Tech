import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FooterComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleCategoryCourseClick = (path: string) => {
    navigate(path);
  };

  return (
      <div className="main bg-[#EEF8F] relative flex flex-col">
        <footer className="w-full bg-gradient-to-r from-[#00052D] to-[#57033F] text-white p-10">
          <div className="row w-50 mx-auto flex flex-wrap items-start justify-between">
            <div className="flex-basis-25 p-4 sm:flex-basis-15 ml-10 mt-10">
              <img
                  className="w-20 mb-10"
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png"
                  alt="Logo"
              />
              <p className="mr-20">
                Lorem ipsum dolor sit amet consectetur adipisicing
                <br />
                elit. Nesciunt modi qui ducimus iusto odit provident
                <br />
                vitae possimus maxime harum minima animi tenetur
                <br />
                magnam nihil laborum temporibus eius a, impedit
                <br />
                dolore.
              </p>
            </div>
            <div className="contact flex-basis-25 p-4 mt-16">
              <h3 className="mb-10 relative font-bold">
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
            <div className="links flex-basis-25 p-4 mt-16 ml-[-20px]">
              <h3 className="relative font-bold">
                Links
                <div className="underline">
                  <span></span>
                </div>
              </h3>
              <ul className="mt-8 flex flex-col space-y-2">
                <li>
                  <button onClick={() => handleCategoryCourseClick('/')}>
                    <a href="#" className="text-white">
                      Home
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryCourseClick('/courses')}>
                    <a href="#" className="text-white">
                      Courses
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryCourseClick('/about-us')}>
                    <a href="#" className="text-white">
                      About Us
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryCourseClick('/login')}>
                    <a href="#" className="text-white">
                      Log In
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryCourseClick('/register')}>
                    <a href="#" className="text-white">
                      Register
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-[1400px] border-0 border-b border-gray-300 mx-auto my-10" />
          <p className="text-center mb-20">
            AGC Tech © 2023 - All Rights Reserved
          </p>
        </footer>
      </div>
  );
};

export default FooterComponent;
