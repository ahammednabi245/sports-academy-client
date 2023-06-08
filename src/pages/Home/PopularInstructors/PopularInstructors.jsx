import React from 'react';
import { Bounce, JackInTheBox, } from 'react-awesome-reveal';
import PopularInstructorsCard from '../PopularInstructorsCard/PopularInstructorsCard';
import useInstructors from '../../../hooks/useInstructors';

const PopularInstructors = () => {
    const [PopularInstructors] = useInstructors();
    const popular = PopularInstructors.filter(instructors => instructors.instructorCategory === 'popular');

    return (
        <div>
            <div className='flex justify-center'>
                <div className='mt-12 border-double border-4 hover:border-dotted hover:border-2 w-60 rounded-bl-[100px] rounded-tr-[100px] border-[#0b1b3c] p-7'>
                    <Bounce className='text-center font-semibold text-5xl'>Popular</Bounce>
                    <JackInTheBox className='text-center font-medium text-xl my-4'>Instructors</JackInTheBox>
                </div>
            </div>
            <div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 my-16">
                    {popular.map(instructors => (
                        <PopularInstructorsCard
                            key={instructors._id}
                            instructors={instructors}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;
