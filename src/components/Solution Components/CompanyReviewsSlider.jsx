import React from 'react';
import { IoStar } from "react-icons/io5";

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

const CompanyReviewsSlider = ({ dataCompany }) => {
    const navigate = useNavigate()
    return (
        <div className="py-12 px-4">
            <Slider {...settings}>
                {dataCompany?.map((item, index) => (
                    <div key={index} className="px-4">
                        <div className="md:h-90 shadow-gradient-custom flex flex-col  items-center justify-center gap-8 bg-white border border-[#0f172a] p-6 shadow-lg">
                            {item.companyLogo && (
                                <img
                                    src={item.companyLogo}
                                    alt="company logo"
                                    className="h-10 mb-2 mx-auto md:mx-0"
                                />
                            )}
                            <p className="text-xl md:text-2xl text-center font-medium mb-4 leading-snug">
                                “{item.quote}”
                            </p>
                            <p className="text-slate-700 font-semibold">
                                {item.name}
                                {item.title && (
                                    <span className="font-normal"> // {item.title}</span>
                                )}
                            </p>
                            <div className='flex items-center justify-center gap-2'>
                                <IoStar color='#fce306' size={30}/>
                                <IoStar color='#fce306' size={30}/>
                                <IoStar color='#fce306' size={30}/>
                                <IoStar color='#fce306' size={30}/>
                                <IoStar color='#fce306' size={30}/>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CompanyReviewsSlider;
