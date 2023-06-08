import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Schedule from '../Schedule/Schedule';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
                <Schedule></Schedule>
            </div>
        </div>
    );
};

export default Home;