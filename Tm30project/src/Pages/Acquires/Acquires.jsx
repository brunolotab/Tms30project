import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'
import { acquiresData } from './AcquiresData/AcquiresData'
import Paging from '../../Components/ShowPages/Paging';

function Acquires() {

  const[currentpage, setCurrentpage] = useState(1);
  const[postperpage, setPostperpage] = useState(5);

  const lastpostindex = currentpage * postperpage
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = acquiresData.slice(firstpostindex, lastpostindex);

  return (
    <Div className='pl-[13rem]' >
      <div className='w-[100%]'><Navbar /></div>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl pl-3'>Acquirers</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Acquires</button></div>
      </div>
      <div className='text-[13px]'>
        <table className='leading-6 w-[100%]'>
          <tr className=' bg-color2 text-left' style={{ fontFamily: 'semiBoldFont' }}>
            <th className='pl-9'>ACQUIRER NAME </th>
            <th>ACQUIRER ID </th>
            <th>TMS ID </th>
            <th>MERCHANT ID </th>
            <th>EMAIL ADDRESS </th>
            <th>CBN CODE </th>
            <th className='w-[11rem]'>ENABLE ALL TRANSACTION TYPES </th>
          </tr>
          {
            currentpost?.map((item, i) => {
              return (
                <tr key={i}>
                  <td className='pl-9'>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.tmid}</td>
                  <td>{item.mid}</td>
                  <td>{item.email}</td>
                  <td>{item.code}</td>
                  <td className='pl-12'><button>d</button></td>

                </tr>
              )
            })
          }
        </table>
      </div>
      <div className='pl-[15rem] pr-[5rem] mb-6'>
          <Paging
            postperpage={postperpage}
            setPostperpage={setPostperpage}
            setCurrentpage={setCurrentpage}
            currentpage={currentpage}
            data={acquiresData}
          />
        </div>

    </Div>
  )
}

export default Acquires

const Div = styled.div`
  
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* background-color: #d2d4da; */
  }
  th, td {
    height: 4rem;
  }
 
`