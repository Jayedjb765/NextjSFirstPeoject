import React from 'react';
import Sidebar from '../../components/shared/Sidebar'
const Dashboardlayout = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <h1>{children}</h1>


        </div>
    );
};

export default Dashboardlayout;