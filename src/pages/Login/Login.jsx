import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='flex justify-center mt-28 '>
                <form className='bg-slate-500 ' onSubmit={handleSubmit(onSubmit)}>
                    <div className='px-10 py-7'>
                        <div className='my-4'>
                            <label className='text-red-800 text-5xl'>Email</label>
                            <input className='border h-5 w-96 ' {...register("email", { required: true })} placeholder="Email" />
                        </div>
                        <div className='my-4'>
                            <label>Password</label>
                            <input className='border w-96 ' type="password" {...register("password", { required: true })} placeholder="Password" />
                        </div>
                        <div className='my-4'>
                            <p> Don't Have an Account? <Link to="/register" className='link text-[#1cb3fe]  text-lg'>Register</Link></p>
                        </div>
                        <div className='my-4'>
                            <input className='border w-96' type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
