import React from 'react'
import { LogoutData } from './LogoutData/LogoutData'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'

function Logout() {
  return (
    <Div className=' text-[14px] w-[100%] pl-[13rem]' >
      <Navbar/>
      <div>
        <div className='text-lg border border-slate-200 pl-8 p-4 w-[100%]'>Activity Log</div>
        
        <div className='flex justify-between items-center w-[100%] py-5 p-8 border border-slate-200'>
          <div className=' flex items-center w-[16rem] gap-5 border-slate-200'> 
            <div>
              <div>Start Date</div>
              <div className='border p-1 rounded-[6px] w-[12rem] mt-1'>25/10/2022</div>
            </div>
            <div className='pt-4'>{'-'}</div>
            <div>
              <div>Start Date</div>
              <div className='border p-1 rounded-[6px] w-[12rem] mt-1'>25/10/2022</div>
            </div>
          </div>

          <input placeholder='search' className='w-[12rem] border-slate-200 border pl-3 rounded-[8px]' />
        </div>
        {
          LogoutData.map((item) => {
            return (
              <div key={item.id} className='details'>
                <div>{item.icon}</div>
                <div>
                  <div>{item.title}</div>
                  <div className='text-[10px] text-color3'>{item.date}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-between items-center text-[13px] text-color3 w-[100%] p-4 px-8 border border-slate-200'>
        <div className='w-[15rem]'>Showing 1-10 of 60 entries</div>
        <div className='flex justify-around w-[12rem] py-8'><div>Rows per page:</div> <div>10</div><div>L</div><div>1</div><div>R</div></div>
      </div>
    </Div>
  )
}

export default Logout

const Div = styled.div`
  .details:nth-child(even){
    background-color: #fafafa;
  

  }
  .details {
    padding: 10px;
    padding-left: 2rem;
  }

`