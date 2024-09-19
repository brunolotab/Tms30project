import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// function UserRoutes() {

    // const location = useLocation()

    const UserRoutes = ({ component: Component, ...rest }) => {
        let isAuthorized = false;
        const token =  JSON.parse(sessionStorage.getItem("item"));
        if (token !== null) {
            isAuthorized = true;
        }
        return isAuthorized ? <Outlet /> : <Navigate to="/" />;


        // const user = JSON.parse(sessionStorage.getItem('item'));
        // const user = true;
        // console.log(user);


        //   return (
        //     <>
        //     {user? <Outlet/> : <Navigate to='/Homepage' state={{ from: location}} replace />}
        //     </>
        //   )
    }

    export default UserRoutes