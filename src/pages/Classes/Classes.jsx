import React from "react";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
    const [classes, loading] = useClasses();

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center">
                    <p className="loading loading-spinner text-[#0f2248] loading-lg  my-[200px]"></p>
                </div>
            ) : (
                <div className="overflow-x-auto my-8">
                    <table className="table table-xs">
                        <thead className=" font-semibold bg bg-[#0f2248] text-white h-[50px] ">
                            <tr className="text-center text-lg">
                                <th className="w-[16.67%] ">Image</th>
                                <th className="w-[16.67%]">Name</th>
                                <th className="w-[16.67%]">Instructor Name</th>
                                <th className="w-[16.67%]">Available seats</th>
                                <th className="w-[16.67%]">Price</th>
                                <th className="w-[16.67%]">Select</th>

                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((subject) => (
                                <tr key={subject.id} className="text-center text-lg">
                                    <td className=" " ><img className='w-[100%] p-4 rounded-[30px]' src={subject.classPicture} alt="" /></td>
                                    <td className="text-[16px]" >{subject.name}</td>
                                    <td className="text-[16px]">{subject.instructorName}</td>
                                    <td className="text-[16px]">{subject.availableSeats}</td>
                                    <td className="text-[16px]">{subject.price}</td>
                                    <td ><button className="btn">Select</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Classes;
