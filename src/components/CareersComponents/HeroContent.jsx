import { FaPlay } from 'react-icons/fa';

import img from '../../assets/Images/solution.webp'
import { useNavigate } from 'react-router-dom';


const HeroContent = ({ careersContent }) => {
    const navigate = useNavigate()
    return (
        <section className="relative overflow-hidden bgbackgroundimg">
            <div className='max-w-7xl mx-auto sm:px-10 sm:py-24 sm:pt-35 px-5 py-24 pt-30 flex flex-col items-center justify-center'>
                <div className="max-w-2xl flex flex-col items-center justify-center">
                    <h6 className='text-xl sm:text-2xl font-bold leading-tight text-center'>Careers</h6>
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-center">
                        {careersContent.heading1}
                        <br />
                        {careersContent.heading2}
                    </h1>
                    <p className="mt-6 lg:text-lg text-center">
                        {careersContent.subheding}
                    </p>
                    <div className="mt-8 flex flex-row sm:flex-row items-start sm:items-center gap-4">
                        <button className="flex items-center gap-2 text-[#0f172a] hover:underline font-semibold">
                            <FaPlay className="text-white bg-[#0f172a] rounded-full p-2 cursor-pointer w-9 h-9" />
                            Hear from our team
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroContent;
