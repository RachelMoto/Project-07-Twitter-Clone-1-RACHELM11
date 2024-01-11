import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebare from './Sidebare';
import Trend from './Trend';

function Layout() {
    return (
        <>
            <Sidebare />
            <div className='page-main'>
            <Outlet />
            </div>
            <Trend />
        </>
    );
}

export default Layout;