import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useEnrolledClasses from '../../hooks/useEnrolledClasses';


const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClass, setMyClass] = useState([]);
    const [enrolledClass,] = useEnrolledClasses();



    useEffect(() => {
        const fetchMyClass = async () => {
            try {
                const response = await fetch(`http://localhost:5000/myClass/${user?.email}`);
                const data = await response.json();
                setMyClass(data);
            } catch (error) {
                console.error('Error fetching classes:', error);
            }
        };

        fetchMyClass();
    }, [user]);

    return (
        <div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead className="font-semibold bg bg-[#0f2248] text-white h-[50px]">
                            <tr className="text-center text-lg">
                                <th className="w-[200px]">Image</th>
                                <th className="w-[200px]">Name</th>
                                <th className="w-[200px]">Instructor Name</th>
                                <th className="w-[200px]">Instructor Email</th>
                                <th className="w-[200px]">Available Seats</th>
                                <th className="w-[200px]">Enrolled Student</th>
                                <th className="w-[200px]">Price</th>
                                <th className="w-[200px]">Status</th>
                                <th className="w-[200px]">Feedback</th>
                                <th className="w-[200px]">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myClass.map((myClass) => (
                                <tr key={myClass._id} className="text-center text-lg">

                                    <td>
                                        <img className="" src={myClass.classPicture} alt="" />
                                    </td>
                                    <td className="text-[16px]">{myClass.name}</td>
                                    <td className="text-[16px]">{myClass.instructorName}</td>
                                    <td className="text-[16px]">{myClass.instructorEmail}</td>
                                    <td className="text-[16px]">{myClass.availableSeats}</td>
                                    <td className="text-[16px]">{enrolledClass.length || 0}</td>
                                    <td className="text-[16px]">{myClass.price}</td>
                                    <td className="text-[16px]">{myClass.status}</td>
                                    <td>
                                        <Link to={`/dashboard/feedback/${myClass._id}`}>
                                            <button
                                                className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]"
                                                disabled={myClass.status === 'pending' || myClass.status === 'Approved'}
                                            >
                                                Feedback
                                            </button>

                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/update/${myClass._id}`}>
                                            <button className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;
