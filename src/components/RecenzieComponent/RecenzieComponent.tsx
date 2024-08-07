import React, { useState, useEffect, ReactNode } from 'react';
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
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [circlesArray, setCirclesArray] = useState<ReactNode[]>([]);

    const handleButtonClick = () => {
        navigate('/reviews');
    };

    useEffect(() => {
        const circles = [...Array(15)].map((_, i) => {
            const size = Math.random() * 80 + 10;
            const delay = Math.random() * 15 + 's';
            const duration = Math.random() * 20 + 15 + 's';
            const left = Math.random() * 80 + '%';

            return (
                <li
                    key={i}
                    className="absolute block list-none bg-gradient-to-r from-gray-200 to-pink-400 bg-opacity-100 animate-animate bottom-[-150px]"
                    style={{
                        width: size,
                        height: size,
                        animationDelay: delay,
                        animationDuration: duration,
                        left: left,
                    }}
                ></li>
            );
        });
        setCirclesArray(circles);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !feedback || rating === 0) {
            alert('Please fill out all fields and provide a rating.');
            return;
        }

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

            const localReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            localReviews.push(newReview);
            if (localReviews.length > 3) {
                localReviews.shift(); // Remove the oldest review
            }
            localStorage.setItem('reviews', JSON.stringify(localReviews));

            if (reviews.length > 3) {
                const oldestReview = reviews[reviews.length - 1];
                await deleteDoc(doc(db, 'reviews', oldestReview.id));
                console.log('Deleted oldest review:', oldestReview.data());
            }

            // Save the new review to local storage
            const storedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            storedReviews.unshift(newReview);
            localStorage.setItem('reviews', JSON.stringify(storedReviews));

            setName('');
            setFeedback('');
            setRating(0);
            alert('Thank you for your feedback!');
            navigate('/reviews'); // Navigate to reviews page after successful submission
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className='text-black p-10 relative w-screen bg-gradient-to-r from-black to-[#57033F] via-black animate-gradient-x h-[1000px] flex items-center justify-center'>
            <ul className="circles absolute top-0 left-0 w-full h-[96%] overflow-hidden -z-1">
                {circlesArray}
            </ul>
            <div className='recenzie bg-gradient-to-r from-[#57033F] to-[#ffacc5] p-8 mt-14 rounded-2xl shadow-md w-full h-[600px] max-w-md z-10'>
                <h1 className='text-2xl flex justify-center text-white font-bold mb-4'>Leave Your Feedback</h1>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb]'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='feedback'>Feedback</label>
                        <textarea
                            id='feedback'
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className='w-full h-[200px] p-2 border bg-pink-300 border-[#57033F] text-white rounded-xl mb-4 mt-2 focus:border-[#ffc0eb]'
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className='block text-white text-sm mt-[-20px] font-bold mb-2'>Rating</label>
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
                                        <AiFillStar size={24} className='text-[#57033F]'/>
                                    ) : (
                                        <AiOutlineStar size={24} className='text-pink-300'/>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='text-center'>
                        <button
                            type="submit"
                            className={`w-32 h-12 text-white rounded-xl mt-[-10px] transition-all relative transform ${
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

                    <div className="gotoreview text-center">
                        <button
                            onClick={handleButtonClick}
                            type="button" // Changed from "submit" to "button"
                            className={`w-32 h-12 text-white rounded-xl mt-20 transition-all relative transform ${
                                isHovered1
                                    ? 'bg-gradient-to-r from-[#00052D] to-[#57033F]'
                                    : ''
                            } bg-gradient-to-l from-[#ffacc5] to-[#57033F]`}
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                        >
                            Vezi Recenziile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default RecenzieComponent;