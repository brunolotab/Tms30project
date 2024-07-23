import React from 'react'
import Navbar from '../../Components/Navbar'
import { PrimaryData } from './PrimaryData/PrimaryData'
import ShowPages from '../../Components/ShowPages/ShowPages'
import styled from 'styled-components'

function PriRouting() {
  return (
    <Div>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Routing Configuration</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-blue-700 font-bold text-[13px] '> + Add New Configuration</button></div>
      </div>
      <div className='text-14 font-regular w-[100%] leading-5'>
        <table className=' w-[100%] leading-9'>
          <tr className='font-semiBoldFont text-left pl-4'>
            <th className='pl-2'>NAME</th>
            <th>DESCRIPTION</th>
            <th>PARAMETER</th>
            <th>SYSTEM ID</th>
            <th>ACQUIRER</th>
          </tr>
          {
            PrimaryData?.map((item) => {
              return (
                <tr key={item.id} >
                  <td className='pl-2'>{item.Name}</td>
                  <td>{item.Desc}</td>
                  <td>{item.Parameter}</td>
                  <td>{item.SID}</td>
                  <td>{item.Acquirer}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
      <ShowPages/>
    </Div>
  )
}

export default PriRouting

const Div = styled.div`
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* width: 7rem; */
  }
  
  `