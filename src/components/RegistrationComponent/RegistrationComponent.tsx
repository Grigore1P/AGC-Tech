import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { Navigate, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import logo from './logo.svg';

const RegisterComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, {
          displayName: lastname,
        });
      }
      setSuccess(true);
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (success) {
    return <Navigate to="/login" />;
  }

  const handleGoToLoginClick = (category: string) => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-[1200px] bg-gradient-to-r from-black to-[#57033F] via-black animate-gradient-x min-h-screen">
      <div
          className="bg-gradient-to-r from-[#57033F] to-[#ffacc5] p-8 mt-[-150px] rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl text-white font-bold mb-4">Înregistrează-te</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <h5 className=" mt-[10px] w-40 text-white">Email</h5>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <h5 className=" mt-[10px] w-40 text-white">Nume</h5>
        <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nume"
            className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <h5 className=" mt-[10px] w-40 text-white">Prenume</h5>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Prenume"
            className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <h5 className="w-40 text-white">Parola</h5>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parola"
            className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmă parola"
            className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <button
            onClick={() => handleGoToLoginClick('login')}
            className={`w-40 ml-[-30px] text-white ${isTextHovered ? 'underline' : ''}`}
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
        >
          Ai deja cont?
        </button>

        {/* p-2 w-32 h-12 rounded-xl ml-32 bg-[#57033F] text-[#F3D7CA] mt-2*/}
        <button
            onClick={handleRegister}
            className={`p-2 w-32 h-12 rounded-xl ml-32 text-[#F3D7CA] transition-all relative transform mt-2 ${
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
    </div>
  );
};

export default RegisterComponent;
