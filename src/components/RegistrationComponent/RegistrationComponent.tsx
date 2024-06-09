// src/components/RegisterComponent/RegisterComponent.tsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { Navigate } from "react-router-dom";

const RegisterComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (success) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-[#222831] p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl text-white font-bold mb-4">Înregistrează-te</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <h5 className=" mt-[10px] w-40 text-[#686D76]">Email</h5>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full p-2 border bg-[#373A40] border-[#57033F] rounded mb-4 mt-2"
        />
        <h5 className="w-40 text-[#686D76]">Parola</h5>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parola"
            className="w-full p-2 bg-[#373A40] border border-[#57033F] rounded mb-4 mt-2"
        />
        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmă parola"
            className="w-full p-2 bg-[#373A40] border border-[#57033F] rounded mb-4"
        />
        <button
            onClick={handleRegister}
            className={`p-2 w-32 h-12 rounded-xl ml-32 bg-[#57033F] text-[#F3D7CA] mt-2 ${
                isHovered
                    ? "bg-gradient-to-l from-[#00052D] to-[#57033F]"
                    : "bg-gradient-to-r from-[#00052D] to-[#57033F]"
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
