import React from 'react';
import logo1 from "../../assets/logo/american-quartz-thumbnail-logo.png";
import logo2 from "../../assets/logo/california-ssa.png";
import logo3 from "../../assets/logo/choicehotels.jpeg";
import logo4 from "../../assets/logo/dividend.png";
import logo5 from "../../assets/logo/EW-Bank.png";
import logo6 from "../../assets/logo/goodlead.png";
import logo7 from "../../assets/logo/gotion.jpeg";
import logo8 from "../../assets/logo/mosaic.png";
import logo9 from "../../assets/logo/rosewood_Logo.png";
import logo10 from "../../assets/logo/seia-logo.webp";
import sps from "../../assets/logo/sps.png";
import startcharge from "../../assets/logo/starcharge.png";
import UWest from "../../assets/logo/UWest.png";
import voltronic from "../../assets/logo/voltronic.webp"
import ibm from "../../assets/logo/logo1.png"

const logos = [logo1,ibm, logo2, logo3, logo4, logo5, logo6, logo7,logo8,logo9,logo10,sps,startcharge,UWest,voltronic];


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
