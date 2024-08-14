import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import { PrimaryData } from './PrimaryData/PrimaryData'
import ShowPages from '../../Components/ShowPages/ShowPages'
import styled from 'styled-components'
import Paging from '../../Components/ShowPages/Paging'

function PrimaryRouting() {
  
  const[currentpage, setCurrentpage] = useState(1);
  const[postperpage, setPostperpage] = useState(5);

  const lastpostindex = currentpage * postperpage
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = PrimaryData.slice(firstpostindex, lastpostindex);

  return (
    <Div>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-xl pl-2'>Routing Configuration</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Configuration</button></div>
      </div>
      <div className='text-[14px] font-regular w-[100%] leading-5'>
        <table className=' w-[100%] leading-9 h-[60vh] '>
          <tr className='font-semiBoldFont text-left pl-4'>
            <th className='pl-[4rem]'>NAME</th>
            <th>DESCRIPTION</th>
            <th>PARAMETER</th>
            <th>SYSTEM ID</th>
            <th>ACQUIRER</th>
          </tr>
          {
            currentpost?.map((item) => {
              return (
                <tr key={item.id} >
                  <td className='pl-[4rem]'>{item.Name}</td>
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
      {/* <ShowPages/> */}
      <div className='pl-[16rem] pr-[4rem] my-9'> <Paging
      postperpage={postperpage}
      setCurrentpage ={setCurrentpage}
      currentpage = {currentpage}
      data ={PrimaryData}
      />
      </div>
    </Div>
  )
}
{/* <div className='pl-[16rem] pr-[4rem] mb-6'><PagesMerchants 
         postperpage={postperpage}
         setCurrentpage ={setCurrentpage}
         currentpage = {currentpage}
         data ={DataMerchants}
      />
      </div> */}

export default PrimaryRouting

const Div = styled.div`
  tr:nth-child(odd) {
    background-color: #fafafa;
    /* width: 7rem; */
  }
  
  `