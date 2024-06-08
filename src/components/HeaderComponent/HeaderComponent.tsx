import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const HeaderComponent: React.FC<{ user?: any }> = ({ user }) => {
  const [authUser, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/">AGC Tech</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-gray-400">
            About Us
          </Link>
          <Link to="/courses" className="hover:text-gray-400">
            Courses
          </Link>
          {authUser ? (
            <>
              <span className="hover:text-gray-400">
                Welcome, {authUser.email}
              </span>
              <button onClick={handleLogout} className="hover:text-gray-400">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-400">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
