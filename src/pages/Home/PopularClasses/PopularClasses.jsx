import React from 'react';
import useClasses from '../../../hooks/useClasses';
import PopularClassesCard from '../PopularClassesCard/PopularClassesCard';
import { Bounce, JackInTheBox, } from 'react-awesome-reveal';

const PopularClasses = () => {
    const [popularClass] = useClasses();
    const popular = popularClass.filter(subject => subject.class === 'popular');

    return (
        <div>
            <div className='flex justify-center'>
                <div className='mt-12 border-double border-4 hover:border-dotted hover:border-2 w-60 rounded-tl-[100px] rounded-br-[100px] border-[#0b1b3c] p-7'>
                    <Bounce className='text-center font-semibold text-5xl'>Popular</Bounce>
                    <JackInTheBox className='text-center font-medium text-xl my-4'>Classes of students</JackInTheBox>
                </div>
            </div>
            <div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 my-16">
                    {popular.map(subject => (
                        <PopularClassesCard
                            key={subject._id}
                            subject={subject}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;
