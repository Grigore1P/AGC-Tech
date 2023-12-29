import React from 'react';

const FooterComponent = () => {
    return (
        <div className="main bg-[#EEF8F]">
            <footer className="w-full absolute bottom-0 bg-gradient-to-r from-[#00052D] to-[#57033F] text-white p-10 sm:p-0">
                <div className="row w-50 mx-auto flex flex-wrap items-start justify-between">
                    <div className="flex-basis-25 p-4 sm:flex-basis-15 ml-32 mt-20">
                        <img className="w-20 mb-10" src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt="Logo" />
                        <p className="mr-20">
                            Lorem ipsum dolor sit amet consectetur adipisicing<br/>
                            elit. Nesciunt modi qui ducimus iusto odit provident<br />
                            vitae possimus maxime harum minima animi tenetur<br />
                            magnam nihil laborum temporibus eius a, impedit<br />
                            dolore.
                        </p>
                    </div>
                    <div className="contact flex-basis-25 p-4 mt-28 ml-[-100px]">
                        <h3 className="mb-10 relative font-bold">
                            Contact Us
                            <div className="underline"><span></span></div>
                        </h3>
                        <p>Chisinau, Republic of Moldova</p>
                        <p>Customer Service 24/24</p>
                        <p>Fast Delivery & Money Back Guarantee</p>
                        <p className="email-id">popovicigrigore777@gmail.com</p>
                        <h4>+373 - 0123456789</h4>
                    </div>
                    <div className="links flex-basis-25 p-4 ml-[-80px] mt-28">
                        <div className="align">
                            <h3 className="relative font-bold">
                                Links
                                <div className="underline"><span></span></div>
                            </h3>
                        </div>
                        <ul className="mt-8">
                            <li><a href="agctech/src/components" className="text-white">Home</a></li>
                            <li><a href="agctech/src/components" className="text-white">Services</a></li>
                            <li><a href="agctech/src/components" className="text-white">About Us</a></li>
                            <li><a href="agctech/src/components" className="text-white">Features</a></li>
                            <li><a href="agctech/src/components" className="text-white">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="info-desk flex-basis-25 p-4 mr-20 mt-28">
                        <h3 className="relative ml-4">
                            Info Desk
                            <div className=""><span></span></div>
                        </h3>
                        <form className="pb-10 flex items-center justify-between border-b border-gray-300 mb-5">
                            <i className="far fa-envelope text-gray-400 text-2xl mr-4"></i>
                            <input type="email" placeholder="Enter your email id" className="w-full bg-transparent text-gray-400 border-0 outline-none mr-16" required />
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
                <hr className="w-[1400px] border-0 border-b border-gray-300 mx-auto my-10" />
                <p className="text-center mb-20">AGC Tech © 2023 - All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default FooterComponent;
