import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade, Slide } from 'react-awesome-reveal';


const PopularInstructorsCard = ({ instructors }) => {
    AOS.init();
    const { instructorsImage, instructorName, department } = instructors;

    return (
        <div>
            <div className='' data-aos="zoom-in-up">
                <img className='h-[200px] w-[400px]' src={instructorsImage} alt="" />
                <div className="badge bg-[#0f2248] opacity-80 border-none h-[28px] text-white hover:bg-[#0b1b3c] absolute right-0 mr-3 -mt-9 px-4">
                    <Slide>
                        <Fade delay={1e3} cascade damping={1e-1} className='py-2'><span>{department}</span> </Fade>
                        <Fade delay={1e3} cascade damping={1e-1} className='text-[16px]'>
                            {instructorName}
                        </Fade>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;
