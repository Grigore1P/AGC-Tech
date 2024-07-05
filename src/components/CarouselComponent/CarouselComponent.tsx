import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rightArrow from '/imaginute/rightarrow.png'; // Ensure this path is correct

interface CarouselProps {
    slides: { image: string; path: string }[];
}

export default function Carousel({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const goToSlide = (path: string) => {
        navigate(path);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0 flex items-center justify-center cursor-pointer"
                        onClick={() => goToSlide(slide.path)}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={previousSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent text-white p-1 rounded-full transition-transform transform hover:scale-150 hover:shadow-2xl hover:shadow-purple-700"
            >
                <img src='/imaginute/rightarrow.png' alt="Previous" className="rotate-180 w-8 h-8"/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-white p-1 rounded-full transition-transform transform hover:scale-150 hover:shadow-2xl hover:shadow-purple-700"
            >
                <img src='/imaginute/rightarrow.png' alt="Next" className="w-8 h-8"/>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-gray-500 rounded-full">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ease-in-out ${
                                i === current ? 'bg-white w-full' : 'bg-transparent w-0'
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
