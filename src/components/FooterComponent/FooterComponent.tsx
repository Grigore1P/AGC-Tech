import React from 'react';

const FooterComponent = () => {
    return (
        <div className="main bg-[#EEF8F]">
            <footer className="w-full absolute bottom-0 bg-gradient-to-r from-indigo-bg-[#0052D] to-purple-bg-[#57033F] text-white p-10 sm:p-0">
                <div className="w-85 mx-auto flex flex-wrap items-start justify-between">
                    <div className="flex-basis-25 p-4 sm:flex-basis-15">
                        <img className="w-80 mb-10" src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt="Logo" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi qui ducimus iusto odit provident vitae possimus maxime harum minima animi tenetur magnam nihil laborum temporibus eius a, impedit dolore.
                        </p>
                    </div>
                    <div className="flex-basis-25 p-4 sm:flex-basis-15">
                        <h3 className="mb-10 relative">
                            Contact Us
                            <div className="underline"><span></span></div>
                        </h3>
                        <p>Chisinau, Republic of Moldova</p>
                        <p>Customer Service 24/24</p>
                        <p>Fast Delivery & Money Back Guarantee</p>
                        <p className="email-id">popovicigrigore777@gmail.com</p>
                        <h4>+373 - 0123456789</h4>
                    </div>
                    <div className="flex-basis-25 p-4 sm:flex-basis-15">
                        <div className="align">
                            <h3 className="relative">
                                Links
                                <div className="underline"><span></span></div>
                            </h3>
                        </div>
                        <ul>
                            <li><a href="agctech/src/components" className="text-white">Home</a></li>
                            <li><a href="agctech/src/components" className="text-white">Services</a></li>
                            <li><a href="agctech/src/components" className="text-white">About Us</a></li>
                            <li><a href="agctech/src/components" className="text-white">Features</a></li>
                            <li><a href="agctech/src/components" className="text-white">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="flex-basis-25 p-4 sm:flex-basis-15">
                        <h3 className="relative">
                            Info Desk
                            <div className="underline"><span></span></div>
                        </h3>
                        <form className="pb-10 flex items-center justify-between border-b border-gray-300 mb-5">
                            <i className="far fa-envelope text-gray-400 text-2xl mr-4"></i>
                            <input type="email" placeholder="Enter your email id" className="w-full bg-transparent text-gray-400 border-0 outline-none" required />
                            <button type="submit" className="bg-transparent border-0 outline-none cursor-pointer">
                                <i className="fas fa-arrow-right text-gray-400 text-2xl"></i>
                            </button>
                        </form>
                        <div className="social-icons">
                            <i className="fab fa-facebook-f text-2xl w-16 h-16 rounded-full text-center leading-16 text-black bg-white mr-5 cursor-pointer"></i>
                            <i className="fab fa-instagram text-2xl w-16 h-16 rounded-full text-center leading-16 text-black bg-white mr-5 cursor-pointer"></i>
                            <i className="fab fa-telegram text-2xl w-16 h-16 rounded-full text-center leading-16 text-black bg-white mr-5 cursor-pointer"></i>
                            <i className="fab fa-viber text-2xl w-16 h-16 rounded-full text-center leading-16 text-black bg-white cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </footer>
            <hr className="w-90 border-0 border-b border-gray-300 mx-auto my-10" />
            <p className="text-center">AGC Tech © 2023 - All Rights Reserved</p>
        </div>
    );
};

export default FooterComponent;
