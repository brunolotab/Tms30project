import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'
import { hsmData } from './HSMPAGES/HSMdata'
import Paging from '../../Components/ShowPages/Paging';

function Hsm() {

  const[currentpage, setCurrentpage] = useState(1);
  const[postperpage, setPostperpage] = useState(5);

  const lastpostindex = currentpage * postperpage
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = hsmData.slice(firstpostindex, lastpostindex);

  return (
    <Div >
      <Navbar />
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold'>Hardware Security Module (HSM)</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold '> + Add New HSM</button></div>
      </div>
      <div className='text-[13px]'>
        <table className='leading-5 w-[100%] '>
          <tr className=' bg-color1 text-left pl-4' style={{ fontFamily: 'semiBoldFont' }}>
            <th className='pl-[3rem]'>HSM ID </th>
            <th>HSM NAME </th>
            <th>HSM IP ADDRESS </th>
            <th>HSM PORT NO </th>
            <th>HSM TYPE </th>
            <th>HSM DESCRIPTION </th>
          </tr>
          {
            currentpost.map((item, i) => {
              return (
              <tr key={i}>
                <td className='pl-[3rem]'>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.ip}</td>
                <td>{item.port}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
              </tr>
              )
            })
          }

        </table>
      </div>
      <div className='pl-[16rem] pr-[4rem] my-9'> <Paging
      postperpage={postperpage}
      setPostperpage={setPostperpage}
      setCurrentpage ={setCurrentpage}
      currentpage = {currentpage}
      data ={hsmData}
      />
      </div>

    </Div>
  )
}

export default Hsm

const Div = styled.div`
  /* td {
    text-align: center;
  } */
  tr:nth-child(odd) {
    background-color: #fafafa;
  }
  /* tr th {
    width: 160rem;

  } */
  th, td {
    height: 4rem;
  }
`