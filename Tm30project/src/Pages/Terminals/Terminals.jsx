import React from 'react'
import Navbar from '../../Components/Navbar'
import { DataTerminals } from './DataTerminal/Dataterminal'
import styled from 'styled-components'

function Terminals() {


  return (
    <Div>
      <Navbar />
       <div className='flex justify-between align-middle bg-primary p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Merchants</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Merchant</button></div>
      </div>
      <div className='p-5'>
        <div className='flex gap-4 pl-2'>
          <div className='p-2 border border-black rounded-[4px] w-[10rem]'> Bulk Actions</div>
          <button className='border border-sidebar rounded-[4px] p-2 w-25 text-sidebar bg-blue-500'> Apply</button>
        </div>
      </div>
      <div className='text-[14px] leading-[2.6rem] w-[100%] font-medium overflow-auto'>
        <table className=' w-[120%]'>
          <tr>
            <th className='pl-4'>TERMINAL ID</th>
            <th>TYPE</th>
            <th>SERIAL NUMBER</th>
            <th>FIRMWARE NUMBER</th>
            <th>BUILD NUMBER</th>
            <th>MERCHANT ID</th>
            <th>OS VERSION</th>
            <th>TERMINAL STATUS</th>
            <th>ADDRESS</th>
            <th>COUNTRY CODE</th>
            <th>DATE CREATED</th>
          </tr>
          {
            DataTerminals.map((item) => {
              return(
                <tr key={item.id} >
                  <td className='pl-6'>{item.TID}</td>
                  <td className='pl-4' style={{fontFamily:'semiBoldFont'}} >{item.Type}</td>
                  <td className='pl-4'>{item.Snumber}</td>
                  <td className='pl-4'>{item.Fnumber}</td>
                  <td className='pl-4'>{item.Bnumber}</td>
                  <td className='pl-4'>{item.MID}</td>
                  <td className='pl-4'>{item.OS}</td>
                  <td style={{color:`${
                  item?.TStatus === 'Active'? 'green' : 'red'
                }`, paddingLeft:'1rem'}} >{item.TStatus}</td>
                  {/* <td className={`text-[${
                  item?.TStatus === 'Active'? 'bg-green-800' : 'bg-red-800'
                }] pl-4`} >{item.TStatus}</td> */}
                  <td className='pl-4'>{item.Adress}</td>
                  <td className='pl-4'>{item.Code}</td>
                  <td className='pl-4'>{item.Date}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </Div>
  )
}

export default Terminals


const Div = styled.div`
  /* td {
    text-align: left;
    width: 5rem;
    font-size: 13px;
  } */
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* width: 7rem; */
  }
  /* th {
    padding-left: -12px;
    font-size: 14px;
    border: 1px solid red;
  } */
  `