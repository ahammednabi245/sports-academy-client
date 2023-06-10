import React from 'react';
import useEnrolledClasses from '../../hooks/useEnrolledClasses';

const MyEnrolledClasses = () => {

    const [enrolledClass,  ] = useEnrolledClasses();
    

    return (
        <div>


            <div>
                
                      <div className="overflow-x-auto ">
                        <table className="table table-xs">
                            <thead className="font-semibold bg bg-[#0f2248] text-white h-[50px]">
                                <tr className="text-center text-lg">
                                    <th className="w-[20%]">Image</th>
                                    <th className="w-[20%]">Name</th>
                                    <th className="w-[20%]">Instructor Name</th>
                                    <th className="w-[20%]">Price</th>
                                    <th className="w-[20%]">Available seats</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {enrolledClass.map((enrolled) => (
                                    <tr key={enrolled._id} className="text-center text-lg">
                                        <td>
                                            <img
                                                className="w-[100%] p-4 rounded-[30px]"
                                                src={enrolled.classPicture}
                                                alt=""
                                            />
                                        </td>
                                        <td className="text-[16px]">{enrolled.name}</td>
                                        <td className="text-[16px]">{enrolled.instructorName}</td>
                                        <td className="text-[16px]">{enrolled.price}</td>
                                        <td className="text-[16px]">{enrolled.availableSeats}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            
            </div>



        </div>
    );
};

export default MyEnrolledClasses;