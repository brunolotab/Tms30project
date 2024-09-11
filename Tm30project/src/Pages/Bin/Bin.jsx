import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import { BinData } from './BinData/BinData'
import styled from 'styled-components'
// import ShowPages from '../../Components/ShowPages/ShowPages'
import Paging from '../../Components/ShowPages/Paging'

function Bin() {
  const[currentpage, setCurrentpage] = useState(1);
  const[postperpage, setPostperpage] = useState(5);

  const lastpostindex = currentpage * postperpage
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = BinData.slice(firstpostindex, lastpostindex);

  return (
    <Div className='pl-[13rem]' >
      <div>
        <Navbar />
        <div className='flex justify-between align-middle bg-white w-[97%] p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
          <div className=' text-xl pl-3'  style={{fontFamily:'semiBoldFont'}}>Bin</div>
          <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Bin</button></div>
        </div>
        <div className='text-[13px] font-regular w-[98%] leading-5 pl-3'>
          <table className=' w-[97%] leading-9'>
            <tr className='font-semiBoldFont text-left pl-4'  style={{fontFamily:'semiBoldFont'}}>
              <th className='pl-6'>BIN 1D</th>
              <th>BIN NAME</th>
              <th>BIN </th>
              <th>BIN DESCRIPTION</th>
              <th>PROCESSOR</th>
            </tr>
            {
              currentpost?.map((item,id) =>{
                return (
                  <tr key={id}>
                    <td className='pl-6'>{item.Id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Bin}</td>
                    <td>{item.Desc}</td>
                    <td>{item.Processor}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
        {/* <div className='mt-4 pr-8'><ShowPages/></div> */}
        <div className='pl-[15rem] pr-[5rem] mb-6'>
          <Paging
            postperpage={postperpage}
            setPostperpage={setPostperpage}
            setCurrentpage={setCurrentpage}
            currentpage={currentpage}
            data={BinData}
          />
        </div>
      </div>
    </Div>
  )
}

export default Bin

const Div = styled.div`
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* width: 7rem; */
  }
  th, td {
    height: 4rem;
  }
  
  `