import React from 'react'
import Navbar from '../../Components/Navbar'
import { SecondaryData } from './SecordaryData/SecondaryData'
import styled from 'styled-components'

function SecRouting() {
  return (
    <Div>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Secondary Routing Configuration</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-blue-700 font-bold text-[13px] '> + Add New Configuration</button></div>
      </div>
      <div className='text-14  w-[100%] leading-8'>
        <table>
          <tr className=' w-[100%] border '>
            <th className='w-[20%] pr-5'>SYSTEM ID</th>
            <th className='w-[20%]'>NAME OF SCHEME</th>
            <th className='w-[20%]'>DESCRIPTION</th>
            <th className='w-[20%] pl-2'>BIN CONFIGURATION</th>
            <th className='w-[20%] pr-20'>ACTION</th>
          </tr>
          {
            SecondaryData?.map((item,id) => {
              return (
                <tr className='w-[100%]'>
                  <td className='w-[20%] pl-14'>{item.SID}</td>
                  <td className='w-[20%] pl-9'>{item.Name}</td>
                  <td className='w-[20%] pl-14'>{item.Desc}</td>
                  <td className='w-[20%] pl-11'>{item.Bin}</td>
                  <td className='w-[20%] pl-65'>{item.Action}</td>
                </tr>
              )
            })
          }
        </table>
        </div>
    </Div>
  )
}

export default SecRouting

const Div = styled.div`
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* width: 7rem; */
  }
  
  `