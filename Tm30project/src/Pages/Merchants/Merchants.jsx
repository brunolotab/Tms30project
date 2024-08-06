import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'
import { DataMerchants } from './DataMachant/Datamerchants'


function Merchants() {

  return (

    <Div >
      <Navbar />
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Merchants</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Merchant</button></div>
      </div>
      <div className='text-[14px] w-[100%] overflow-auto'>
        <table className='leading-6 w-[120%] h-[100vh]'>
          <tr className=' bg-color2 ' style={{ fontFamily: 'semiBoldFont' }}>
            <th>MERCHANTS NAME </th>
            <th>MERCHANTS ID </th>
            <th>TMS ID </th>
            <th>MERCHANT ID </th>
            <th>EMAIL ADDRESS </th>
            <th>CBN CODE </th>
            <th>ENABLE ALL TRANSACTION TYPES </th>
          </tr>
          {
            DataMerchants.map((item,id) => {
              return (
                <tr key={id}>
                  <td>{item.name}</td>
                  <td>{item.MID}</td>
                  <td>{item.Tid}</td>
                  <td>{item.MerId}</td>
                  <td>{item.Email}</td>
                  <td>{item.code}</td>
                  <td >{item.type}</td>
                </tr>
              )
            })
          }
        </table>
      </div>


    </Div>
  )
}

export default Merchants

const Div = styled.div`
  td {
    text-align: center;
  }
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* background-color: #d2d4da; */
  }
 
`


