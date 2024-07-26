import React from 'react'
import Navbar from '../../Components/Navbar'
import { Processordata } from './ProcessorData/Processordata'
import styled from 'styled-components';

function Processors() {
  const dataProcessor = Processordata;
  return (
    <Div>
      <Navbar />
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='text-[20px]' style={{fontFamily:'semiBoldFont'}}>Processors</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Processors</button></div>
      </div>
      <div className='text-[14px] w-[100%] leading-5' style={{fontFamily:'semiBoldFont'}}>
        <table className='leading-10 w-[100%] ' >
          <tr className='text-left pl-9'>
            <th className='pl-6'>PROCESSOR 1D</th>
            <th>PROCESSOR NAME</th>
            <th>PROCESSOR IP ADRESS</th>
            <th>PROCESSOR PORT NO.</th>
            <th>PROCESSOR TYPE</th>
            <th>PROCESSOR DESCRIPTION</th>
          </tr>
          {
            dataProcessor.map((item, id) => {
              return (
                <tr key={id}>
                  <td className='pl-6'>{item.ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Adress}</td>
                  <td>{item.Port}</td>
                  <td>{item.Type}</td>
                  <td>{item.Desc}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </Div >
  )
}

export default Processors

const Div = styled.div`
 
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* width: 7rem; */
  }
 
`