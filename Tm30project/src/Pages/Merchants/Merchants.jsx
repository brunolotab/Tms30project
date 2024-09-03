import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'
import { DataMerchants } from './DataMachant/Datamerchants'
// import PagesMerchants from './PagesMerchants';
import Paging from '../../Components/ShowPages/Paging';


function Merchants() {
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(5);

  const lastpostindex = currentpage * postperpage
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = DataMerchants.slice(firstpostindex, lastpostindex);

  const [toggle, setToggle] = useState(true)
  const [move, setMove] = useState()

  return (

    <Div >
      <Navbar />
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl'>Merchants</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Merchant</button></div>
      </div>
      <div className='text-[13px] w-[100%] overflow-auto'>
        <table className='leading-6 w-[120%]'>
          <tr className=' bg-color2 text-left' style={{ fontFamily: 'semiBoldFont' }}>
            <th className='pl-[4rem]'>MERCHANTS NAME </th>
            <th>MERCHANTS ID </th>
            <th>TMS ID </th>
            <th>ACQUIER ID </th>
            <th>EMAIL ADDRESS </th>
            <th>LGA </th>
            <th>COUNTRY CODE </th>
            <th>ENABLE ALL TRANS. TYPES </th>
          </tr>
          {
            currentpost.map((item, id) => {
              return (
                <tr key={id}>
                  <td className='pl-[4rem]'>{item.name}</td>
                  <td>{item.MID}</td>
                  <td>{item.Tid}</td>
                  <td>{item.AcqId}</td>
                  <td>{item.Email}</td>
                  <td>{item.LGA}</td>
                  <td >{item.code}</td>
                  <td className='pl-14 cursor-pointer'><div style={{ width: '1.6rem', height: '5px', background: '#cccc' }} >
                    <div style={{ position: 'relative', top: '-10px', }} className={toggle && move === id ? 'pl-6' : 'pl-0 text-red-700'} onClick={() => { setToggle(!toggle); setMove(id) }}>d</div></div>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
      <div className='pl-[13rem] pr-[4rem] mb-6'><Paging
        postperpage={postperpage}
        setPostperpage={setPostperpage}
        setCurrentpage={setCurrentpage}
        currentpage={currentpage}
        data={DataMerchants}
      />
      </div>

    </Div>
  )
  function handletoggle() {
    setToggle(!toggle);
    // console.log(it);
  }

}

export default Merchants

const Div = styled.div`
  /* td {
    text-align: center;
  } */
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* background-color: #d2d4da; */
  }
  th, td {
    height: 4rem;
  }
 
`


