import React, { useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const RecenzieComponent = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const reviewsCollection = collection(db, 'reviews');
            const newReview = {
                name,
                feedback,
                rating,
                date: new Date()
            };

            await addDoc(reviewsCollection, newReview);
            console.log('Document written with new review:', newReview);

            const q = query(reviewsCollection, orderBy('date', 'desc'));
            const querySnapshot = await getDocs(q);
            const reviews = querySnapshot.docs;

            if (reviews.length > 3) {
                const oldestReview = reviews[reviews.length - 1];
                await deleteDoc(doc(db, 'reviews', oldestReview.id));
                console.log('Deleted oldest review:', oldestReview.data());
            }

            setName('');
            setFeedback('');
            setRating(0);
            alert('Thank you for your feedback!');
            navigate('/');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className='text-black p-10 bg-gradient-to-r from-[#00052D] to-[#57033F] min-h-screen flex items-center justify-center'>
            <div className='bg-white p-10 rounded-lg shadow-md w-full max-w-2xl'>
                <h1 className='text-3xl text-[#57033F] font-bold mb-5 text-center'>Leave Your Feedback</h1>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='feedback'>Feedback</label>
                        <textarea
                            id='feedback'
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32'
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Rating</label>
                        <div className='flex space-x-2'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type='button'
                                    className='focus:outline-none'
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                                    {star <= (hoverRating || rating) ? (
                                        <AiFillStar size={24} className='text-yellow-500' />
                                    ) : (
                                        <AiOutlineStar size={24} className='text-yellow-500' />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='text-center'>
                        <button
                            type='submit'
                            className='bg-[#57033F] text-white py-2 px-6 rounded-full hover:bg-[#00052D] transition duration-300 transform hover:scale-105'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RecenzieComponent;
