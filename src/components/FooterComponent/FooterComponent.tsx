import React, { useState } from "react";

const FooterComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="main min-h-screen bg-[#EEF8F] relative mt-[-160px] flex flex-col">
      <footer className="w-full absolute bottom-0 bg-gradient-to-r from-[#00052D] to-[#57033F] text-white p-10 sm:p-0">
        <div className="row w-50 mx-auto flex flex-wrap items-start justify-between">
          <div className="flex-basis-25 p-4 sm:flex-basis-15 ml-32 mt-10">
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
          <div className="contact flex-basis-25 p-4 mt-16 ml-[-100px]">
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
          <div className="links flex-basis-25 p-4 ml-[-80px] mt-16">
            <div className="align">
              <h3 className="relative font-bold">
                Links
                <div className="underline">
                  <span></span>
                </div>
              </h3>
            </div>
            <ul className="mt-8">
              <li>
                <a href="agctech/src/components" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="agctech/src/components" className="text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="agctech/src/components" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="agctech/src/components" className="text-white">
                  Log In
                </a>
              </li>
              <li>
                <a href="agctech/src/components" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="leaveReview flex-basis-25 p-4 mr-40 mt-28">
            <h3 className="relative ml-4 font-bold font-sans">
              Leave a Review
            </h3>
            {submitted ? (
              <p className="text-gray-400 mt-4">Thank you for your review!</p>
            ) : (
              <form className="flex items-center flex-col">
                <input
                  type="email"
                  placeholder="Enter your email id"
                  className="w-full bg-transparent text-gray-400 border-b-2 border-gray-300 outline-none my-4 p-2"
                  required
                  value={email}
                />
                <textarea
                  placeholder="Enter your message"
                  className="w-full bg-transparent text-gray-400 border-b-2 border-gray-300 outline-none p-2"
                  value={message}
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#57033F] text-white py-2 px-4 mt-4 rounded hover:bg-[#45012B]"
                >
                  Submit
                </button>
              </form>
            )}
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
