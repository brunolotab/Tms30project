import React from 'react'
import Sidebar from './Components/Sidebar'
// import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Acquires from './Pages/Acquires/Acquires'
import Merchants from './Pages/Merchants/Merchants'
import Transactions from './Pages/Transactions/Transactions'
import Processors from './Pages/Processors/Processors'
// import PriRouting from './Pages/Prirouting/PriRouting'
import SecRouting from './Pages/Secrouting/SecRouting'
import Terminals from './Pages/Terminals/Terminals'
import Bin from './Pages/Bin/Bin'
import Logout from './Pages/Logout/Logout'
import Hsm from './Pages/HSM/Hsm'
import Notification from './Pages/Notification/Notification'
import ServHealth from './Pages/SerHealth/ServHealth'
import LIcensing from './Pages/License/LIcensing'
import Settings from './Pages/Settings/Settings'
import PrimaryRouting from './Pages/Prirouting/PriRouting'
import ActionData from './Pages/Secrouting/ActionInformation/ActionData'
import Homepage from './Homepage/Homepage'



function TmsApp() {

  const path = window.location.pathname;

  return (
    <>
      <BrowserRouter>
        {(path === 'Homepage' || path === '/') ? '' : <Sidebar />}
        {/* {path !== 'Homepage' || path !== '/' && <Sidebar />} */}

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='Homepage' element={<Homepage />} />
          <Route path='dashboard' element={<Dashboard />} />
          {/* <Route path='dashboard' element={<Dashboard />} /> */}
          <Route path='Acquires' element={<Acquires />} />

          <Route path='Merchants' element={<Merchants />} />
          {/* <Route path='Merchant/:id' element= {<Merchants1james/>}/> */}
          <Route path='Terminals' element={<Terminals />} />
          <Route path='Transactions' element={<Transactions />} />
          <Route path='HSM' element={<Hsm />} />
          <Route path='Processors' element={<Processors />} />
          <Route path='Primary-Routing' element={<PrimaryRouting />} />
          <Route path='Secondary-Routing' element={<SecRouting />} />
          <Route path='ActionData/:id' element={<ActionData />} />

          <Route path='Bin' element={<Bin />} />
          <Route path='logout' element={<Logout />} />
          <Route path='Server-Health' element={<ServHealth />} />
          <Route path='licencing' element={<LIcensing />} />
          <Route path='Notification-Setting' element={<Notification />} />
          <Route path='setting' element={<Settings />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default TmsApp