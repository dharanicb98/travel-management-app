import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const VisitPlace = () => {
  // Slick slider settings
  const location = useLocation();
  const pathname = location.pathname.trim().split("/");
  const id = pathname[pathname.length - 1]
  const data = useSelector((state) => state.places.filteredData)?.find((each) => each.id === id)
  console.log(data , "this is id data")


console.log(location , id , "this is locations")

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
      <h2 className="text-center text-2xl font-bold mb-6">{data?.name}</h2>
      <Slider {...settings}>
        {data?.images?.map((image) => (
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

