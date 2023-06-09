import React from 'react';
import useSelectedClasses from '../../hooks/useSelectedClasses';

const MySelectedClasses = () => {
    const [selected, refetch, loading] = useSelectedClasses();



    return (
        <div>

            <div>
                {loading ? (
                    <div className="flex justify-center items-center">
                        <p className="loading loading-spinner text-[#0f2248] loading-lg  my-[200px]"></p>
                    </div>
                ) : (
                    <div className="overflow-x-auto ">
                        <table className="table table-xs">
                            <thead className="font-semibold bg bg-[#0f2248] text-white h-[50px]">
                                <tr className="text-center text-lg">
                                    <th className="w-[16.67%]">Image</th>
                                    <th className="w-[16.67%]">Name</th>
                                    <th className="w-[16.67%]">Instructor Name</th>
                                    <th className="w-[16.67%]">Price</th>
                                    <th className="w-[16.67%]">Delete</th>
                                    <th className="w-[16.67%]">Pay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selected.map((course) => (
                                    <tr key={course._id} className="text-center text-lg">
                                        <td>
                                            <img
                                                className="w-[100%] p-4 rounded-[30px]"
                                                src={course.classPicture}
                                                alt=""
                                            />
                                        </td>
                                        <td className="text-[16px]">{course.name}</td>
                                        <td className="text-[16px]">{course.instructorName}</td>
                                        <td className="text-[16px]">{course.price}</td>
                                        <td>
                                            <button className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">Delete
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">
                                                Pay
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MySelectedClasses;