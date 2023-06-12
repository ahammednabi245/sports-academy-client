import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { signInWithGoogle,  createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { Name, email, password, confirmPassword, photo } = data;
        setError(' ');

        if (password.length < 6) {
            setError('Your password must be at least 6 characters long.');
            return;
        } else if (password !== confirmPassword) {
            setError('Your password and confirmation password do not match.');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;

               
                updateProfile(createdUser, {
                    displayName: Name,
                    photoURL: photo
                })
                    .then(() => {

                        const saveUser = { name:  createdUser.displayName, email: data.email, photo: createdUser.photoURL, }
                        fetch('https://sports-academies-server-nu.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Your Register Successfully Done',
                                        icon: 'success',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });

                                }
                            })


                    })
                    .catch((error) => {
                        console.log('Error updating user profile:', error);

                    });
            })
            .catch((error) => {
                console.log('Error creating user:', error);
                if (error.message) {
                    setError('Your Email is invalid');
                }

            });
    };

    

    // Google Sign in

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log('User signed in with Google');
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
                fetch('https://sports-academies-server-nu.vercel.app/users', {
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
                <form className='bg-zinc-200 shadow-xl flex flex-col justify-center rounded-lg w-[500px]' onSubmit={handleSubmit(onSubmit)}>
                    <div className='px-10 py-7 '>
                        <div>
                            <h1 className='text-center text-4xl font-semibold'>Register</h1>
                            <p className='text-center mt-3 mb-5'>Please Register Your Account</p>
                        </div>
                        <div className='my-4'>
                            <label className='text-lg '>Name</label>
                            <input className={`border p-5 h-[50px] w-[400px] rounded-md ${errors.Name ? 'border-red-500' : ''}`} {...register("Name", { required: true })} placeholder="Name" />
                            {errors.Name && <p className="text-red-600">Name is required</p>}
                        </div>
                        <div className='my-4'>
                            <label className='text-lg '>Email</label>
                            <input className={`border p-5 h-[50px] w-[400px] rounded-md ${errors.email ? 'border-red-500' : ''}`} {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <p className="text-red-600">Email is required</p>}
                        </div>
                        <div className='my-4'>
                            <label className='text-lg '>Password</label>
                            <div style={{ position: 'relative' }}>
                                <input className={`border p-5 h-[50px] w-[400px] rounded-md ${errors.password ? 'border-red-500' : ''}`} type={show ? 'text' : 'password'} {...register("password", {
                                    required: true,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/

                                })} placeholder="Password" />
                                <p
                                    style={{
                                        position: 'absolute',
                                        right: '40px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setShow(!show)}
                                >
                                    <small className='text-[18px]'>{show ? <FaRegEyeSlash /> : <FaRegEye />}</small>
                                </p>
                            </div>
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Don't Have a Capital Letter Or Don't Have a Special Character</p>}
                            {errors.password && <p className="text-red-600">Password is required</p>}

                        </div>

                        <div className='my-4'>
                            <label className='text-lg '>Confirm Password</label>
                            <div style={{ position: 'relative' }}>
                                <input className={`border p-5 h-[50px] w-[400px] rounded-md ${errors.confirmPassword ? 'border-red-500' : ''}`} type={confirmShow ? 'text' : 'password'} {...register("confirmPassword", { required: true })} placeholder="Confirm Password" />
                                <p
                                    style={{
                                        position: 'absolute',
                                        right: '40px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setConfirmShow(!confirmShow)}
                                >
                                    <small className='text-[18px]'>{confirmShow ? <FaRegEyeSlash /> : <FaRegEye />}</small>
                                </p>
                            </div>
                            {errors.confirmPassword && <p className="text-red-600">Confirm Password is required</p>}
                        </div>
                        <div className='my-4'>
                            <label className='text-lg '>Photo URL</label>
                            <input className={`border p-5 h-[50px] w-[400px] rounded-md ${errors.photo ? 'border-red-500' : ''}`} type="text" {...register("photo", { required: true })} placeholder="Photo URL" />
                            {errors.photo && <p className="text-red-600">Photo URL is required</p>}
                        </div>
                        <div className='my-4'>
                            {error && <p className="text-red-600">{error}</p>}
                        </div>
                        <div className='my-4'>
                            <input className='btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c] w-[400px]' type="submit" value="Register" />
                        </div>
                        <div className='mt-10 mb-4'>
                            <p className='text-center mt-3 mb-5'>Login with social accounts</p>
                            <div className='flex flex-col gap-6'>
                                
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
                            <p> Already have an account? <Link to="/login" className='link text-[#0b1b3c] font-semibold text-lg'>Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
