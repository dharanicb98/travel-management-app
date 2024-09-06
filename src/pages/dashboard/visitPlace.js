import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Carousel images data
const images = [
  { id: 1, url: 'https://via.placeholder.com/800x400?text=Image+1' },
  { id: 2, url: 'https://via.placeholder.com/800x400?text=Image+2' },
  { id: 3, url: 'https://via.placeholder.com/800x400?text=Image+3' },
  { id: 4, url: 'https://via.placeholder.com/800x400?text=Image+4' },
];

const VisitPlace = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-6">Image Carousel</h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={image.url}
              alt={`Slide ${image.id}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VisitPlace;

