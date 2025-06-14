import React from 'react';
import logo1 from "../../assets/Images/logo1.png";
import logo2 from "../../assets/Images/logo2.png";
import logo3 from "../../assets/Images/logo1.png";
import logo4 from "../../assets/Images/logo1.png";
import logo5 from "../../assets/Images/logo2.png";
import logo6 from "../../assets/Images/logo2.png";
import logo7 from "../../assets/Images/logo2.png";



const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];


const CompaniesSlider = ({ showtop, heading }) => {
    return (
        <section className="py-8">
            {showtop &&
                <div className="text-center text-primary text-lg md:text-lg px-4 mb-8 max-w-3xl m-auto">
                    {heading}
                </div>
            }
            <div className="overflow-hidden whitespace-nowrap relative">
                <div className="animate-slide inline-block">
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`logo-${index}`}
                            className="inline-block h-16 mx-8 grayscale hover:grayscale-0 transition duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompaniesSlider;
