import React from "react";

import img from '../../assets/Images/teamember1.webp'

const teamMembers = [
    {
        name: "Shawn Lankton",
        title: "Chief Executive Officer",
        image: img,
    },
    {
        name: "Erika Brookes",
        title: "Chief Marketing Officer",
        image: img,
    },
    {
        name: "Trey Simonton",
        title: "Chief Sales Officer",
        image: img,
    },
    {
        name: "Dan Flanigan",
        title: "Chief Product Officer",
        image: img,
    },
    {
        name: "Dan Behringer",
        title: "Chief Customer Officer",
        image: img,
    },
];

const TeamMembers = () => {
    return (
        <section className="px-6 py-20 max-w-7xl mx-auto bg-white">
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                Meet Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-15 mb-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer text-start p-4 transition transform hover:scale-105 hover:border border-[#0f172a]"
                    >
                        <div className="w-full  overflow-hidden flex items-center justify-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="h-full object-contain"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-bold group-hover:text-blue-600 group-hover:underline">{member.name}</h3>
                        <p className="text-sm text-gray-700 font-[400]">{member.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMembers;
