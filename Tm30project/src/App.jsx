import React, { lazy, Suspense } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
// import TmsApp from './TmsApp'
import Merchants from './Pages/Merchants/Merchants'
import Acquires from './Pages/Acquires/Acquires'
// import Dashboard from './Pages/Dashboard/Dashboard'
import Transactions from './Pages/Transactions/Transactions'
import Hsm from './Pages/HSM/Hsm'
import Processors from './Pages/Processors/Processors'
import PrimaryRouting from './Pages/Prirouting/PriRouting'
import SecRouting from './Pages/Secrouting/SecRouting'
import ActionData from './Pages/Secrouting/ActionInformation/ActionData'
import Bin from './Pages/Bin/Bin'
import Logout from './Pages/Logout/Logout'
import ServHealth from './Pages/SerHealth/ServHealth'
import LIcensing from './Pages/License/LIcensing'
import Notification from './Pages/Notification/Notification'
import Settings from './Pages/Settings/Settings'
// import TmsLayout from './TmsLayout'
import Homepage from './Homepage/Homepage'
import Terminals from './Pages/Terminals/Terminals'
import UserRoutes from './Userroute/UserRoutes'
import TmServer1 from './Pages/SerHealth/TmsSever/TmServer1'
import TmServer2 from './Pages/SerHealth/TmsSever/TmSerrver2'
import TmServer3 from './Pages/SerHealth/TmsSever/TmServer3'
import TmServer4 from './Pages/SerHealth/TmsSever/TmServer4'
import TmServer5 from './Pages/SerHealth/TmsSever/TmServer5'
import TmServer6 from './Pages/SerHealth/TmsSever/TmServer6'
// import TmsLayout from './TmsLayout'
const LazyDashbord = lazy(() => import('./Pages/Dashboard/Dashboard'))

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />

        <Route path='/' element={<UserRoutes />} >
          {/* <Route  element={<TmsLayout />} > */}
          <Route path='dashboard' element={
            <Suspense fallback={<h1 className='flex items-center justify-center font-extrabold text-blue-700'>Loading ... </h1>}>
              <LazyDashbord />
            </Suspense>
          } />
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
          <Route path='Server-Health' element={<ServHealth />} >
            <Route path='/Server-Health/' element={<TmServer1/>} />
            {/* <Route path='/Server-Health/TmServer2' element={<TmServer2/>} />
            <Route path='/Server-Health/TmServer3' element={<TmServer3/>} />
            <Route path='/Server-Health/TmServer4' element={<TmServer4/>} />
            <Route path='/Server-Health/TmServer5' element={<TmServer5/>} />
            <Route path='/Server-Health/TmServer6' element={<TmServer6/>} /> */}
          </Route>


          <Route path='licencing' element={<LIcensing />} />
          <Route path='Notification-Setting' element={<Notification />} />
          <Route path='setting' element={<Settings />} />
        </Route>
        {/* </Route> */}
      </Route>
    )
  )


  return (<RouterProvider router={router} />)



}

export default App

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route index element={<Homepage />} />

//       <Route path='/' element={<TmsLayout />} >
//         <Route path='dashboard' element={<Dashboard />} />
//         <Route path='Acquires' element={<Acquires />} />

//         <Route path='Merchants' element={<Merchants />} />
//         {/* <Route path='Merchant/:id' element= {<Merchants1james/>}/> */}
//         <Route path='Terminals' element={<Terminals />} />
//         <Route path='Transactions' element={<Transactions />} />
//         <Route path='HSM' element={<Hsm />} />
//         <Route path='Processors' element={<Processors />} />
//         <Route path='Primary-Routing' element={<PrimaryRouting />} />
//         <Route path='Secondary-Routing' element={<SecRouting />} />
//         <Route path='ActionData/:id' element={<ActionData />} />

//         <Route path='Bin' element={<Bin />} />
//         <Route path='logout' element={<Logout />} />
//         <Route path='Server-Health' element={<ServHealth />} />
//         <Route path='licencing' element={<LIcensing />} />
//         <Route path='Notification-Setting' element={<Notification />} />
//         <Route path='setting' element={<Settings />} />
//       </Route>
//     </Route>
//   )
// )


// return <RouterProvider router={router} />
// }

// export default App
