import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
interface HeaderComponentProps {
    user: any; // You can replace 'any' with a more specific type if you know it
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ user }) => {
    const [authUser, loading, error] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
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
                <li className="group Header1 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link
                        to="/"
                        className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2"
                    >
                        HOME
                    </Link>
                </li>
                <li className="group Header2 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link
                        to="/courses"
                        className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2"
                    >
                        COURSES
                    </Link>
                </li>
                <li className="group Header3 border border-transparent p-2 ml-10 transition-all mt-5">
                    <button className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2">
                        LOGO
                    </button>
                </li>
                <li className="group Header4 border border-transparent p-2 ml-10 transition-all mt-5">
                    <Link
                        to="/about-us"
                        className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2"
                    >
                        ABOUT US
                    </Link>
                </li>
                {authUser ? (
                    <>
                        <li className="group Header5 border border-transparent p-2 ml-10 transition-all mt-5">
              <span className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2">
                Welcome, {authUser.email}
              </span>
                        </li>
                        <li className="group Header6 border border-transparent p-2 ml-10 transition-all mt-5">
                            <button
                                onClick={handleLogout}
                                className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="group Header5 border border-transparent p-2 ml-10 transition-all mt-5">
                            <Link
                                to="/login"
                                className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2"
                            >
                                LOG IN
                            </Link>
                        </li>
                        <li className="group Header6 border border-transparent p-2 ml-10 transition-all mt-5">
                            <Link
                                to="/register"
                                className="hover:text-[#FC819E] border-[#891652] hover:border-4 hover:rounded-xl transition-all mt-2"
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
