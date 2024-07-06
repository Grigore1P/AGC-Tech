import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { Navigate, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

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

  const handleGoToLoginClick = () => {
    navigate('/login');
  };

  return (
      <div className="relative min-h-screen flex justify-center items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-[#57033F] to-[#ffacc5] blur-lg"></div>
        <div className="relative flex flex-col md:flex-row w-11/12 lg:w-9/12 bg-white rounded-2xl shadow-xl z-10 mt-10 mb-10">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-gradient-to-r from-[#57033F] to-[#ffacc5] text-white rounded-t-2xl md:rounded-l-2xl md:rounded-t-none">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Service</h2>
            <p className="text-lg mb-4">Secure, easy way to register and get started.</p>
            <p className="text-md">Join us and experience the best service ever!</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-6 text-[#57033F]">Create an account</h2>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <h5 className="mt-[10px] w-40 text-gray-700">Email</h5>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb] focus:outline-none"
              />
              <h5 className="mt-[10px] w-40 text-gray-700">Nume</h5>
              <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Nume"
                  className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb] focus:outline-none"
              />
              <h5 className="mt-[10px] w-40 text-gray-700">Prenume</h5>
              <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Prenume"
                  className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb] focus:outline-none"
              />
              <h5 className="mt-[10px] w-40 text-gray-700">Parola</h5>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parola"
                  className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb] focus:outline-none"
              />
              <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmă parola"
                  className="w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb] focus:outline-none"
              />
              <div className="flex justify-center mt-4">
                <button
                    onClick={handleRegister}
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
              <button
                  onClick={handleGoToLoginClick}
                  className={`w-full mt-4 text-[#57033F] text-center underline ${isTextHovered ? 'underline' : ''}`}
                  onMouseEnter={() => setIsTextHovered(true)}
                  onMouseLeave={() => setIsTextHovered(false)}
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RegisterComponent;