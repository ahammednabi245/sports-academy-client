import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';


const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://sports-academies-server-nu.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    
    const handleMakeInstructor = user => {
        fetch(`https://sports-academies-server-nu.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead className='font-semibold bg bg-[#0f2248] text-white h-[50px]'>
                        <tr className='text-center text-lg'>
                            <th className='w-[20%]'>Name</th>
                            <th className='w-[20%]'>Email</th>
                            <th className='w-[20%]'>Current Role</th>
                            <th className='w-[20%]'>Make Admin</th>
                            <th className='w-[20%]'>Make Instructor</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, ) => <tr key={user._id} className='text-center text-lg'>
                                <td className="text-[16px]">{user.name}</td>
                                <td className="text-[16px]">{user.email}</td>
                                <td className="text-[16px]">{user.role}</td>
                                <td className="text-[16px]">
                                    <button disabled={user.role === 'admin' } onClick={() => handleMakeAdmin(user)} className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]"> Admin</button>
                                </td>
                                <td className="text-[16px]"> <button disabled={user.role === 'instructor' } onClick={() => handleMakeInstructor(user)} className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">Instructor</button></td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;