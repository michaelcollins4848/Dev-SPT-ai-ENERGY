import React, { useEffect, useState } from "react";






const BlogSection = ({ tabs, blogs, blogContent }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress >= 100) {
                setProgress(0);
                setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
            } else {
                setProgress((prev) => prev + 1);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [progress, tabs.length]);



    return (
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1a3546] px-6 py-12 text-white">
            {
                blogContent.showprogress &&
                <>
                    <div className='h-70'>
                        <h2 className="text-white border-2 px-4 py-2 inline-block border-white text-lg font-bold mb-8">
                            {blogContent.btn}
                        </h2>
                        <h3 className="md:text-4xl text-2xl font-extrabold leading-tight max-w-3xl cursor-pointer hover:text-[#6e8cd1] transition duration-300 ">
                            {tabs[activeIndex].title}
                        </h3>
                        <p className="font-semibold mt-8 hover:underline cursor-pointer hover:text-[#6e8cd1] transition duration-300">Learn More</p>

                    </div>

                    {/* Tab Selectors */}
                    <div className="mt-10 flex gap-8 text-sm font-semibold">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`cursor-pointer transition-all relative pt-4 border-t-[2px] md:text-lg text-md ${activeIndex === index ? "text-white border-white" : "text-gray-500 border-gray-500"
                                    }`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setProgress(0);
                                }}
                            >
                                {tab.label}
                                {activeIndex === index && (
                                    <div className="absolute left-0 -top-0.5 h-[3px] bg-[#6e8cd1] transition-all duration-300 ease-linear" style={{ width: `${progress}%` }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            }
            {
               !blogContent.showprogress &&

                <h2 className="text-white border-2 px-4 py-2 inline-block border-white text-lg font-bold mb-8">
                    {blogContent.btn}
                </h2>
            }
            <div className="mt-14 flex gap-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="border border-white bg-transparent flex flex-col justify-between cursor-pointer ">
                        <div>
                            <img
                                src={blog.img}
                                alt="thumbnail"
                                className="w-full h-32 object-contain  bg-white p-2"
                            />
                            <div className='group hover:bg-[#0f172a] transition-all p-8'>
                                <p className="text-white text-md italic mb-2 group-hover:text-gray-300">Blogs</p>
                                <h4 className="text-white font-bold md:text-2xl text-xl leading-snug mb-25 group-hover:text-gray-300 group-hover:underline underline-offset-2 transition duration-300">I{blog.title}</h4>
                                <p className="font-semibold text-[#3686fd] group-hover:text-gray-300 transition duration-300 underline underline-offset-2 cursor-pointer">
                                    Read more
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                blogContent.showbttombtn &&
                <div className="mt-8 text-center">
                    <button className="bg-transparent cursor-pointer text-white font-bold rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#0f172a] hover:underline">
                        See All Resources
                    </button>
                </div>
            }
        </section>
    );
};

export default BlogSection;
