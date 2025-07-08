import React, { useState } from 'react';
import WebsiteLayout from '../../components/Layout';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const faqData = [
    {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, contact our support within 30 days of your purchase."
    },
    {
        question: "Do you provide customer support?",
        answer: "Yes, we offer 24/7 customer support via chat and email to help resolve your issues quickly and efficiently."
    },
    {
        question: "Can I change my subscription plan later?",
        answer: "Absolutely! You can upgrade or downgrade your plan anytime from your account settings."
    },
    {
        question: "Is my data secure?",
        answer: "We use industry-standard encryption and security practices to ensure your data is always protected."
    }
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const navigate = useNavigate()

    return (
        <WebsiteLayout>
            <div className="min-h-screen px-5 py-12 sm:px-10 sm:py-20 lg:py-25">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold  sm:text-4xl">Frequently Asked Questions</h2>
                        <p className="mt-4 text-gray-600 text-base sm:text-lg">Find answers to the most commonly asked questions below.</p>
                    </div>

                    <div className="space-y-6">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 border border-gray-200"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
                                >
                                    <div className="flex items-center gap-2">
                                        <BsQuestionCircle className="text-blue-600" />
                                        {item.question}
                                    </div>
                                    {activeIndex === index ? (
                                        <FaChevronUp className="text-gray-500" />
                                    ) : (
                                        <FaChevronDown className="text-gray-500" />
                                    )}
                                </button>
                                {activeIndex === index && (
                                    <div className="mt-4 text-gray-600 text-sm sm:text-base">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-gray-700 mb-6">If you can't find the answer you're looking for, feel free to contact our support team anytime.</p>
                        <button
                            onClick={() => navigate('/support/contact-support')}
                            className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

export default FAQs;
