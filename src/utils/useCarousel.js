import { useState } from "react";

const useCarousel = (images) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        if (index >= 0 && index < images.length) {
            setCurrentIndex(index);
        }
    };

    return {
        currentImage: images[currentIndex],
        currentIndex,
        nextImage,
        prevImage,
        goToImage,
    };
};

export default useCarousel;