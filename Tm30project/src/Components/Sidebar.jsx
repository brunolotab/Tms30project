import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '../assets/Icons/Avatar.jpg'
// import { TiFolder } from 'react-icons/ti'
// import { BiBookOpen, BiChevronRight } from 'react-icons/bi'
// import { FiShoppingBag } from 'react-icons/fi'
// import { TfiPieChart } from 'react-icons/tfi'
import styled from 'styled-components'
import { SideData } from './SideBar/SidebarData'

function Sidebar() {


  const Sidedata = SideData;

  return (
    <Aiv>
      <div className='m-0 p-0 fixed top-0 left-0  z-[999] h-[100%] overflow-y-auto overflow-x-hidden'>
        <div className='bg-white border border-slate-200 w-[13rem]  text-center text-[15px] p-4 text-color4' style={{ fontFamily: 'semiBoldFont' }}>
          <div className='pr-14 flex justify-center items-center  '><div className='image'><img src={Avatar} alt='' /></div><span>BigFoot</span> </div>
          <div className='  leading-[3.0rem] p-4  pl-2 '>

            {
              Sidedata.map((item) => {
                return (
                  <div key={item.id}>
                    <NavLink to={item.path}>
                      <div className='info'><div className='chevron'>{item.indicator}</div><div style={{ marginRight: '8px' }}>{item.icon}</div> {item.title}</div>
                    </NavLink>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Aiv>
  )
}

export default Sidebar

const Aiv = styled.div`
  .info {
    display: flex;
    width: 12rem;
     align-Items: center;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  a.active {
    text-decoration: none;
    color:#1B59F8;
  }
 
  a .chevron {
    
    color: #ffff;
    width: 13px;
    /* display: none; */

  } 
  a.active .chevron {
    display: block;
    color:#1B59F8;

  } 
  .image {
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`
