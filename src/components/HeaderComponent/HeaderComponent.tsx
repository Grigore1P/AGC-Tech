import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { motion } from 'framer-motion';

const HeaderComponent: React.FC<{ user?: any }> = ({ user }) => {
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

  const splashVariants = {
    initial: { scale: 0, opacity: 0 },
    tap: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const snakeAnimation = {
    animate: {
      strokeDasharray: '100,200',
      strokeDashoffset: [0, -200],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const MotionLink = ({ to, children, splash }: { to: string; children: React.ReactNode; splash?: boolean }) => (
      <motion.div className="relative inline-block m-4">
        <Link to={to} className="hover:text-gray-200 transition-colors relative z-10 p-4">
          {children}
        </Link>
        {splash && (
            <motion.div
                className="absolute inset-0 w-full h-full z-0"
                variants={splashVariants}
                initial="initial"
                whileTap="tap"
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50 0 L75 25 L100 25 L75 50 L100 75 L75 75 L50 100 L25 75 L0 75 L25 50 L0 25 L25 25 Z"
                    fill="rgba(255,255,255,0.8)"
                />
              </svg>
            </motion.div>
        )}
      </motion.div>
  );

  return (
      <header className="relative bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
        <div className="relative container mx-auto flex justify-between items-center p-6 z-10 space-x-12">
          <div className="text-3xl font-bold transform hover:scale-125 transition-transform duration-500">
            <Link to="/" className="hover:text-gray-200 transition-colors">
              AGC Tech
            </Link>
          </div>
          <nav className="flex space-x-12">
            <MotionLink to="/">Home</MotionLink>
            <div className="border-l-2 border-white h-full mx-4"></div> {/* Separator */}
            <MotionLink to="/about-us">About Us</MotionLink>
            <div className="border-l-2 border-white h-full mx-4"></div> {/* Separator */}
            <MotionLink to="/courses">Courses</MotionLink>
            <div className="border-l-2 border-white h-full mx-4"></div> {/* Separator */}
            {authUser ? (
                <>
                  <motion.div className="relative inline-block m-4">
                <span className="hover:text-gray-200 transition-colors relative z-10 p-4">
                  Welcome, {authUser.email}
                </span>
                    <motion.svg
                        className="absolute inset-0 w-full h-full z-0"
                        viewBox="0 0 200 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.rect
                          x="5"
                          y="5"
                          width="190"
                          height="40"
                          rx="10"
                          stroke="white"
                          strokeWidth="4"
                          variants={snakeAnimation}
                          animate="animate"
                      />
                    </motion.svg>
                  </motion.div>
                  <motion.button
                      onClick={handleLogout}
                      className="relative hover:text-gray-200 transition-colors p-4 m-4 transform hover:scale-125 transition-transform duration-500"
                  >
                    <span className="relative z-10">Logout</span>
                  </motion.button>
                </>
            ) : (
                <>
                  <MotionLink to="/login">Login</MotionLink>
                  <div className="border-l-2 border-white h-full mx-4"></div> {/* Separator */}
                  <MotionLink to="/register" splash={true}>Register</MotionLink>
                </>
            )}
          </nav>
        </div>
      </header>
  );
};

export default HeaderComponent;
