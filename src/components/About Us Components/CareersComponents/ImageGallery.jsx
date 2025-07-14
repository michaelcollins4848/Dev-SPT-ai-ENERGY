import React from "react";

import img from '../../../assets/images/teamimage1.JPG'
import img2 from '../../../assets/images/teamimage2.JPG'
import img3 from '../../../assets/images/teamimage3.JPG'
import img4 from '../../../assets/images/teamimage4.JPG'

const topRowImages = [
    img,
    img2,
    img3,
    img4,
    img,
];

const bottomRowImages = [
    img,
    img,
    img,
    img,
    img,
];

const ImageGallery = () => {
    return (
        <div className="p-4 space-y-4">
            {/* Top Row - Scrolls Left to Right */}
            <div className="overflow-hidden">
                <div className="flex scroll-left animate-slide space-x-4">
                    {[...topRowImages, ...topRowImages].map((src, index) => (
                        <img
                            key={`top-${index}`}
                            src={src}
                            alt={`Top ${index}`}
                            className="w-70 h-50 object-cover border border-[#0f172a] shadow-md"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Row - Scrolls Right to Left */}
            <div className="overflow-hidden">
                <div className="flex scroll-right animate-slide space-x-4">
                    {[...bottomRowImages, ...bottomRowImages].map((src, index) => (
                        <img
                            key={`bottom-${index}`}
                            src={src}
                            alt={`Bottom ${index}`}
                            className="w-70 h-50 object-cover border border-[#0f172a] shadow-md"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
