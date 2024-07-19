import React from 'react'
import Sidebar from './Components/Sidebar'
// import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Acquires from './Pages/Acquires/Acquires'
import Merchants from './Pages/Merchants/Merchants'
import Transactions from './Pages/Transactions/Transactions'
import Processors from './Pages/Processors/Processors'
import PriRouting from './Pages/Prirouting/PriRouting'
import SecRouting from './Pages/Secrouting/SecRouting'
import Terminals from './Pages/Terminals/Terminals'
import Bin from './Pages/Bin/Bin'
import Logout from './Pages/Logout/Logout'
import Hsmpg1 from './Pages/HSM/HSMPAGES/Hsmpg1'
import Hsmpg2 from './Pages/HSM/HSMPAGES/Hsmpg2'
import Hsmpg3 from './Pages/HSM/HSMPAGES/Hsmpg3'
import Hsm from './Pages/HSM/Hsm'
// import ContextApiProvider from './ContextApi/ContextApi'

function TmsApp() {
  return (
    <>
      {/* <ContextApiProvider> */}
        <BrowserRouter>
        {/* <Navbar/> */}
       <Sidebar/>
       
       {/* <div style={{display:'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap:'0px', gridAutoRows:'82vh', marginTop:'0px'}}><Sidebar/></div> */}
        <div style={{paddingLeft:'13rem'}}>
        <Routes>
            <Route path='/' element= {<Dashboard/>}/>
            <Route path='Acquires' element= {<Acquires/>}/>
            <Route path='Merchants' element= {<Merchants/>}/>
            <Route path='Terminals' element= {<Terminals/>}/>
            <Route path='Transactions' element= {<Transactions/>}/>
            <Route path='HSM' element= {<Hsm/>}/>
            <Route path='Processors' element= {<Processors/>}/>
            <Route path='PriRouting' element= {<PriRouting/>}/>
            <Route path='SecRouting' element= {<SecRouting/>}/>
            <Route path='Bin' element= {<Bin/>}/>
            <Route path='logout' element= {<Logout/>}/>
            <Route path='Hsmpg1' element= {<Hsmpg1/>}/>
            <Route path='Hsmpg2' element= {<Hsmpg2/>}/>
            <Route path='Hsmpg3' element= {<Hsmpg3/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        {/* </ContextApiProvider> */}
        
    </>
  )
}

export default TmsApp