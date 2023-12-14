import { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Auto-advance every 2 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
          Previous
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
          Next
        </button>
      </div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full" />
    </div>
  );
};

export default Carousel;
