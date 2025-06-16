
import { IoClose } from "react-icons/io5";


import React from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
            <div className="bg-white rounded-[20px] w-full max-w-2xl relative shadow-xl overflow-hidden p-5">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl cursor-pointer"
                >
                    <IoClose />
                </button>

                {/* Video Container */}
                <div className="w-full h-0 pb-[56.25%] relative mt-5">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        src={videoUrl}
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};





export {
    VideoModal,
}