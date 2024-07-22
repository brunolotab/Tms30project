import React from 'react'
import Navbar from '../../Components/Navbar'
import { Datatransaction } from './DataTransaction/Datatransaction'
import styled from 'styled-components';
import ShowPages from '../../Components/ShowPages/ShowPages';
import Apply from '../../Components/ApplyButton/Apply';

function Transactions() {
  const transactions = Datatransaction;
  return (
    <Div>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Transactions</div>
        <div><button className=' p-6 py-2 rounded-[4px] border border-blue-800 text-blue-700 font-semibold text-[13px] '> Filter By</button></div>
      </div>
      <div className='text-[14px] leading-[2.6rem] min-w-[100%] font-medium'>
        <table className=' min-w-[100vw] py-9'>
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
            transactions?.map((item,id) =>{
              return (
                <tr key={id}>
                  <td>{item.Id}</td>
                  <td>{item.RefNo}</td>
                  <td>{item.Pan}</td>
                  <td>{item.Amt}</td>
                  <td>{item.ProId}</td>
                  <td>{item.Type}</td>
                  <td>{item.TID}</td>
                  <td>{item.STID}</td>
                  <td>{item.Fee}</td>
                  <td>{item.Tfree}</td>
                  <td>{item.date}</td>                 
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