import React from 'react';
import useInstructors from '../../hooks/useInstructors';

const Instructors = () => {
    const [instructors, loading] = useInstructors();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3  w-full my-16">
            {loading ? (
                <div className="flex justify-center items-center ">
                    <p className="loading loading-spinner text-[#0f2248] loading-lg  
                    lg:ml-[600px] ml-3 my-[200px]"></p>
                </div>
            ) : (
                instructors.map((instructor) => (
                    <div key={instructor._id}>
                        <div className="card card-compact my-4 w-96 bg-base-100 shadow">
                            <figure>
                                <img className='w-[300px] h-[200px] rounded-md' src={instructor.instructorsImage} alt={instructor.instructorName} />
                            </figure>
                            <div className="card-body mx-8 my-3">
                                <h2 className="card-title ">{instructor.instructorName}</h2>
                                <p>Email: <a href={`mailto:${instructor.instructorEmail}`}><span className='text-blue-600 hover:link'>{instructor.instructorEmail}</span></a></p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Instructors;
