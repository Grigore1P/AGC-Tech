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
    <div className="flex justify-center items-center h-[1200px] bg-black">
      <div className="bg-[#222831] p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl text-white font-bold mb-4">Înregistrează-te</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <h5 className=" mt-[10px] w-40 text-[#686D76]">Email</h5>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="w-full p-2 border bg-[#373A40] border-[#57033F] text-white rounded mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <h5 className=" mt-[10px] w-40 text-[#686D76]">Nume</h5>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nume"
          className="w-full p-2 border bg-[#373A40] border-[#57033F] text-white rounded mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <h5 className=" mt-[10px] w-40 text-[#686D76]">Prenume</h5>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Prenume"
          className="w-full p-2 border bg-[#373A40] border-[#57033F] text-white rounded mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <h5 className="w-40 text-[#686D76]">Parola</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parola"
          className="w-full p-2 border bg-[#373A40] border-[#57033F] text-white rounded mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmă parola"
          className="w-full p-2 border bg-[#373A40] border-[#57033F] text-white rounded mb-4 mt-2 focus:border-[#ffc0eb]"
        />
        <button
          onClick={() => handleGoToLoginClick('login')}
          className={`w-40 ml-[-30px] text-white ${isTextHovered ? 'underline' : ''}`}
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
        >
          Ai deja cont?
        </button>
        <button
          onClick={handleRegister}
          className={`p-2 w-32 h-12 rounded-xl ml-32 bg-[#57033F] text-[#F3D7CA] mt-2 ${
            isHovered
              ? 'bg-gradient-to-l from-[#00052D] to-[#57033F]'
              : 'bg-gradient-to-r from-[#00052D] to-[#57033F]'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Intră
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
