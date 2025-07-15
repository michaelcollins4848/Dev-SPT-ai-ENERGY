import React from "react";

import img from '../../../assets/images/teamimage1.JPG'
import img2 from '../../../assets/images/teamimage2.JPG'
import img3 from '../../../assets/images/teamimage3.JPG'
import img4 from '../../../assets/images/teamimage4.JPG'
import img5 from '../../../assets/images/teamimage5.JPG'
import img6 from '../../../assets/images/teamimage6.JPG'
import img7 from '../../../assets/images/teamimage7.JPG'
import img8 from '../../../assets/images/teamimage8.JPG'
const topRowImages = [
    img,
    img2,
    img3,
    img4,
    img5,
];

const bottomRowImages = [
    img6,
    img7,
    img8,
    img4,
    img3,
];

const ImageGallery = () => {
    return (
        <div className="p-4 space-y-4">
            {/* Top Row - Scrolls Left to Right */}
            <div className="overflow-hidden">
                <div className="flex flex-nowrap animate-slide space-x-4 w-max">
                    {[...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages].map((src, index) => (
                        <img
                            key={`top-${index}`}
                            src={src}
                            alt={`Top ${index}`}
                            className="w-90 h-70 object-cover border border-[#0f172a] shadow-md"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Row - Scrolls Right to Left */}
            <div className="overflow-hidden">
                <div className="flex flex-nowrap animate-slide space-x-4 w-max">
                    {[...bottomRowImages, ...bottomRowImages, ...bottomRowImages, ...bottomRowImages].map((src, index) => (
                    <img
                        key={`bottom-${index}`}
                        src={src}
                        alt={`Bottom ${index}`}
                        className="w-90 h-70 object-cover border border-[#0f172a] shadow-md"
                    />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
