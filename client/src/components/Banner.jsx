import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import NextArrow from './NextArrow';
import PrevArrow from './PreviousArrow';

const Banner = ({ items }) => {
  // Settings for the slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {items.categories.map((item) => (
          <div key={item.id} className="w-full">
            <Link to={item.products ? `/category/${item.id}` : `/product/${item.id}`}>
              <div className="w-full h-96 bg-cover bg-center" style={{ 
                    backgroundImage: `url(${require(`../images/categories/${item.image}`)})`,
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat' 
                }}>
                <div className="bg-black bg-opacity-30 w-full h-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <h2 className="text-4xl font-bold">{item.name}</h2>
                    {item.products && <p className="text-xl mt-2">Explore {item.name}</p>}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

