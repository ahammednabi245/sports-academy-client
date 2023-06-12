import React, { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {
    const [classes, loading, refetch] = useClasses();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToSelectedCourse = (subject) => {
        const { _id, name, classPicture, numberOfStudents, instructorName, availableSeats, price } = subject;

        if (user) {
            const courseDetails = {
                selectedCourseId: _id,
                name,
                classPicture,
                numberOfStudents,
                instructorName,
                availableSeats,
                price,
                email: user.email,
                userName: user.displayName,
            };

            fetch("https://sports-academies-server-nu.vercel.app/selectedCourse", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(courseDetails),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "This Course Added to Your Selected Courses",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "Please login before selecting the course",
                icon: "warning",
                showCancelButton: true,
                iconColor: "#d33",
                confirmButtonColor: "#0f2248",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login now!",
                customClass: {
                    confirmButton: 'btn btn-wide bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c] my-2',
                    cancelButton: 'btn btn-wide bg-[#d33] border-none text-white hover:bg-[#b02a24] my-2'
                  }
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };


    return (
        <div>
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <p className="loading loading-spinner text-[#0f2248] loading-lg lg:-mr-[800px]  my-[200px]"></p>
                    </div>
                ) : (
                    classes.map((subject) => (
                        <div key={subject._id}>
                            <div className={`card  w-[400px] my-4  shadow-xl ${subject.availableSeats <= 0 ? "bg-red-500" : "bg-base-100"}`}>
                           
                                <figure className="px-8 pt-10">
                                    <img className='w-[90%] h-[200px] rounded-md ' src={subject.classPicture} alt="" />
                                </figure>
                                <div className="card-body mx-4 my-3">
                                    <h2 className="card-title ">{subject.name}</h2>
                                    <p className="text-[16px]"> <span className="font-semibold">Instructor Name:</span> {subject.instructorName}</p>
                                    <p className="text-[16px]"> <span className="font-semibold">Available seats:</span> {subject.availableSeats}</p>
                                    <p className="text-[16px]"> <span className="font-semibold">Price:</span> ${subject.price}</p>
                                    <div className="card-actions justify-start">
                                        <button
                                            onClick={() => handleAddToSelectedCourse(subject)}
                                            className="btn bg-[#0f2248] border-none text-white 
                                            hover:bg-[#0b1b3c]"
                                            disabled={subject.availableSeats <= 0}
                                        >
                                            {subject.availableSeats <= 0 ? "No seats available" : "Select"}
                                        </button>



                                    </div>
                                </div>


                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Classes;
