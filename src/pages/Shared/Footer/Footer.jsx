import React, { useState } from 'react';
import logo from '../../../assets/D-sport logo.png'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  IoLocationOutline, IoNewspaperOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {  TfiEmail } from "react-icons/tfi";
import { BiTime } from "react-icons/bi";
import { TbLicense } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";


const Footer = () => {
    const [email, setEmail] = useState('');

   
    const notify = () => {
        if (email.trim() === '') {
            toast.error("Please Enter Your Email");
        }
        else{
            toast.success("Thank You For your Subscription");
            setEmail(' ');
        }
    } 

   
    const handleReceived = event => {
        setEmail(event.target.value);
    };


    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <Link to="/"> <img className="w-[200px]" src={logo} alt="" /></Link>
                    <p className='-mt-4 font-medium'>Providing quality education since 2016</p>
                </div>
                <div>
                    <span className="footer-title">All Contacts </span>
                    <a className="link link-hover flex justify-center items-center gap-2 "> <span className='text-lg'><IoLocationOutline></IoLocationOutline></span> 111 8th Ave, New York U.S.A</a>
                    <a className="link link-hover flex justify-center items-center gap-2"> <span className='text-lg'><BsTelephone></BsTelephone></span> Office +1-202-555-0153</a>
                    <a className="link link-hover flex justify-center items-center gap-2"> <span className='text-lg'><TfiEmail></TfiEmail></span> info@sportsacademys.com</a>
                    <a className="link link-hover flex justify-center items-center gap-2"><span className='text-lg'><BiTime></BiTime></span> 08 am - 06 pm Sunday closed</a>
                </div>
           
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover flex justify-center items-center gap-2"> <span className='text-lg'><TbLicense></TbLicense></span> Govt License</a>
                    <a className="link link-hover flex justify-center items-center gap-2"> <span className='text-lg'><IoNewspaperOutline></IoNewspaperOutline></span> Academic Rules </a>
                    <a className="link link-hover flex justify-center items-center gap-2"> <span className='text-lg'><MdOutlinePolicy></MdOutlinePolicy></span> Privacy policy</a>
                   
                </div>
                <div>
                    <span className="footer-title">For Update Information</span>
                    <div className="form-control lg:w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="email" placeholder="Your Email" value={email}
                                onChange={handleReceived} className="input input-bordered w-full pr-16" required/>
                            <button onClick={notify} className="btn bg-[#0f2248]  text-white
                     hover:bg-[#0b1b3c] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                     <ToastContainer />
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                <div>
                    <p>Copyright © 2023 - All rights reserved by Sports Academy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;