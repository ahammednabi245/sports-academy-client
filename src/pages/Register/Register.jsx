import React from 'react';
import { useForm } from 'react-hook-form';
import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='flex justify-center mt-28 mb-10'>

                <form className='bg-zinc-200 shadow-xl rounded-lg' onSubmit={handleSubmit(onSubmit)}>

                    <div className='px-10 py-7'>
                        <div>
                            <h1 className='text-center text-4xl font-semibold'>Register</h1>
                            <p className='text-center mt-3 mb-5' >Please Register Your Account</p>
                        </div>
                        <div className='my-4'>
                            <label className=' text-lg mb-12'>Name</label> <br />
                            <input className='border p-5 h-[50px] w-96 rounded-md  ' {...register("Name", { required: true })} placeholder="Name" />

                        </div>
                        <div className='my-4'>
                            <label className=' text-lg mb-12'>Email</label> <br />
                            <input className='border p-5 h-[50px] w-96 rounded-md  ' {...register("email", { required: true })} placeholder="Email" />

                        </div>
                        <div className='my-4'>
                            <label className=' text-lg mb-12'>Password</label> <br />
                            <input className='border p-5 h-[50px] w-96 rounded-md ' type="password" {...register("password", { required: true })} placeholder="Password" />
                        </div>
                        <div className='my-4'>
                            <label className=' text-lg mb-12'>Confirm Password</label> <br />
                            <input className='border p-5 h-[50px] w-96 rounded-md ' type="confirm password" {...register("confirm password", { required: true })} placeholder="Confirm Password" />
                        </div>
                        <div className='my-4'>
                            <label className=' text-lg mb-12'>Photo URL</label> <br />
                            <input className='border p-5 h-[50px] w-96 rounded-md ' type="confirm password" {...register("confirm password", { required: true })} placeholder="Confirm Password" />
                        </div>

                        <div className='my-4'>
                            {/* ToDo: Error or Success Alert */}
                            <h1>Error</h1>
                        </div>

                        <div className='my-4'>
                            <input className=' btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c] w-96' type="submit" />
                        </div>

                        <div className='mt-10 mb-4'>
                            <p className='text-center mt-3 mb-5'>Login with social accounts</p>
                            <div className='flex flex-col gap-6'>
                                <div
                                    // onClick={handleGoogleSignIn}
                                    className=' btn btn-outline w-96 hover:bg-[#0b1b3c] rounded-md cursor-pointer'>
                                    <FcGoogle size={32} />

                                    <p>Google</p>
                                </div>
                                <div
                                    // onClick={handleGoogleSignIn}
                                    className=' btn btn-outline w-96 hover:bg-[#0b1b3c] rounded-md cursor-pointer'>

                                    <FaTwitter className="text-[#1da1f2] text-3xl"></FaTwitter>

                                    <p>Twitter</p>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <p> Already have an account? <Link to="/login" className='link text-[#0b1b3c] font-semibold text-lg'>Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
