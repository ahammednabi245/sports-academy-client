import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaRegEye, FaRegEyeSlash, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInWithGoogle, signInWithTwitter, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        setError('');

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Login Successfully Done',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
                if (error.code === 'auth/invalid-email') {
                    setError('Your Email is invalid');
                } else if (error.code === 'auth/wrong-password') {
                    setError('Your Password is invalid');
                } else {
                    setError(error.message);
                }
            });
    };

    // Twitter Sign in

    const handleTwitterSignIn = () => {
        signInWithTwitter()
            .then(() => {
                console.log('User signed in with Google');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log('Error signing in with Google:', error);
            });
    };

    // Google Sign in

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log('User signed in with Google');
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {

                    })


                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log('Error signing in with Google:', error);
            });
    };


    return (
        <div>
            <div className='flex justify-center mt-28 mb-10'>
                <form className='bg-zinc-200 shadow-xl rounded-lg flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className='px-10 py-7'>
                        <div>
                            <h1 className='text-center text-4xl font-semibold'>Login</h1>
                            <p className='text-center mt-3 mb-5'>Log In To Access Your Account</p>
                        </div>
                        <div className='my-4'>
                            <label className='text-lg '>Email</label> 
                            <input className={`border p-5 h-[50px] w-[400px] rounded-md ${errors.email ? 'border-red-500' : ''}`} {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <p className="text-red-600">Email is required</p>}

                        </div>
                        <div className='my-4'>
                            <label className='text-lg '>Password</label> 
                            <div style={{ position: 'relative' }}>
                                <input
                                    className={`border p-5 h-[50px] w-[400px] rounded-md ${errors.password ? 'border-red-500' : ''
                                        }`}
                                    type={show ? 'text' : 'password'}
                                    {...register('password', { required: true })}
                                    placeholder='Password'
                                />
                                <p
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setShow(!show)}
                                >
                                    <small className='text-[18px]'>{show ? <FaRegEyeSlash /> : <FaRegEye />}</small>
                                </p>
                            </div>
                            {errors.password && <p className='text-red-600'>Password is required</p>}
                        </div>
                        <div className='my-4'>
                            {error && <p className="text-red-600">{error}</p>}
                        </div>
                        <div className='my-4'>
                            <input className='btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c] w-[400px]' type="submit" value="Login"/>
                        </div>
                        <div className='mt-10 mb-4'>
                            <p className='text-center mt-3 mb-5'>Login with social accounts</p>
                            <div className='flex flex-col gap-6'>
                                <div
                                    onClick={handleTwitterSignIn}
                                    className='btn btn-outline w-[400px] hover:bg-[#0b1b3c] rounded-md cursor-pointer'
                                >
                                    <FaTwitter className="text-[#1da1f2] text-3xl"></FaTwitter>
                                    <p>Twitter</p>
                                </div>
                                <div
                                    onClick={handleGoogleSignIn}
                                    className='btn btn-outline w-[400px] hover:bg-[#0b1b3c] rounded-md cursor-pointer'
                                >
                                    <FcGoogle size={32} />
                                    <p>Google</p>
                                </div>

                            </div>
                        </div>
                        <div className='my-4'>
                            <p>Don't have an account? <Link to="/register" className='link text-[#0b1b3c] font-semibold text-lg'>Register</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
