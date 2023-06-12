import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Dashboard = () => {

  

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div className='px-10  bg-white'>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content my-3 overflow-x-auto">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c] drawer-button lg:hidden">Open drawer</label>
                        <Outlet ></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}

                            {isAdmin ? <>
                                <li><Link to="/dashboard/manageClasses"><button className='my-3 btn bg-[#0f2248] btn-wide border-none text-white hover:bg-[#0b1b3c]'>Manage Classes</button></Link></li>

                                <li><Link to="/dashboard/manageUsers"><button className='my-3 btn bg-[#0f2248] btn-wide border-none text-white hover:bg-[#0b1b3c]'>Manage Users</button></Link></li>

                            </> : <>
                                {isInstructor ? <>
                                    <li><Link to="/dashboard/addClass"><button className='my-3 btn bg-[#0f2248] btn-wide border-none text-white hover:bg-[#0b1b3c]'>Add a class</button></Link></li>

                                    <li><Link to="/dashboard/myClass"><button className='my-3 btn bg-[#0f2248] btn-wide border-none text-white hover:bg-[#0b1b3c]'>My  class</button></Link></li>

                                </> : <>
                                    <li ><Link to="/dashboard/selectedClasses"><button className='my-3 btn btn-wide bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]'>My Selected Classes</button></Link></li>

                                    <li><Link to="/dashboard/enrolledClasses"><button className='my-3 btn btn-wide bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]'>My Enrolled Classes</button></Link></li>

                                    <li><Link to="/dashboard/paymentHistory"><button className='my-3 btn btn-wide bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]'>My Payment History</button></Link></li>

                                </>}



                            </>}





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