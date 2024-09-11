
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
// import Sidebar from './Components/Sidebar'
// import Homepage from './Homepage/Homepage'
import TmsApp from './TmsApp'
import Merchants from './Pages/Merchants/Merchants'
import Acquires from './Pages/Acquires/Acquires'
import Dashboard from './Pages/Dashboard/Dashboard'
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
import TmsLayout from './TmsLayout'
import Homepage from './Homepage/Homepage'
import Terminals from './Pages/Terminals/Terminals'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />

        <Route path='/' element={<TmsLayout />} >
          <Route path='dashboard' element={<Dashboard />} />
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
        </Route>
      </Route>
    )
  )

  // return (
  // <>
  {/* <Homepage/> */ }
  {/* <TmsApp /> */ }

  //</>
  // )
  return <RouterProvider router={router} />
}

export default App
