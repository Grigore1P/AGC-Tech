import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginComponent: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
        <div
            className='flex items-center justify-center min-h-screen'
            style={{ backgroundColor: '#F3D7CA' }}
        >
            <div
                className='p-6 max-w-sm w-full'
                style={{
                    backgroundColor: '#57033F',
                    color: '#F3D7CA',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '0.5rem',
                }}
            >
                <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
                {error && (
                    <div className='text-red-500 mb-4'>{`Firebase: ${error}`}</div>
                )}
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className='mb-4 p-2 w-full border border-gray-300 rounded'
                    style={{
                        color: '#57033F',
                        backgroundColor: '#F3D7CA',
                        borderColor: '#57033F',
                    }}
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className='mb-4 p-2 w-full border border-gray-300 rounded'
                    style={{
                        color: '#57033F',
                        backgroundColor: '#F3D7CA',
                        borderColor: '#57033F',
                    }}
                />
                <button
                    onClick={handleLogin}
                    className='p-2 w-full rounded'
                    style={{ backgroundColor: '#57033F', color: '#F3D7CA' }}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginComponent;
