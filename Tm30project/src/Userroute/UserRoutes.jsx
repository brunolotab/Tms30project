import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

// function UserRoutes({ component: Component, ...rest }) {

    // const location = useLocation()

    const UserRoutes = ({ component: Component, ...rest }) => {
        let isAuthorized = false;
        const token =  JSON.parse(sessionStorage.getItem("item"));
        if (token !== null) {
            isAuthorized = true;
        }
        return (
            <>
                {isAuthorized ? <div>
                    <Sidebar/>
                    <Outlet />
                </div>  : <Navigate to="/" />};
            </>
        )


        // const user = JSON.parse(sessionStorage.getItem('item'));
        // const user = true;
        // console.log(user);


        //   return (
        //     <>
        //     {user?  <div><Sidebar/><Outlet/></div> : <Navigate to='/Homepage' state={{ from: location}} replace />}
        //     </>
        //   )
    }

   

    export default UserRoutes