import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import AGCLogoModel2 from './AGCLogoModel2.png';

interface HeaderComponentProps {
    user: any;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
                                                             user,
                                                             isLoggedIn,
                                                             setIsLoggedIn,
                                                         }) => {
    const [authUser, loading, error] = useAuthState(auth);
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    useEffect(() => {
        if (authUser) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [authUser, setIsLoggedIn]);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };

    const handleMouseEnter = (buttonName: string) => {
        setHoveredButton(buttonName);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <header className={`bg-gradient-to-r from-[#00052D] to-[#57003F] text-white shadow-lg fixed w-full z-50 transition-all duration-300 ease-in-out ${hoveredButton ? 'backdrop-blur-sm' : ''}`}>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-3xl font-bold">
                    <Link to="/" className="text-white transition duration-300 ease-in-out transform hover:scale-105">
                        {/* <img src={AGCLogoModel2} alt="" className="w-36 h-36"/> */}
                    </Link>
                </div>
                <nav className="flex space-x-4 relative">
                    {['home', 'courses', 'about-us'].map((item) => (
                        <Link
                            key={item}
                            to={`/${item === 'home' ? '' : item}`}
                            className={`relative group px-3 py-1 text-lg text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-lg ${hoveredButton === item ? 'z-50 backdrop-blur-none' : ''}`}
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="relative z-10 capitalize">{item.replace('-', ' ')}</span>
                            <span className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"></span>
                        </Link>
                    ))}
                    {!isLoggedIn && (
                        <>
                            {['login', 'register'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item}`}
                                    className={`relative group px-3 py-1 text-lg text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-lg ${hoveredButton === item ? 'z-50 backdrop-blur-none' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className="relative z-10 capitalize">{item}</span>
                                    <span className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"></span>
                                </Link>
                            ))}
                        </>
                    )}
                    {authUser && isLoggedIn && (
                        <div className="relative group mt-1" onMouseEnter={() => handleMouseEnter('welcome')} onMouseLeave={handleMouseLeave} style={{ zIndex: hoveredButton === 'welcome' ? 50 : 'auto' }}>
              <span className={`relative group px-3 py-1 text-lg text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-lg cursor-pointer ${hoveredButton === 'welcome' ? 'backdrop-blur-none' : ''}`}>
                <span className="relative z-10">Welcome, {authUser.displayName}</span>
                <span className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-[#EAD5E6] group-hover:via-[#F2BEFC] group-hover:to-[#F3E0EC] group-hover:bg-clip-text group-hover:text-transparent group-hover:shadow-[0_0_20px_10px_#EE85B5]"></span>
              </span>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block transition duration-300 ease-in-out">
                                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default HeaderComponent;
