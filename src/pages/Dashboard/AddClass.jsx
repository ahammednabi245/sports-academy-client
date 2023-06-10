import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddClass = () => {

    const {user} = useContext(AuthContext);


    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        
        
       

        const newClass = { name, photo, instructorName, instructorEmail,  availableSeats,  price, }

        console.log(newClass);

      

    }



    return (
        <div>
            <div>
                <div className=" -mt-[78px] bg-[#e4e4e7]">
                   
                    <form onSubmit={handleAddToy}>


                        <div className='flex flex-col justify-start'>
                            <div className="form-control w-full ">
                                <label className="label label-text">Class Name
                                </label>
                                <label className="">
                                    <input type="text" name="name" placeholder="Class Name" className="input input-bordered   w-full" />
                                </label>
                            </div>

                            <div className="mb-8">
                                <div className="form-control w-full ">
                                <label className="label label-text">Class Image
                                </label>
                                    <label className="">
                                        <input type="text" name="photo" placeholder="Class Image" className="input input-bordered  w-full" />
                                    </label>
                                </div>
                            </div>

                          


                            <div className="form-control w-full ">
                            <label className="label label-text">Instructor Name
                                </label>
                                <label className="">
                                    <input type="text" name="instructorName" defaultValue={user?.displayName} readOnly placeholder="Instructor Name" className="input input-bordered  w-full" />
                                </label>
                            </div>

                            <div className="form-control w-full ">
                            <label className="label label-text">Instructor Email
                                </label>
                                <label className="">
                                    <input type="email" name="instructorEmail" defaultValue={user?.email} readOnly placeholder="Instructor Email" className="input input-bordered  w-full" />
                                </label>
                            </div>


                            <div className="form-control w-full ">
                            <label className="label label-text">Available Seats
                                </label>
                                <label className="">
                                    <input type="number" name="availableSeats" placeholder="Available Seats" className="input input-bordered  w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full ">
                            <label className="label label-text">Price
                                </label>
                                <label className="">
                                    <input type="number" name="price" placeholder="Price" className="input input-bordered  w-full" />
                                </label>
                            </div>
                            
                            <div className='mx-56 mb-8'>
                                <input type="submit" value="Add a Class" className="btn btn-wide  bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;