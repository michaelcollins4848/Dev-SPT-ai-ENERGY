import React from 'react';
// import logo1 from "../../assets/logo/american-quartz-thumbnail-logo.png";
import logo2 from "../../assets/logo/caoliforinia.png";
import logo3 from "../../assets/logo/ch.png";
import logo4 from "../../assets/logo/dividend.png";
import logo5 from "../../assets/logo/eastwestbank.png";
import logo6 from "../../assets/logo/goodleap.png";
import logo7 from "../../assets/logo/gotion.png";
import logo8 from "../../assets/logo/mosaic.png";
import logo9 from "../../assets/logo/rosewood.png";
import logo10 from "../../assets/logo/seia.png";
// import sps from "../../assets/logo/Starcharge.png";
import startcharge from "../../assets/logo/starcharge.png";
import UWest from "../../assets/logo/UW.png";
import voltronic from "../../assets/logo/VP.png"
// import ibm from "../../assets/logo/logo1.png"

const logos = [logo2, logo3, logo4, logo5, logo6, logo7,logo8,logo9,logo10,startcharge,UWest,voltronic];


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
