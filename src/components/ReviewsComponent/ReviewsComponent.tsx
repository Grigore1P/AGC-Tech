import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ReviewsComponent = () => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [hoveredReview, setHoveredReview] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const q = query(
            collection(db, 'reviews'),
            orderBy('date', 'desc'),
            limit(3)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reviewsArray: any[] = [];
            querySnapshot.forEach((doc) => {
                reviewsArray.push({ id: doc.id, ...doc.data() });
            });
            setReviews(reviewsArray);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-[#DABFFF] to-[#907AD6] py-10 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-3xl text-white font-bold">
                    Recenziile studenților noștri
                </h1>
                <h2 className="text-sm text-gray-400 mt-2">
                    Peste 2000 de clienți satisfăcuți, angajați actuali ⭐
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
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
            <div className="mt-10 flex flex-col items-center">
                <button
                    onClick={() => navigate('/opiniataconteaza')}
                    className="w-32 h-12 text-white rounded-xl transition-all bg-gradient-to-r from-[#00052D] to-[#57033F]"
                >
                    <span className="transition-transform">FEEDBACK</span>
                </button>
                <p className="text-gray-200 font-sans text-sm mt-4">Scrie-ne parerea ta</p>
            </div>
        </div>
    );
};

export default ReviewsComponent;
