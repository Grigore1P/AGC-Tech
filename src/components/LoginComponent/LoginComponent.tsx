import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import login from '../LoginComponent/login.jpg';

interface LoginComponentProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState(localStorage.getItem('rememberedEmail') || '');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [rememberMe, setRememberMe] = useState(localStorage.getItem('rememberedEmail') ? true : false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      setRedirect(true);
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setIsLoggedIn(true);
    }
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#57033F] to-[#ffacc5]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#57033F] to-[#ffacc5] blur-lg"></div>
        <div className="relative flex flex-col lg:flex-row w-11/12 lg:w-9/12 bg-white rounded-2xl shadow-xl z-10 overflow-hidden">
          <div className="relative flex flex-col justify-center items-center w-full lg:w-1/2 p-8 bg-gradient-to-r from-[#57033F] to-[#ffacc5] text-white">
            <img src={login} alt="Login illustration" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
              <p className="text-lg mb-4">Secure, easy way to login and get started.</p>
              <p className="text-md">Join us and experience the best service ever!</p>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
            <div className="relative w-full max-w-md p-8 bg-white rounded-2xl shadow-xl z-10">
              <h2 className="text-3xl font-bold text-center mb-6 text-[#57033F]">Conectează-te</h2>
              {error && <div className="text-red-500 mb-4">{`Firebase: ${error}`}</div>}
              <h5 className="mt-[10px] w-40 text-gray-700">Email</h5>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb] focus:outline-none"
              />
              <h5 className="mt-[10px] w-40 text-gray-700">Parolă</h5>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="**********"
                  className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb] focus:outline-none"
              />
              <div className="flex justify-end mb-4">
                <button className="text-[#57033F] underline">Am uitat parola</button>
              </div>
              <label htmlFor="rememberMe" className="flex items-center cursor-pointer mb-4">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                />
                <span className="text-[#57033F]">Ține-mă minte</span>
              </label>
              <div className="flex justify-center mt-4">
                <button
                    onClick={handleLogin}
                    className={`px-8 py-4 rounded-xl text-[#F3D7CA] transition-all relative transform ${
                        isHovered
                            ? 'rotate-180 bg-gradient-to-r from-pink-500 to-pink-400'
                            : 'bg-gradient-to-r from-[#00052D] to-[#57033F]'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                <span
                    className={`absolute inset-0 flex items-center justify-center transition-transform ${
                        isHovered ? 'transform -rotate-180' : ''
                    }`}
                >
                  Submit
                </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginComponent;
