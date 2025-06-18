import React from 'react';
import { MdEnergySavingsLeaf } from "react-icons/md";
import { MdElectricMeter } from "react-icons/md";
import { IoIosCalculator } from "react-icons/io";
import icons from "../../assets/Images/iconss.png"

const CalculatorSection = ({ calculatorContent }) => {
    return (
        <section className="py-20 px-4 text-center bgbackgroundimg">
            {/* Icons */}
            <div className="flex justify-center items-center gap-2 mb-8">
                {/* <MdEnergySavingsLeaf size={60} color='#0f172a' />
                <MdElectricMeter size={60} color='#0f172a' />
                <IoIosCalculator size={60} color='#0f172a' /> */}
              <img src={icons} alt="icons" className="w-120 h-60" />

            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold mb-10 leading-snug">
               {calculatorContent.heading1} <br className="hidden md:block" /> {calculatorContent.heading2}
            </h2>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                {calculatorContent.btn}
            </button>
        </section>
    );
};

export default CalculatorSection;
