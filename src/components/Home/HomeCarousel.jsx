import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import your images here
import sloganBackground from "../../assets/Images/spt_round_logo.png"; 
import EMSbackground from "../../assets/Images/ems_icon.png";
import marketBackground from "../../assets/Images/market_icon.png";
import hydrogenBackground from "../../assets/Images/hydrogen_icon.png"; 

const slides = [
  /*{
    type: "slogan",
    bg: sloganBackground,
    headline: "Smarter Energy. Simpler Future.",
    subtext: "SPT is redefining the way the world powers its future.",
    button: null,
  },*/
  {
    type: "product",
    image: EMSbackground,
    title: "SPT Energy Management System",
    description: <p>
                  Intelligent AI for controlling energy flow in real time.
                  <br /> <br />
                  Our system dynamically monitors and optimizes electricity usage across your entire operation—reducing waste, lowering costs, and maximizing reliability. Whether you’re managing a microgrid, a campus, or industrial infrastructure, our platform adapts in real time to changing loads and grid conditions. Gain full visibility and control with data-driven automation designed to help you make smarter, faster energy decisions.
                </p>,
    link: "/product-and-solutions/energy-management-system/overview",
  },
  {
    type: "product",
    image: marketBackground,
    title: "SPT Energy Market Prediction",
    description: <p>Market predictions created by AI for better energy decision making. <br /> <br /> Stay ahead of volatile electricity prices with cutting-edge forecasts powered by machine learning. Our AI analyzes historical trends and real-time market data to deliver actionable insights—so you can optimize operations, reduce costs, and make smarter energy decisions. </p>,
    link: "/product-and-solutions/market-intelligence/overview",
  },
  {
    type: "product",
    image: hydrogenBackground,
    title: "SPT Hydrogen Station Smart Management System",
    description: <p>
                  Intelligent AI for controlling energy flow in real time.
                  <br /> <br />
                  Our platform provides real-time monitoring, predictive maintenance, and intelligent energy flow optimization for hydrogen fueling infrastructure. From production to storage to dispensing, the system ensures efficiency, safety, and scalability. Whether for public transit, municipal fleets, or commercial hubs, our solution empowers operators with the tools needed to lead in the clean hydrogen revolution.                </p>,
    link: "/product-and-solutions/hydrogen-management-system/overview",
  },
];

const HomeCarousel = () => {
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
    <div className="relative max-w-[95%] mx-auto h-[750px] overflow-hidden rounded-xl shadow-xl border-4 border-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {slide.type === "slogan" ? (
            <div
              className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-[#0f172a] px-6 text-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">{slide.headline}</h1>
              <p className="text-lg sm:text-2xl max-w-2xl">{slide.subtext}</p>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center bg-white">
              <img src={slide.image} alt={slide.title} className="w-full md:w-1/2 h-full object-contain" />
              <div className="p-10 md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f172a] mb-4">{slide.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{slide.description}</p>
                <button
                  onClick={() => navigate(slide.link)}
                  className="bg-[#0f172a] text-white px-6 py-3 rounded hover:bg-[#1e293b] transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          )}
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

export default HomeCarousel;
