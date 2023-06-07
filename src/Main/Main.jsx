import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
       
          <div className='px-10'>
            <NavBar></NavBar>
            <Outlet></Outlet>
          </div>
            
        </div>
    );
};

export default Main;