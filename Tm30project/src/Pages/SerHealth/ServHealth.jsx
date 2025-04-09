import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import TmServer1 from './TmsSever/TmServer1'
import TmServer4 from './TmsSever/TmServer4'
import TmServer6 from './TmsSever/TmServer6'
import TmServer2 from './TmsSever/TmSerrver2'
// import TmServer3 from './TmsSever/Tmserver3'
import TmServer5 from './TmsSever/TmServer5'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { MdPattern } from 'react-icons/md'
// import ServerWares from './ServWares/ServerWares'
// import ServerPanel from './TmsSever/Folder1TmServer1/ServerPanel'


function ServHealth() {

  // const serverInformation = ['Server Panel', 'Application', 'firewall', 'server loss', 'application loss', 'services', 'alright']

  // const tmsServer = [
  //   'tms server 1',
  //   'tms server 2',
  //   'tms server 3',
  //   'tms server 4',
  //   'tms server 5',
  //   'tms server 6',
  // ]
  
  // const [tabs, setTabs] = useState('tms server 1');
  // const [tab, setTab] = useState('Server Panel');
  // console.log(tabs);
    const [display, setDisplay] = useState(<div><TmServer1/></div>)

  return (
    <Aiv>
    <div className='pl-[13rem]'>
      <div>
        <Navbar />
        <div className='m-3 pl-3 text-[13px]'>
          <div className='text-[14px] p-4 flex justify-between border px-2 pr-3'>
            <div className='text-lg pl-2' style={{ fontFamily: 'semiBoldFont' }}>Server</div>
            <div className='border border-sidebar text-sidebar p-2 w-[7rem] '>Filter By</div>
          </div>
          <div className='flex justify-start'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start',lineHeight:'4rem', border: '1px solid #dddd', width: '20%', padding: '8px' }}>
              {/* {
                tmsServer?.map((item, id) => {
                  return (
                    <div key={id}
                      className='my-[1.2rem] p-1 py-3 uppercase rounded-r-[8px] cursor-pointer'
                      onClick={() => (setTabs(item))}
                      style={{ background: item === tabs ? '#1b59f8' : '', borderLeft: item === tabs? '4px solid #0a44d8' : '' }}
                    >
                      {item}<span>icon</span>
                    </div>

                  )
                })
              } */}
              <NavLink to='/Server-Health/' className={({ isActive})=> (isActive ? 'nav' : '')}>TmServer1 </NavLink>
              <NavLink to='/Server-Health/TmServer2'> TmServer2</NavLink>
              <NavLink to='/Server-Health/TmServer3'> TmServer3</NavLink>
              <NavLink to='/Server-Health/TmServer4'> TmServer4</NavLink>
              <NavLink to='/Server-Health/TmServer5'> TmServer5</NavLink>
              <NavLink to='/Server-Health/TmServer6'> TmServer6</NavLink>
         

            </div>
            <div className=' w-[80%]'>
             
              {/* {display} */}
              {/* {tabs === 'tms server 1' ? <div><TmServer1/></div>: 
              tabs === 'tms server 2'? <div><TmServer2/></div>: 
              // tabs === 'tms server 3'? <div><TmServer3/></div>: 
              tabs === 'tms server 4'? <div><TmServer4/></div>: 
              tabs === 'tms server 5'? <div><TmServer5/></div>: 
              <div><TmServer6/></div>
              } */}
              <Outlet/>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </Aiv>
  )
}

export default ServHealth

const Aiv = styled.div`
  
  
  a {
    text-decoration: none;
    color: black;
    border: 1px solid gray;
    font-size: 15.5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-bottom: 0.2rem ;
    margin-top: 0.3rem ;
    text-transform: uppercase;
    padding-left: 8px;
  }
  a.active {
    text-decoration: none;
    background:#1B59F8;
    color: #ffff;
    border-left: 4px solid #0a44d8;
  }
  .nav {
    text-decoration: none;
    background:#1B59F8;
    color: #ffff;
    border-left: 4px solid #0a44d8;
  }
  `