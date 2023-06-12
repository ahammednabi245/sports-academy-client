import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Instructors = () => {

  

    const {loading} = useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/instructor')
        return res.data;
    })

    const filteredUsers = users.filter(instructor => instructor.role == "instructor");


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3  w-full my-16">
            {loading ? (
                <div className="flex justify-center items-center ">
                    <p className="loading loading-spinner text-[#0f2248] loading-lg  
                    lg:ml-[600px] ml-3 my-[200px]"></p>
                </div>
            ) : (
                filteredUsers.map((instructor) => (
                    <div key={instructor._id}>
                        <div className="card card-compact my-4 w-[400px] bg-base-100 shadow-xl">
                            <figure>
                                <img className='w-[300px] h-[200px] rounded-md' src={instructor.photo} alt='' />
                            </figure>
                            <div className="card-body mx-8 my-3">
                                <h2 className="card-title ">{instructor.name}</h2>
                                <p>Email: <a href={`mailto:${instructor.email}`}><span className='text-blue-600 hover:link'>{instructor.email}</span></a></p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Instructors;
