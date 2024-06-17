import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import logo from "./logo.svg";


interface HeaderComponentProps {
    user: any;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ user, isLoggedIn, setIsLoggedIn }) => {
    const [authUser, loading, error] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="Header h-20 w-full bg-gradient-to-r from-[#00052D] to-[#57003F] text-white text-2xl">
            <ul className="flex items-center justify-center space-x-20 relative">
                <li className="group relative inline-block">
                    <Link
                        to="/"
                        className="p-2 ml-10 mt-5 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"
                    >
                        HOME
                    </Link>
                </li>
                <li className="group relative inline-block">
                    <Link
                        to="/courses"
                        className="p-2 ml-10 mt-5 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"
                    >
                        COURSES
                    </Link>
                </li>
                <li className="group relative inline-block">
                    <button className="p-2 ml-10 mt-5 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]">
                        LOGO
                    </button>
                </li>
                <li className="group relative inline-block">
                    <Link
                        to="/about-us"
                        className="p-2 ml-10 mt-5 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"
                    >
                        ABOUT US
                    </Link>
                </li>
                {authUser && isLoggedIn ? (
                    <>
                        <li className="group relative inline-block">
                            <span
                                className="p-2 ml-10 mt-5 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]">
                                Welcome, {authUser.displayName}
                            </span>
                        </li>
                        <li className="group relative inline-block">
                            <button
                                onClick={handleLogout}
                                className="p-2 ml-10 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="group relative inline-block">
                            <Link
                                to="/login"
                                className="p-2 ml-10 mt-5 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"
                            >
                                LOG IN
                            </Link>
                        </li>
                        <li className="group relative inline-block">
                            <Link
                                to="/register"
                                className="p-2 ml-10 mt-5 relative z-10 text-white transition duration-300 ease-in-out transform rounded-lg group-hover:animate-shake group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"
                            >
                                REGISTER
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default HeaderComponent;
