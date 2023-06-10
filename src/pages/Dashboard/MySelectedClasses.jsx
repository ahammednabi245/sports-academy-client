import React from 'react';
import useSelectedClasses from '../../hooks/useSelectedClasses';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {
    const [selected, refetch, loading] = useSelectedClasses();

    

    const handleDelete = (course) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wanted to delete this course!",
            icon: "warning",
            showCancelButton: true,
            iconColor: "#d33",
            confirmButtonColor: "#0f2248",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedCourse/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted',
                                text: 'Your Course has been deleted',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })
    }

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
                                            <button onClick={() => handleDelete(course)} className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">Delete
                                            </button>
                                        </td>
                                        <td>

                                            <Link to={`/dashboard/payment/${course._id}`}>
                                                <button
                                                    className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">
                                                    Pay
                                                </button>
                                            </Link>
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