import React from 'react';

import ibm from "../../assets/logo/old/1.png"
import ucr from "../../assets/logo/old/2.png"
import logo2 from "../../assets/logo/old/3.png"; 
import logo3 from "../../assets/logo/old/4.png";
import logo4 from "../../assets/logo/old/5.png";
import logo5 from "../../assets/logo/old/6.png";
import logo6 from "../../assets/logo/old/7.png";
import logo7 from "../../assets/logo/old/8.png";
import logo8 from "../../assets/logo/old/9.png";
import logo9 from "../../assets/logo/old/10.png";
import logo10 from "../../assets/logo/old/11.png";
// import sps from "../../assets/logo/Starcharge.png";
import startcharge from "../../assets/logo/old/12.png";
import UWest from "../../assets/logo/old/13.png";
import voltronic from "../../assets/logo/old/15.png"

const logos = [ucr,ibm,logo2, logo3, logo4, logo5, logo6, logo7,logo8,logo9,logo10,startcharge,UWest,voltronic];

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
                            className="inline-block h-40 mx-8 grayscale hover:grayscale-0 transition duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompaniesSlider;
