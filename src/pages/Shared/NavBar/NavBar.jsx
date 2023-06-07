import React, { useContext } from 'react';
import logo from '../../../assets/D-sport logo.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const navItems = <>


        {user?.email ? <>
            <li><Link to="/">Home</Link> </li>
            <li> <Link to="/instructors">Instructors</Link> </li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            

        </>
            : <>
                <li><Link to="/">Home</Link> </li>
                <li> <Link to="/instructors">Instructors</Link> </li>
                <li> <Link to="/classes">Classes</Link> </li>
            </>
        }
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <img className="btn btn-ghost normal-case text-xl" src={logo} alt="" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                {user ? (
                        user.photoURL ? (
                            <img
                                className='rounded-full mr-4'
                                style={{ height: '55px' }}
                                src={user.photoURL}
                                alt={user.displayName}
                                title={user.displayName}
                            />
                        ) : (
                            ''
                            
                        )
                    ) : null}

                    {user ?
                        <button onClick={handleLogOut} className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c]">Logout</button> :
                        <Link to="/login">
                            <button className="btn bg-[#0f2248] border-none text-white
                     hover:bg-[#0b1b3c]">Login</button>
                        </Link>
                    }

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;