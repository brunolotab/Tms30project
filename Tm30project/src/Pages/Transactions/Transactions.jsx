import React from 'react'
import Navbar from '../../Components/Navbar'
import { Datatransaction } from './DataTransaction/Datatransaction'
import styled from 'styled-components';
import ShowPages from '../../Components/ShowPages/ShowPages';
import Apply from '../../Components/ApplyButton/Apply';

function Transactions() {
  return (
    <Div>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Transactions</div>
        <div><button className=' p-6 py-2 rounded-[4px] border border-blue-800 text-blue-700 font-semibold text-[13px] '> Filter By</button></div>
      </div>
      <div className='text-[14px] leading-[2.6rem] w-[100%] font-medium'>
        <table className=' max-w-[100vw] gap-8 py-9'>
          <tr>
            <th>TRANSACTION ID</th>
            <th>REF.NO</th>
            <th>PAN</th>
            <th>AMOUNT</th>
            <th>PROCESSOR</th>
            <th>TYPE</th>
            <th>TERMINAL ID</th>
            <th>SOFT TERMINAL ID</th>
            <th>TRAN. FEE</th>
            <th>TRAN.TYPE</th>
            <th>DATE OF</th>
            
          </tr>
          {
            Datatransaction?.map((item,id) =>{
              return (
                <tr key={id}>
                  <td  className=''>{item.Id}</td>
                  <td className='pl-7'>{item.RefNo}</td>
                  <td className='pl-7'>{item.Pan}</td>
                  <td className='pl-7'>{item.Amt}</td>
                  <td className='pl-7'>{item.ProId}</td>
                  <td className='pl-7'>{item.Type}</td>
                  <td className='pl-7'>{item.TID}</td>
                  <td className='pl-7'>{item.STID}</td>
                  <td className='pl-7'>{item.Fee}</td>
                  <td className='pl-7'>{item.Tfree}</td>
                  <td className='pl-7'>{item.date}</td>                 
                </tr>
              )
            })
          }
        </table>
      </div>
      <div className='flex justify-between  items-center px-5 mt-8 w-[100%]'>
        <div><Apply/></div>
        <div><ShowPages/></div>
      </div>
    </Div>
  )
}

export default Transactions

const Div = styled.div`
   tr:nth-child(even) {
    background-color: #fafafa;
    /* width: 7rem; */
  }
`