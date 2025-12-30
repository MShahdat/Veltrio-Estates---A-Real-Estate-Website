import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { banner } from '../../../public/banner';
const Banner = () => {

  const settings = {
    infinite: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    dots: true,
  };

  return (
    <div className=" w-full">
      <Slider {...settings} className="h-[85vh] overflow-hidden">
        {banner.map((ba, idx) => (
          <div key={idx} className="relative h-[85vh]"> {/* FIXED */}
            <img
              src={ba.url}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay content */}
            <div className="relative max-w-5xl mx-auto text-white h-full px-4">
              <div className="absolute inset-0 -top-1/3 flex items-center justify-center"> {/* now works properly */}
                <div className="flex flex-col gap-8 ">
                  <h2 className="bg-black/35 border border-white/55 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-wide text-center px-8 pt-1 pb-4">
                    {ba.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Banner;
