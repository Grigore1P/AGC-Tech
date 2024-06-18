import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

interface CarouselProps {
    slides: { image: string, path: string }[];
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

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0 flex items-center justify-center cursor-pointer"
                        onClick={() => goToSlide(slide.path)}
                    >
                        <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <button
                onClick={previousSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
            >
                <BsFillArrowLeftCircleFill size={30} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
            >
                <BsFillArrowRightCircleFill size={30} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-4 h-4 rounded-full cursor-pointer ${i === current ? "bg-white" : "bg-gray-500"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
