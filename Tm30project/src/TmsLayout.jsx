import React from 'react'
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';

function TmsLayout() {
  const path = window.location.pathname;

  return (
    <div>
        <Sidebar />
        <Outlet/>


    </div>
  )
}

export default TmsLayout