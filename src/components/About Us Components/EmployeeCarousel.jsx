import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import your images here
import michael from "../../assets/Images/michaelPhoto.png"; 
import ankit from "../../assets/Images/ankitPhoto.png";
import silu from "../../assets/Images/LuPhoto.jpg";
import jenny from "../../assets/Images/jennyPhoto.png"; 
import sky from "../../assets/Images/skyPhoto.png";

const slides = [
  {
    type: "person",
    image: michael,
    title: "Michael Collins",
    description: <p>
                  Artificial Intelligence and Machine Learning Engineer
                  <br /> <br />
                  Michael Collins is an AI and Machine Learning Engineer at SPT AI Energy Lab, where he designs and deploys intelligent models for real-time energy optimization and market forecasting. His work focuses on building scalable, data-driven systems that enhance grid reliability and help customers make smarter, cost-effective energy decisions.
                </p>,
    link: "/product-and-solutions/energy-management-system/overview",
  },
  {
    type: "person",
    image: ankit,
    title: "Ankit Malhotra",
    description: <p>Business Analyst <br /> <br /> Ankit Malhotra is a Business Analyst at SPT AI Energy Lab, where he bridges technical insights with strategic business goals. He focuses on data-driven decision making, helping align product development with market needs and client success.</p>,
    link: "/product-and-solutions/market-intelligence/overview",
  },
  {
    type: "person",
    image: jenny,
    title: "Jenny Zhang",
    description: <p>
                  VP of Sales and Marketing
                  <br /> <br />
                  Jenny Zhang is the VP of Sales and Marketing at SPT AI Energy Lab, where she leads strategic outreach and client engagement. She drives brand growth and market expansion through innovative campaigns and strong customer relationships.                 
                  </p>,
    link: "/product-and-solutions/hydrogen-management-system/overview",
  },
  {
    type: "person",
    image: silu,
    title: "Silu Ma",
    description: <p>
                  Data Analyst Intern
                  <br /> <br />
                  Silu Ma is a Data Analyst Intern at SPT AI Energy Lab, where she contributes to data-driven research and analytics to support innovative energy solutions. With a background in Math-CS from UCSD, Silu focuses on data preprocessing, visualization, and statistical modeling to uncover actionable insights from complex datasets.
                  </p>,
    link: "/product-and-solutions/hydrogen-management-system/overview",
  },
  {
    type: "product",
    image: sky,
    title: "Sky Wu",
    description: <p>
                  Engineering Lead
                  <br /> <br />
                  Sky Wu is the Engineering Lead at SPT AI Energy Lab, overseeing the development of cutting-edge energy management technologies. He ensures the seamless integration of hardware and software systems that power the lab’s AI-driven solutions.
                  </p>,
    link: "/product-and-solutions/hydrogen-management-system/overview",
  },
];

const EmployeeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Slide every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative max-w-[100%] mx-auto h-[400px] overflow-hidden shadow-xl border-t-4 border-b-4 border-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {(
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center bg-white">
              <img src={slide.image} alt={slide.title} className="w-90 h-90 object-contain rounded-full" />
              <div className="p-10 md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f172a] mb-4">{slide.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{slide.description}</p>
                
              </div>
            </div>
          )}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current ? "bg-[#0f172a]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-3xl z-20 bg-white bg-opacity-80 p-2 rounded-full shadow"
        >
        <FaChevronLeft />
        </button>
        <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-3xl z-20 bg-white bg-opacity-80 p-2 rounded-full shadow"
        >
        <FaChevronRight />
       </button>
    </div>
  );
};

export default EmployeeCarousel;
