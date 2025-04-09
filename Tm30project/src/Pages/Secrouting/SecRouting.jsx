import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import { SecondaryData } from './SecordaryData/SecondaryData'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Paging from '../../Components/ShowPages/Paging'
// import { ContextAPI } from '../../Components/ContextApi/PageContextProvider'

function SecRouting() {
  // const {currentpage} = useContext(ContextAPI);
  // console.log(currentpage);

  const[currentpage, setCurrentpage] = useState(1);
  const[postperpage, setPostperpage] = useState(5);

  const lastpostindex = currentpage * postperpage
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = SecondaryData.slice(firstpostindex, lastpostindex);



  const Navigate = useNavigate()
  const handleAction = (it) => {
    console.log(it);
    Navigate(`/ActionData/${it}`)
    // Navigate(`/ActionData/${it}`)
  }
  
  
  return (
    <Div className='pl-[13rem]'>
      <Navbar/>
      <div className='flex justify-between align-middle bg-white p-3 border border-l-0 border-b-slate-200 border-t-0 px-6'  >
        <div className='font-bold text-lg pl-2'>Secondary Routing Configuration</div>
        <div><button className='bg-color1 p-6 py-2 rounded-[10px] text-sidebar font-bold text-[13px] '> + Add New Configuration</button></div>
      </div>
      <div className='text-[14px] font-regular '>
        <table className=' w-[100%] leading-3 '>
          <tr className='font-semiBoldFont text-left pl-4'>
            <th className='pl-8'>SYSTEM ID</th>
            <th>NAME OF SCHEME</th>
            <th>DESCRIPTION</th>
            <th>BIN CONFIGURATION</th>
            <th>ACTION</th>
          </tr>
          {
            currentpost?.map((item,id) => {
              return (
                <tr key={id}>
                  <td className='pl-8'>{item.SID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Desc}</td>
                  <td>{item.Bin}</td>
                  <td className='cursor-pointer'  onClick={() => handleAction(id)}>{item.Action}</td>
                </tr>
              )
            })
          }
        </table>
        </div>
      {/* <ShowPages/> */}
      <div className='pl-[16rem] pr-[4rem] my-9'>
      <Paging
      postperpage={postperpage}
      setCurrentpage ={setCurrentpage}
      currentpage = {currentpage}
      setPostperpage = { setPostperpage}
      data ={SecondaryData}
      />
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
  th, td {
    height: 4rem;
  }
  
  `