import React from 'react';
import { FaPlay } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";


const settings = {
  centerMode: true,
  centerPadding: '10%', // Adjust this based on design
  slidesToShow: 1,
  arrows: false,
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1,
      },
    },
  ],
};

const TestimoninalCarousel = ({ testimonials }) => {
    const navigate = useNavigate()
    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            <Slider {...settings}>
                {testimonials?.map((item, index) => (
                    <div key={index} className="px-4">
                        <div className="md:h-90 shadow-gradient-custom flex flex-col md:flex-row items-center gap-8 bg-white border border-[#0f172a] p-6 shadow-lg">
                            {/* Avatar + Play Button */}
                            <div className="relative shrink-0 sm:w-sm flex items-center justify-center">
                                <div className={`w-50 h-50 rounded-full overflow-hidden relative ${item.bgColor}`}>
                                    <img
                                        src={item.videoThumbnail}
                                        alt="avatar"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                    <button className="absolute inset-0 flex items-center justify-center text-white bg-[#0f172a]/80 rounded-full">
                                        <FaPlay size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Quote and Info */}
                            <div className="text-center md:text-left flex-1">
                                {item.companyLogo && (
                                    <img
                                        src={item.companyLogo}
                                        alt="company logo"
                                        className="h-6 mb-2 mx-auto md:mx-0"
                                    />
                                )}
                                <p className="text-xl md:text-3xl font-medium mb-4 leading-tight">
                                    “{item.quote}”
                                </p>
                                <p className="text-slate-700 font-semibold">
                                    {item.name}
                                    {item.title && (
                                        <span className="font-normal"> // {item.title}</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimoninalCarousel;
