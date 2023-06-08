import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PopularClassesCard.css';

const PopularClassesCard = ({ subject }) => {
    AOS.init();
    const { classPicture, numberOfStudents } = subject;

    return (
        <div>
            <div className='' data-aos="zoom-in">
                <img className='h-[200px] w-[400px]' src={classPicture} alt="" />
                <div className="badge bg-[#0f2248] opacity-80 border-none h-[28px] text-white hover:bg-[#0b1b3c] absolute right-0 mr-3 -mt-9 px-4">
                    <p className='py-2'>Enrolled Students: {numberOfStudents}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;
