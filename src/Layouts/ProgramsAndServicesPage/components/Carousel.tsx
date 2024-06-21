import React, { useState } from 'react';
import './Carousel.css'; // Make sure to create this CSS file for styling

interface CarouselProps {
    images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <button onClick={goToPrevious} className="carousel__arrow carousel__arrow--left"></button>
            <div className="carousel__image-wrapper">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button onClick={goToNext} className="carousel__arrow carousel__arrow--right"></button>
        </div>
    );
};

export default Carousel;
