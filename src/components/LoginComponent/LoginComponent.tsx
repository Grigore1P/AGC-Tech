import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import login from '../LoginComponent/login.jpg';
import logo from './logo.svg';

interface LoginComponentProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState(
    localStorage.getItem('rememberedEmail') || '',
  );
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem('rememberedEmail') ? true : false,
  );

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
    <div className="text-black p-10 relative w-screen bg-gradient-to-r from-black to-[#57033F] via-black animate-gradient-x min-h-screen flex items-center justify-center">
      <div
          className="p-6 max-w-sm w-full bg-gradient-to-r from-[#57033F] to-[#ffacc5] text-white shadow-md rounded-md mr-40">
        <h2 className="text-2xl font-bold mb-6 text-center">Conectează-te</h2>
        {error && (
            <div className="text-red-500 mb-4">{`Firebase: ${error}`}</div>
        )}
        <h5 className=" mt-[10px] w-40 text-white">Email</h5>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className={
              'mb-4 p-2 w-full border border-[#57033f] rounded-xl bg-pink-300  text-white mt-2 focus:border-[#ffc0eb]'
            }
        />
        <h5 className=" mt-[10px] w-40 text-white">Parolă</h5>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            className={
              'mb-4 p-2 w-full border border-[#57033f] rounded-xl bg-pink-300 text-white mt-2 focus:border-[#ffc0eb]'
            }
        />

        <button className="ml-48 mt-[10px] w-40">Am uitat parola</button>

        <label
            htmlFor="rememberMe"
            className="flex items-center mt-2 cursor-pointer"
        >
          <input
              type="checkbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className="mb-4 p-2 mt-[-32px] border border-[#57033F] rounded bg-pink-300 text-[#57033F] w-6 h-6"
          />
          <span className="ml-2 mt-[-50px] w-32">Ține-mă minte</span>
        </label>

        <button
            onClick={handleLogin}
            className={`p-2 w-32 h-12 rounded-xl ml-24 text-[#F3D7CA] transition-all relative transform mt-6 ${
                isHovered
                    ? 'rotate-180 bg-gradient-to-r from-pink-500 to-pink-400'
                    : ''
            } bg-gradient-to-r from-[#00052D] to-[#57033F]`}
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

      <img src={login} alt="" className="w-[360px] h-[440px] rounded-3xl"/>
    </div>
  );
};

export default LoginComponent;
