import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
       
          <div className='px-10'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
            
        </div>
    );
};

export default Main;