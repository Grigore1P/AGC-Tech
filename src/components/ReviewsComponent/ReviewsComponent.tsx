import React, { useState, useEffect, ReactNode } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

// Define the type for review objects
interface Review {
    id: string;
    name: string;
    rating: number;
    feedback: string;
}

const ReviewsComponent = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [hoveredReview, setHoveredReview] = useState<string | null>(null);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const [circlesArray, setCirclesArray] = useState<ReactNode[]>([]);

    useEffect(() => {
        const circles = [...Array(15)].map((_, i) => {
            const size = Math.random() * 80 + 10;
            const delay = Math.random() * 15 + 's';
            const duration = Math.random() * 20 + 15 + 's';
            const left = Math.random() * 80 + '%';

            return (
                <li
                    key={i}
                    className={`absolute block list-none bg-gradient-to-r from-gray-200 to-pink-400 bg-opacity-100 animate-animate bottom-[-150px] circle-${i}`}
                    style={{ width: size, height: size, animationDelay: delay, animationDuration: duration, left: left }}
                ></li>
            );
        });
        setCirclesArray(circles);
    }, []);

    useEffect(() => {
        const q = query(
            collection(db, 'reviews'),
            orderBy('date', 'desc'),
            limit(3)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reviewsArray: Review[] = [];
            querySnapshot.forEach((doc) => {
                reviewsArray.push({ id: doc.id, ...doc.data() } as Review);
            });
            setReviews(reviewsArray);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="relative flex flex-col items-center bg-gradient-to-r from-black to-[#240046] py-10 min-h-screen overflow-hidden">
            <div className="text-center mb-10 z-10">
                <ul className="circles absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    {circlesArray}
                </ul>
                <h1 className="text-3xl text-white font-bold">
                    Recenziile studenților noștri
                </h1>
                <h2 className="text-sm text-gray-400 mt-2">
                    Peste 2000 de clienți satisfăcuți, angajați actuali ⭐️
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 z-10">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div
                            key={review.id}
                            className={`relative flex flex-col items-center justify-center bg-gradient-to-r from-[#00052D] to-[#57033F] rounded-xl border border-slate-800 p-4 transform transition-transform duration-300 cursor-pointer ${
                                hoveredReview === review.id ? 'absolute inset-0 w-full h-full z-50' : 'h-80'
                            }`}
                            onMouseEnter={() => setHoveredReview(review.id)}
                            onMouseLeave={() => setHoveredReview(null)}
                        >
                            <div className="w-full bg-slate-900 rounded-lg p-4">
                                <p className="text-[#ffc0eb] text-lg font-bold mb-2">
                                    {review.name}
                                </p>
                                <div className="flex items-center justify-center">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <AiFillStar key={i} color="white" />
                                    ))}
                                </div>
                                <p className="text-gray-400">
                                    {review.feedback.length > 20
                                        ? review.feedback.substring(0, 20) + '...'
                                        : review.feedback}
                                </p>
                            </div>
                            {hoveredReview === review.id && (
                                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 rounded-xl">
                                    <div className="bg-slate-900 rounded-lg p-6 w-full h-full flex flex-col justify-center items-center text-center text-white">
                                        <h2 className="text-2xl font-bold mb-4">{review.name}</h2>
                                        <p className="text-sm mb-4">{review.feedback}</p>
                                        <div className="flex items-center justify-center mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} color="white" size={24} />
                                            ))}
                                        </div>
                                        <button
                                            className="bg-gradient-to-r from-[#DABFFF] to-[#907AD6] text-white py-2 px-4 rounded-lg"
                                            onClick={() => navigate('/opiniataconteaza')}
                                        >
                                            Give Feedback
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center w-full">No reviews available</p>
                )}
            </div>
            <div className="mt-20 flex flex-col items-center z-10">
                <button
                    onClick={() => navigate('/opiniataconteaza')}
                    className={`w-32 h-12 text-white rounded-xl mt-10 transition-all relative transform ${
                        isHovered
                            ? 'rotate-180 bg-gradient-to-r from-[#DABFFF] to-[#907AD6]'
                            : ''
                    } bg-gradient-to-r from-[#00052D] to-[#57033F]`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
          <span
              className={`absolute inset-0 flex items-center justify-center transition-transform ${
                  isHovered ? 'transform -rotate-180' : ''
              }`}
          >FEEDBACK</span>
                </button>
                <p className="text-gray-200 font-sans text-sm mt-4">Scrie-ne parerea ta</p>
            </div>
        </div>
    );
};

export default ReviewsComponent;
