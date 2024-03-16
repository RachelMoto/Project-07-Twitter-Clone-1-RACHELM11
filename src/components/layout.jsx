import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebare from './Sidebare';
import Trend from './Trend';
import { TweetProvider } from '../models/TweetContext';

function Layout() {
    return (
        <>
        <TweetProvider>
            <Sidebare />
            <div className='page-main'>
            <Outlet />
            </div>
            <Trend />
         </TweetProvider>
        </>
    );
}

export default Layout;