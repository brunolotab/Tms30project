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
        <div className='font-bold text-xl'>Processors</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-blue-700 font-bold text-[13px] '> + Add New Processors</button></div>
      </div>
      <div className='text-[14px]'>
        <table className='leading-8 w-[100%] text-[14px]' >
          <tr>
            <th>PROCESSOR 1D</th>
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
                  <td>{item.ID}</td>
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
  td {
    text-align: left;
    width: 5rem;
    font-size: 13px;
  }
  tr:nth-child(odd) {
    background-color: #fafafa;
    width: 7rem;
  }
  th {
    padding-left: -12px;
    font-size: 14px;
    border: 1px solid red;


  }
 
`