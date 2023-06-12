import React, { useState, useEffect } from "react";
import useClasses from "../../hooks/useClasses";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [classes, loading, refetch] = useClasses();
    const [approvedClasses, setApprovedClasses] = useState([]);
    const [deniedClasses, setDeniedClasses] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [axiosSecure] = useAxiosSecure();



    useEffect(() => {
        refetch();
    }, [approvedClasses, deniedClasses, refetch]);

    const handleApprove = async (subject) => {
        try {
            await axiosSecure.put(`/updateClass/${subject._id}`, {
                ...subject,
                status: "Approved",
            });
            setApprovedClasses([...approvedClasses, subject._id]);
            setDeniedClasses([...deniedClasses, subject._id]);
        } catch (error) {
            console.log(error);
        }
    };


    const handleDeny = async (subject) => {
        try {
            await axiosSecure.put(`/updateClass/${subject._id}`, {
                ...subject,
                status: "Denied",
            });
            setDeniedClasses([...deniedClasses, subject._id]);
            setApprovedClasses([...approvedClasses,subject._id]);
        } catch (error) {
            console.log(error);
        }
    };



    const handleFeedbackSubmit = async (id) => {
        try {
            await axiosSecure.post(`/sendFeedback/${id}`, { feedback });
            setFeedback("");
            Swal.fire({
                title: 'Feedback',
                text: 'Your Feedback Successfully Sent',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error);
        }
    };


    return (
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
                                <th className="">Image</th>
                                <th className="">Name</th>
                                <th className="">Instructor Name</th>
                                <th className="">Instructor Email</th>
                                <th className="">Available seats</th>
                                <th className="">Price</th>
                                <th className="">Status</th>
                                <th className="">Approve</th>
                                <th className="">Deny</th>
                                <th className="">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((subject) => (
                                <tr key={subject._id} className="text-center text-lg">
                                    <td>
                                        <img
                                            className="w-[100%] "
                                            src={subject.classPicture}
                                            alt=""
                                        />
                                    </td>
                                    <td className="text-[16px]">{subject.name}</td>
                                    <td className="text-[16px]">{subject.instructorName}</td>
                                    <td className="text-[16px]">{subject.instructorEmail}</td>
                                    <td className="text-[16px]">{subject.availableSeats}</td>
                                    <td className="text-[16px]">{subject.price}</td>
                                    <td className="text-[16px]">{subject.status}</td>
                                    <td>
                                        <button
                                            onClick={() => handleApprove(subject)}
                                            disabled={approvedClasses.includes(subject._id)}
                                            className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]"
                                        >
                                            Approve
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeny(subject)}
                                            disabled={deniedClasses.includes(subject._id)}
                                            className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]"
                                        >
                                            Deny
                                        </button>
                                    </td>
                                    <td>
                                        {/* The button to open modal */}
                                        <label
                                            htmlFor={`my_modal_${subject._id}`}
                                            className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]"
                                        >
                                            Feedback
                                        </label>
                                        <input
                                            type="checkbox"
                                            id={`my_modal_${subject._id}`}
                                            className="modal-toggle"
                                        />
                                        <div className="modal">
                                            <div className="modal-box">

                                                <textarea
                                                    className="w-[100%] h-[200px] text-lg px-4 py-4 border-2 border-[#0b1b3c]"
                                                    value={feedback}
                                                    onChange={(e) => setFeedback(e.target.value)}
                                                    placeholder="Enter your feedback"
                                                />
                                                <button
                                                    onClick={() => handleFeedbackSubmit(subject._id)} className=" btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">
                                                    Submit Feedback
                                                </button>
                                            </div>
                                            <label
                                                className="modal-backdrop"
                                                htmlFor={`my_modal_${subject._id}`}
                                            >
                                                Close
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;
