import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const handleAddClass = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const classPicture = form.classPicture.files[0];
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;

        const newClass = {
            name,
            instructorName,
            instructorEmail,
            availableSeats,
            price,
        };

        const formData = new FormData();
        formData.append('image', classPicture);

        try {
            const imgResponse = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });
            const imgData = await imgResponse.json();

            if (imgData.success) {
                const imgURL = imgData.data.display_url;
                const newItem = { ...newClass, classPicture: imgURL };

                axiosSecure
                    .post('/classes', newItem)
                    .then((response) => {
                        console.log(response.data);
                        if (response.data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Your Class Added Successfully',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div>
                <div className="-mt-[78px] bg-[#e4e4e7]">
                    <form onSubmit={handleAddClass}>
                        <div className="flex flex-col justify-start">
                            <div className="form-control w-full">
                                <label className="label label-text">Class Name</label>
                                <label className="">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Class Name"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            <div className="mb-8">
                                <div className="form-control w-full">
                                    <label className="label label-text">Class Image</label>
                                    <label className="">
                                        <input
                                            type="file"
                                            name="classPicture"
                                            placeholder="Class Image"
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <label className="label label-text">Instructor Name</label>
                                <label className="">
                                    <input
                                        type="text"
                                        name="instructorName"
                                        defaultValue={user?.displayName}
                                        readOnly
                                        placeholder="Instructor Name"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label label-text">Instructor Email</label>
                                <label className="">
                                    <input
                                        type="email"
                                        name="instructorEmail"
                                        defaultValue={user?.email}
                                        readOnly
                                        placeholder="Instructor Email"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label label-text">Available Seats</label>
                                <label className="">
                                    <input
                                        type="number"
                                        name="availableSeats"
                                        placeholder="Available Seats"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label label-text">Price</label>
                                <label className="">
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Price"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            <div className="mx-56 mb-8">
                                <input
                                    type="submit"
                                    value="Add a Class"
                                    className="btn btn-wide bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;
