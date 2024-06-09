import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import login from '../LoginComponent/login.jpg';

const LoginComponent: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setRedirect(true);
        } catch (error: any) {
            setError(error.message);
            console.error(error);
        }
    };

    if (redirect) {
        return <Navigate to='/' />;
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-black'>
            <div className='p-6 max-w-sm w-full bg-[#222831] text-white shadow-md rounded-md mr-40'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Conectează-te</h2>
                {error && (
                    <div className='text-red-500 mb-4'>{`Firebase: ${error}`}</div>
                )}
                <h5 className=" mt-[10px] w-40 text-[#686D76]">Email</h5>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='name@example.com'
                    className='mb-4 p-2 w-full border border-[#57033F] rounded bg-[#373A40] text-[#57033F] mt-2'
                />
                <h5 className=" mt-[10px] w-40 text-[#686D76]">Parola</h5>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='**********'
                    className='mb-4 p-2 w-full border border-[#57033F] rounded bg-[#373A40] text-[#57033F] mt-2'
                />
                <button className="ml-48 mt-[10px] w-40">Am uitat parola</button>

                <input
                    type='checkbox'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='**********'
                    className='mb-4 p-2 mt-[-36px] border border-[#57033F] rounded bg-[#373A40] text-[#57033F] w-10 h-10'
                />
                <h4 className="ml-12 mt-[-50px] w-32">Ține-mă minte</h4>

                <button
                    onClick={handleLogin}
                    className={`p-2 w-32 h-12 rounded-xl ml-24 bg-[#57033F] text-[#F3D7CA] mt-6 ${
                        isHovered
                            ? "bg-gradient-to-l from-[#00052D] to-[#57033F]"
                            : "bg-gradient-to-r from-[#00052D] to-[#57033F]"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Login
                </button>

            </div>

            <img src={login} alt="" className="w-[360px] h-[440px] rounded-3xl"/>
        </div>
    );
};

export default LoginComponent;
