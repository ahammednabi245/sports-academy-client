import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div className='px-10 bg-white'>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c] drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><Link to="/dashboard/selectedClasses"><button className='my-3 btn w-full bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]'>My Selected Classes</button></Link></li>

                            <li><Link to="/dashboard/enrolledClasses"><button className='my-3 btn w-full bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]'>My Enrolled Classes</button></Link></li>
                            
                            <li><Link to="/dashboard/paymentHistory"><button className='my-3 btn w-full bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]'>My Payment History</button></Link></li>


                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;