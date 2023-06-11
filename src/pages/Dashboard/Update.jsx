import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { user } = useContext(AuthContext);
  const [control, setControl] = useState(false);
  const { id } = useParams(); 

  const [axiosSecure] = useAxiosSecure();

  const handleUpdateClass = (event) => {
    event.preventDefault();
    const updatedClass = {
      _id: id, 
      name: event.target.name.value,
      classPicture: event.target.classPicture.value,
      instructorName: event.target.instructorName.value,
      instructorEmail: event.target.instructorEmail.value,
      price: event.target.price.value,
      availableSeats: event.target.availableSeats.value,
    };

    axiosSecure
      .put(`/updateMyClass/${updatedClass._id}`, updatedClass)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Class Updated Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          setControl(!control);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error updating class:', error);
      });
  
    };

    return (
        <div>
            
            <div className="-mt-[78px] bg-[#e4e4e7]">
                <form onSubmit={handleUpdateClass}>
                    <div className="flex flex-col justify-start">
                        <div className="form-control w-full">
                            <label className="label label-text">Class Name</label>
                            <input
                                type="text"
                                name="name"
                              
                                placeholder="Class Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label label-text">Class Image</label>
                                <input
                                    type="file"
                                    name="classPicture"
                                    
                                    placeholder="Class Image"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label label-text">Instructor Name</label>
                            <input
                                type="text"
                                name="instructorName"
                                defaultValue={user?.displayName}
                                readOnly
                                placeholder="Instructor Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label label-text">Instructor Email</label>
                            <input
                                type="email"
                                name="instructorEmail"
                                defaultValue={user?.email}
                                readOnly
                                placeholder="Instructor Email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label label-text">Available Seats</label>
                            <input
                                type="number"
                                name="availableSeats"
                              
                                placeholder="Available Seats"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label label-text">Price</label>
                            <input
                                type="number"
                                name="price"
                                
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="mx-56 mb-8">
                            <input
                                type="submit"
                                value="Update Class"
                                className="btn btn-wide bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
